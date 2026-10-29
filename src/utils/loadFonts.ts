import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Social cards are rendered at build time with the same typeface as the site.
// The font files ship with the @fontsource/newsreader package, so the build
// never has to reach the network.
const FONT_DIR = join(
  process.cwd(),
  "node_modules",
  "@fontsource",
  "newsreader",
  "files"
);

type SatoriFont = {
  name: string;
  data: Buffer;
  weight: 400 | 500 | 600;
  style: "normal" | "italic";
};

let cache: Promise<SatoriFont[]> | undefined;

export default function loadFonts(): Promise<SatoriFont[]> {
  cache ??= Promise.all(
    ([400, 500, 600] as const).map(async weight => ({
      name: "Newsreader",
      data: await readFile(
        join(FONT_DIR, `newsreader-latin-${weight}-normal.woff`)
      ),
      weight,
      style: "normal" as const,
    }))
  );
  return cache;
}

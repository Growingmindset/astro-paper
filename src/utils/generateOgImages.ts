import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import loadFonts from "./loadFonts";
import { SITE } from "@/config";

// One card design for the whole site: felt green, the title set large in
// Newsreader, the name and domain along the bottom.
const FELT = "#17493a";
const PAPER = "#f4f2ec";

type Node = {
  type: string;
  props: Record<string, unknown> & { children?: unknown };
};

const el = (
  type: string,
  style: Record<string, unknown>,
  children?: unknown
): Node => ({ type, props: { style, children } });

function card(title: string, subtitle?: string) {
  const size = title.length > 70 ? 58 : title.length > 40 ? 68 : 80;
  return el(
    "div",
    {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px 84px",
      background: FELT,
      color: PAPER,
      fontFamily: "Newsreader",
    },
    [
      el("div", { display: "flex", flexDirection: "column" }, [
        el(
          "div",
          {
            fontSize: size,
            fontWeight: 500,
            lineHeight: 1.08,
            letterSpacing: "-0.015em",
          },
          title
        ),
        ...(subtitle
          ? [
              el(
                "div",
                {
                  marginTop: 28,
                  fontSize: 32,
                  lineHeight: 1.35,
                  opacity: 0.78,
                },
                subtitle
              ),
            ]
          : []),
      ]),
      el(
        "div",
        {
          display: "flex",
          justifyContent: "space-between",
          fontSize: 30,
          opacity: 0.8,
        },
        [
          el("div", {}, SITE.author),
          el(
            "div",
            {},
            SITE.website.replace(/^https?:\/\//, "").replace(/\/$/, "")
          ),
        ]
      ),
    ]
  );
}

async function render(node: Node) {
  const svg = await satori(node as never, {
    width: 1200,
    height: 630,
    fonts: await loadFonts(),
  });
  return new Resvg(svg).render().asPng();
}

export function generateOgImage(title: string, subtitle?: string) {
  return render(card(title, subtitle));
}

export function generateSiteOgImage() {
  return render(
    card(SITE.author, "Essays on money, risk, and how people decide.")
  );
}

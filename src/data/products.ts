export interface ProductVariant {
  label: string;
  image: string;
  alt: string;
  stripeUrl: string;
  price?: number;
}

export type ProductLine = "line-01" | "line-02" | "essentials";

export interface Product {
  id: string;
  line: ProductLine;
  name: string;
  description: string;
  price: number;
  published: boolean;
  variants: ProductVariant[];
}

export const products: Product[] = [
  // ---------- LINE 01 — MOTIVATIONAL ----------
  {
    id: "hit-maxes-evade-taxes",
    line: "line-01",
    name: "Hit Maxes, Evade Taxes",
    description:
      "For the ones who chase PRs and dodge W-2s. Soft, heavyweight cotton blend built to survive leg day and everything after.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Tee",
        image: "/shop/hit-maxes-evade-taxes.png",
        alt: "Hit Maxes, Evade Taxes Tee",
        stripeUrl: "https://buy.stripe.com/4gMbJ01ER6atbxF6C82oE00",
      },
    ],
  },
  {
    id: "all-in-no-stop-loss",
    line: "line-01",
    name: "All In, No Stop Loss",
    description:
      "No hedging. No sitting out. Bold statement tee built for the ones who bet on themselves.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Tee",
        image: "/shop/nostoploss-mockup.png",
        alt: "All In, No Stop Loss Tee",
        stripeUrl: "https://buy.stripe.com/5kQbJ0gzLbuN0T13pW2oE01",
      },
    ],
  },
  {
    id: "ggg-sups",
    line: "line-01",
    name: "Good Girls Get Sups",
    description:
      "Good girls get sups — everyone else gets excuses. Racerback and muscle-tee cuts built for the ones who put in the work first.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Racerback",
        image: "/shop/ggg-sups-racerback.png",
        alt: "Good Girls Get Sups Racerback",
        stripeUrl: "https://buy.stripe.com/fZu9AS6Zb6atdFN1hO2oE07",
      },
      {
        label: "Muscle Tee",
        image: "/shop/ggg-sups-muscle-tee.png",
        alt: "Good Girls Get Sups Muscle Tee",
        stripeUrl: "https://buy.stripe.com/4gM00idnzcyR45dbWs2oE08",
      },
    ],
  },
  {
    id: "warren-buffett-tank",
    line: "line-01",
    name: "Warren Buffett Tank",
    description:
      "Value investing for your body — patience compounds in the gym the same way it compounds in the market. Sleeveless, unapologetic, built for the long game.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Tank",
        image: "/shop/warren-buffett-tank.png",
        alt: "Warren Buffett Tank",
        stripeUrl: "https://buy.stripe.com/cNi8wO1ER0Q9fNV9Ok2oE06",
      },
    ],
  },

  // ---------- LINE 02 — INTELLECTUAL ----------
  {
    id: "vsyo-voda",
    line: "line-02",
    name: "Vsyo Voda",
    description:
      "Everything is water — chaos finding its calm. Thin-line graphic tee for the ones who think as hard as they train.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Tee",
        image: "/shop/vsyo-voda-front.png",
        alt: "Vsyo Voda Tee",
        stripeUrl: "https://buy.stripe.com/4gMcN4cjvgP7atBgcI2oE02",
      },
    ],
  },
  {
    id: "maximum-exposure",
    line: "line-02",
    name: "Maximum Exposure",
    description:
      "Every category maxed out — risk, intensity, discipline. Hazard-label graphic tee for the ones who never dial it back.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Black",
        image: "/shop/NFPA_BLACK.png",
        alt: "Maximum Exposure Tee, black",
        stripeUrl: "https://buy.stripe.com/aFa6oGfvH8iB7hp5y42oE03",
      },
    ],
  },

  // ---------- ESSENTIALS ----------
  {
    id: "trucker-cap",
    line: "essentials",
    name: "Risk On Trucker Cap",
    description:
      "Structured five-panel, mesh back, embroidered mark up front. The cap for whichever mode you're in.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "One size",
        image: "/shop/risk-on-trucker-cap.png",
        alt: "Risk On Trucker Cap",
        stripeUrl: "https://buy.stripe.com/bJeeVcgzL8iBdFNaSo2oE05",
      },
    ],
  },
  {
    id: "logo-hat",
    line: "essentials",
    name: "Risk On Logo Hat",
    description:
      "Curved brim, embroidered wordmark, adjustable strap. A clean daily topper that doesn't try too hard.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "One size",
        image: "/shop/risk-on-logo-hat.png",
        alt: "Risk On Logo Hat",
        stripeUrl: "https://buy.stripe.com/8x2fZgerD0Q9atBgcI2oE04",
      },
    ],
  },
];

export const lineMeta: Record<ProductLine, { heading: string; title: string; blurb: string }> = {
  "line-01": {
    heading: "Line 01",
    title: "Motivational",
    blurb: "Bold statements for the ones who bet on themselves.",
  },
  "line-02": {
    heading: "Line 02",
    title: "Intellectual",
    blurb: "Markets, philosophy, and the laws underneath both.",
  },
  essentials: {
    heading: "Essentials",
    title: "Essentials",
    blurb: "",
  },
};
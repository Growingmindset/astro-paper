export interface ProductVariant {
  label: string;
  image: string;
  alt: string;
  /** Stripe Payment Link. Leave empty to show "Coming soon". */
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
    id: "all-in-no-stop-loss",
    line: "line-01",
    name: "All In, No Stop Loss",
    description:
      "A hazard label maxed out at 4-4-4. Not reckless: the right risk at the right time, sized so you can play again tomorrow. Small πφ on the chest, the full label on the back.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Tee",
        image: "/shop/all-in-no-stop-loss.webp",
        alt: "All In, No Stop Loss tee, black, front and back",
        stripeUrl: "https://buy.stripe.com/aFa6oGfvH8iB7hp5y42oE03",
      },
    ],
  },
  {
    id: "ggg-sups",
    line: "line-01",
    name: "Good Girls Get Sups",
    description:
      "Good girls get sups. Everyone else gets excuses. Muscle-tee cut for the ones who put the work in first.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Muscle Tee",
        image: "/shop/good-girls-get-sups.webp",
        alt: "Good Girls Get Sups muscle tee, black",
        stripeUrl: "https://buy.stripe.com/4gM00idnzcyR45dbWs2oE08",
      },
    ],
  },

  // ---------- LINE 02 — INTELLECTUAL ----------
  {
    id: "highest-and-best",
    line: "line-02",
    name: "Highest and Best",
    description:
      "The appraiser's test for any asset, applied to yourself: legally permissible, physically possible, financially feasible, maximally productive. RISK ON allocation mark on the front, the full test on the back.",
    price: 34.99,
    published: true,
    variants: [
      {
        label: "Back",
        image: "/shop/highest-and-best-back.webp",
        alt: "Highest and Best tee, charcoal, back print",
        stripeUrl: "",
      },
      {
        label: "Front",
        image: "/shop/highest-and-best-front.webp",
        alt: "Highest and Best tee, charcoal, front with RISK ON allocation protocol mark",
        stripeUrl: "",
      },
    ],
  },
  {
    id: "vsyo-voda",
    line: "line-02",
    name: "Vsyo Voda",
    description:
      "Everything is water: chaos finding its calm. Thin-line graphic tee for the ones who think as hard as they train.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Tee",
        image: "/shop/vsyo-voda.webp",
        alt: "Vsyo Voda tee, black",
        stripeUrl: "https://buy.stripe.com/4gMcN4cjvgP7atBgcI2oE02",
      },
    ],
  },

  // ---------- ESSENTIALS ----------
  {
    id: "risk-on-crewneck",
    line: "essentials",
    name: "Risk On Crewneck",
    description:
      "Garment-dyed crewneck with a small embroidered RISK ON wordmark. Pick your color at checkout.",
    price: 54.99,
    published: true,
    variants: [
      {
        label: "Bone",
        image: "/shop/crewneck-bone.webp",
        alt: "Risk On crewneck, bone",
        stripeUrl: "",
      },
      {
        label: "Slate",
        image: "/shop/crewneck-slate.webp",
        alt: "Risk On crewneck, slate",
        stripeUrl: "",
      },
    ],
  },
  {
    id: "trucker-cap",
    line: "essentials",
    name: "Risk On Trucker Cap",
    description:
      "All black, mesh back, embroidered wordmark up front. The cap for whichever mode you're in.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Front",
        image: "/shop/trucker-black-front.webp",
        alt: "Risk On trucker cap, black, front",
        stripeUrl: "https://buy.stripe.com/bJeeVcgzL8iBdFNaSo2oE05",
      },
      {
        label: "Side",
        image: "/shop/trucker-black-side.webp",
        alt: "Risk On trucker cap, black, side",
        stripeUrl: "https://buy.stripe.com/bJeeVcgzL8iBdFNaSo2oE05",
      },
    ],
  },
  {
    id: "pi-phi-cap",
    line: "essentials",
    name: "πφ Signature Cap",
    description:
      "Fitted cap with the πφ mark up front and your name stitched on the side, shown with RUDY G. Add the name you want at checkout.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Front",
        image: "/shop/pi-phi-cap-front.webp",
        alt: "πφ signature cap, navy, front",
        stripeUrl: "https://buy.stripe.com/8x2fZgerD0Q9atBgcI2oE04",
      },
      {
        label: "Side",
        image: "/shop/pi-phi-cap-side.webp",
        alt: "πφ signature cap, navy, side with RUDY G stitched",
        stripeUrl: "https://buy.stripe.com/8x2fZgerD0Q9atBgcI2oE04",
      },
    ],
  },
  {
    id: "inverted-dad-hat",
    line: "essentials",
    name: "Risk On, Flipped",
    description:
      "RISK ON stitched upside down. Read it one way, read it the other. Unstructured dad hat in spruce, adjustable strap.",
    price: 29.99,
    published: true,
    variants: [
      {
        label: "Front",
        image: "/shop/inverted-dad-hat-front.webp",
        alt: "Risk On dad hat, spruce green, wordmark upside down, front",
        stripeUrl: "",
      },
      {
        label: "Side",
        image: "/shop/inverted-dad-hat-side.webp",
        alt: "Risk On dad hat, spruce green, wordmark upside down, side",
        stripeUrl: "",
      },
    ],
  },
];

export const lineMeta: Record<
  ProductLine,
  { heading: string; title: string; blurb: string }
> = {
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

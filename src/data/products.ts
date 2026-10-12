export interface ProductVariant {
  label: string;
  image: string;
  alt: string;
  /** Stripe Payment Link. Leave empty to show "Coming soon". */
  stripeUrl: string;
  price?: number;
}

export type ProductLine = "capital" | "essentials" | "physical";

/** Order the sections appear on /shop. */
export const lineOrder: ProductLine[] = ["capital", "essentials", "physical"];

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
  // Listed in display order within each line.

  // ---------- RISK ON / CAPITAL ----------
  {
    id: "highest-and-best",
    line: "capital",
    name: "Highest and Best Tee",
    description:
      "The appraiser's four-part test for any asset, applied to yourself: legally permissible, physically possible, financially feasible, maximally productive. Allocation mark on the front, the full test on the back.",
    price: 38,
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
        alt: "Highest and Best tee, charcoal, front allocation mark",
        stripeUrl: "",
      },
    ],
  },
  {
    id: "vsyo-voda",
    line: "capital",
    name: "Vsyo Voda Tee",
    description:
      "Everything is water. Volatile on the left, calm on the right: chaotic systems settle, markets included. Thin-line print on black.",
    price: 32,
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
      "Garment-dyed crewneck with a small embroidered RISK ON wordmark. Bone or slate; pick color and size at checkout.",
    price: 58,
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
      "All black, mesh back, embroidered wordmark. The everyday cap.",
    price: 34,
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
      "Fitted cap with the πφ mark up front and your name stitched on the side (shown: RUDY G). Enter your name at checkout.",
    price: 38,
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
    id: "flipped-dad-hat",
    line: "essentials",
    name: "Risk On Flipped Dad Hat",
    description:
      "RISK ON stitched upside down. Read it one way, read it the other. Unstructured spruce dad hat, adjustable strap.",
    price: 32,
    published: true,
    variants: [
      {
        label: "Front",
        image: "/shop/inverted-dad-hat-front.webp",
        alt: "Risk On flipped dad hat, spruce, front",
        stripeUrl: "",
      },
      {
        label: "Side",
        image: "/shop/inverted-dad-hat-side.webp",
        alt: "Risk On flipped dad hat, spruce, side",
        stripeUrl: "",
      },
    ],
  },

  // ---------- RISK ON / PHYSICAL ----------
  {
    id: "all-in-no-stop-loss",
    line: "physical",
    name: "All In, No Stop Loss Tee",
    description:
      "A hazard label maxed out at 4-4-4. Not reckless: the right risk at the right time, sized so you can play again tomorrow. Small πφ on the chest, full label on the back.",
    price: 32,
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
    line: "physical",
    name: "Good Girls Get Sups Muscle Tee",
    description:
      "Good girls get sups. Everyone else gets excuses. Muscle-tee cut for the ones who put the work in first.",
    price: 30,
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
];

export const lineMeta: Record<
  ProductLine,
  { heading: string; title: string; blurb: string }
> = {
  capital: {
    heading: "Risk On / Capital",
    title: "Capital",
    blurb: "Markets, appraisal, and the laws underneath both.",
  },
  essentials: {
    heading: "Essentials",
    title: "Essentials",
    blurb: "The mark, for every day.",
  },
  physical: {
    heading: "Risk On / Physical",
    title: "Physical",
    blurb: "For the gym. Bet on yourself, then put the work in.",
  },
};

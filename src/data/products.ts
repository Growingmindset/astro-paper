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
  /** When set, the piece shows as "Coming" with this date and no Buy link. */
  comingSoon?: string;
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
        stripeUrl: "https://buy.stripe.com/bJe6oG97jeGZeJRaSo2oE09",
      },
      {
        label: "Front",
        image: "/shop/highest-and-best-front.webp",
        alt: "Highest and Best tee, charcoal, front allocation mark",
        stripeUrl: "https://buy.stripe.com/bJe6oG97jeGZeJRaSo2oE09",
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
    published: false,
    variants: [
      {
        label: "Tee",
        image: "/shop/vsyo-voda.webp",
        alt: "Vsyo Voda tee, black",
        stripeUrl: "https://buy.stripe.com/8x228q0AN42ldFN6C82oE0a",
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
        stripeUrl: "https://buy.stripe.com/8x29ASdnzfL3cBJ4u02oE0b",
      },
      {
        label: "Slate",
        image: "/shop/crewneck-slate.webp",
        alt: "Risk On crewneck, slate",
        stripeUrl: "https://buy.stripe.com/8x29ASdnzfL3cBJ4u02oE0b",
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
        stripeUrl: "https://buy.stripe.com/aFafZg6ZbcyReJRd0w2oE0c",
      },
      {
        label: "Side",
        image: "/shop/trucker-black-side.webp",
        alt: "Risk On trucker cap, black, side",
        stripeUrl: "https://buy.stripe.com/aFafZg6ZbcyReJRd0w2oE0c",
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
    published: false,
    variants: [
      {
        label: "Front",
        image: "/shop/pi-phi-cap-front.webp",
        alt: "πφ signature cap, navy, front",
        stripeUrl: "https://buy.stripe.com/28EbJ02IV42l45dd0w2oE0d",
      },
      {
        label: "Side",
        image: "/shop/pi-phi-cap-side.webp",
        alt: "πφ signature cap, navy, side with RUDY G stitched",
        stripeUrl: "https://buy.stripe.com/28EbJ02IV42l45dd0w2oE0d",
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
    published: false,
    variants: [
      {
        label: "Front",
        image: "/shop/inverted-dad-hat-front.webp",
        alt: "Risk On flipped dad hat, spruce, front",
        stripeUrl: "https://buy.stripe.com/9B6dR82IVeGZ319f8E2oE0e",
      },
      {
        label: "Side",
        image: "/shop/inverted-dad-hat-side.webp",
        alt: "Risk On flipped dad hat, spruce, side",
        stripeUrl: "https://buy.stripe.com/9B6dR82IVeGZ319f8E2oE0e",
      },
    ],
  },

  // ---------- RISK ON / PHYSICAL ----------
  {
    id: "all-in-hazard-label",
    line: "physical",
    name: "Hazard Label Tee (retired)",
    description:
      "A hazard label maxed out at 4-4-4. Not reckless: the right risk at the right time, sized so you can play again tomorrow. Small πφ on the chest, full label on the back.",
    price: 32,
    published: false,
    variants: [
      {
        label: "Tee",
        image: "/shop/all-in-no-stop-loss.webp",
        alt: "All In, No Stop Loss tee, black, front and back",
        stripeUrl: "https://buy.stripe.com/6oU6oGdnz7exatB4u02oE0f",
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
    published: false,
    variants: [
      {
        label: "Muscle Tee",
        image: "/shop/good-girls-get-sups.webp",
        alt: "Good Girls Get Sups muscle tee, black",
        stripeUrl: "https://buy.stripe.com/cNi14m5V742l8lt4u02oE0g",
      },
    ],
  },

  // ---------- THE 2026-27 LINE: COMING SOON ----------
  // Swap comingSoon for a real Stripe link (and a real photo) as each one
  // goes live.
  {
    id: "all-in-original",
    line: "physical",
    name: "All In, No Stop Loss Tee",
    description:
      "The flagship. ALL IN across the chest, NO STOP LOSS in red underneath. The πφ mark and RISK ON wordmark on the back. Black.",
    price: 34,
    published: true,
    comingSoon: "November 2026",
    variants: [
      {
        label: "Tee",
        image: "/shop/all-in-original.webp",
        alt: "All In, No Stop Loss tee, black, front and back",
        stripeUrl: "",
      },
    ],
  },
  {
    id: "risk-on-hoodie",
    line: "essentials",
    name: "Risk On Hoodie",
    description:
      "Heavyweight black hoodie. Small embroidered RISK ON on the chest, πφ mark at the back of the neck.",
    price: 68,
    published: true,
    comingSoon: "December 2026",
    variants: [
      {
        label: "Hoodie",
        image: "/shop/risk-on-hoodie.webp",
        alt: "Design preview of the Risk On hoodie, black",
        stripeUrl: "",
      },
    ],
  },
  {
    id: "grade-the-decision",
    line: "capital",
    name: "Grade the Decision Tee",
    description:
      "Rule 8 of the poker year. Forest green, small πφ on the chest, and on the back in serif: Grade the decision, not the result. NONZERO 2027 underneath.",
    price: 34,
    published: true,
    comingSoon: "January 2027",
    variants: [
      {
        label: "Tee",
        image: "/shop/grade-the-decision.webp",
        alt: "Design preview of the Grade the Decision tee, forest green",
        stripeUrl: "",
      },
    ],
  },
  {
    id: "we-will-judge-you",
    line: "physical",
    name: "We Will Judge You Tee",
    description:
      "For the gym. Washed black, boxy fit, small πφ on the front, WE WILL JUDGE YOU. across the back.",
    price: 36,
    published: true,
    comingSoon: "February 2027",
    variants: [
      {
        label: "Tee",
        image: "/shop/we-will-judge-you.webp",
        alt: "Design preview of the We Will Judge You tee, washed black",
        stripeUrl: "",
      },
    ],
  },
  {
    id: "final-ledger",
    line: "capital",
    name: "Final Ledger Tee",
    description:
      "Limited. The real result of the poker year printed on the back: Nonzero, 2027. 12 months. $20,000 cap. Result. Sold for 30 days, then retired.",
    price: 38,
    published: true,
    comingSoon: "January 2028",
    variants: [
      {
        label: "Tee",
        image: "/shop/final-ledger.webp",
        alt: "Design preview of the Final Ledger tee, black",
        stripeUrl: "",
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

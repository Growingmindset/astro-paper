/**
 * @typedef {Object} ProductVariant
 * @property {string} label - Short label on the toggle pill, e.g. "Tee", "Tank", "Black"
 * @property {string} image - Path to the image, relative to /public
 * @property {string} alt - Alt text
 * @property {string} stripeUrl - Stripe Payment Link for this exact variant
 * @property {number} [price] - Optional price override (defaults to product.price)
 *
 * @typedef {Object} Product
 * @property {string} id - Unique slug
 * @property {"line-01"|"line-02"|"essentials"} line
 * @property {string} name
 * @property {string} description
 * @property {number} price - Base price in USD
 * @property {boolean} published - false keeps it built but off the live page
 * @property {ProductVariant[]} variants
 */

/** @type {Product[]} */
export const products = [
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
      // TODO: add the tank once you've got its photo + Stripe link
      // {
      //   label: "Tank",
      //   image: "/shop/hit-maxes-evade-taxes-tank.png",
      //   alt: "Hit Maxes, Evade Taxes Tank",
      //   stripeUrl: "https://buy.stripe.com/REPLACE_ME",
      // },
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
    description: "TODO: write the description line.",
    price: 29.99,
    published: false, // flip true once photos + Stripe links are filled in below
    variants: [
      {
        label: "Racerback",
        image: "/shop/TODO-ggg-sups-racerback.png",
        alt: "Good Girls Get Sups Racerback",
        stripeUrl: "https://buy.stripe.com/REPLACE_ME",
      },
      {
        label: "Muscle Tee",
        image: "/shop/TODO-ggg-sups-muscle.png",
        alt: "Good Girls Get Sups Muscle Tee",
        stripeUrl: "https://buy.stripe.com/REPLACE_ME",
      },
    ],
  },
  {
    id: "warren-buffett-tank",
    line: "line-01",
    name: "Warren Buffett Tank",
    description: "TODO: write the description line.",
    price: 29.99,
    published: false, // keep off the live page until clearance is confirmed
    variants: [
      {
        label: "Tank",
        image: "/shop/TODO-buffett-tank.png",
        alt: "Warren Buffett Tank",
        stripeUrl: "https://buy.stripe.com/REPLACE_ME",
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
      // TODO: add the white version once you've got its Stripe link + photo
      // {
      //   label: "White",
      //   image: "/shop/NFPA_WHITE.png",
      //   alt: "Maximum Exposure Tee, white",
      //   stripeUrl: "https://buy.stripe.com/REPLACE_ME",
      // },
    ],
  },

  // ---------- ESSENTIALS ----------
  {
    id: "trucker-cap",
    line: "essentials",
    name: "Risk On Trucker Cap",
    description: "TODO: write the description line.",
    price: 24.99,
    published: false,
    variants: [
      {
        label: "One size",
        image: "/shop/TODO-trucker-cap.png",
        alt: "Risk On Trucker Cap",
        stripeUrl: "https://buy.stripe.com/REPLACE_ME",
      },
    ],
  },
  {
    id: "logo-hat",
    line: "essentials",
    name: "Risk On Logo Hat",
    description: "TODO: write the description line.",
    price: 24.99,
    published: false,
    variants: [
      {
        label: "One size",
        image: "/shop/TODO-logo-hat.png",
        alt: "Risk On Logo Hat",
        stripeUrl: "https://buy.stripe.com/REPLACE_ME",
      },
    ],
  },
  {
    id: "polo",
    line: "essentials",
    name: "Risk On Pique Polo",
    description: "TODO: write the description line.",
    price: 39.99,
    published: false,
    variants: [
      {
        label: "Polo",
        image: "/shop/TODO-polo.png",
        alt: "Risk On Pique Polo",
        stripeUrl: "https://buy.stripe.com/REPLACE_ME",
      },
    ],
  },
];

export const lineMeta = {
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
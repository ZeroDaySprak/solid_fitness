// single source of truth for every business fact on the site.
// values below come from the live site solidfitnesspurasawalkam.com. TODO = still needed from the owner.
// NOTE: the old site lists 3 different phone numbers. confirm which is correct before launch.

export const siteConfig = {
  name: "solid fitness",
  tagline: "TODO: one-line tagline (lowercase)",
  type: "gym",
  url: "TODO: https://your-domain.in",

  location: {
    area: "purasawalkam",
    city: "chennai",
    state: "tamil nadu",
    country: "IN",
    address: "no: 128, norton sb tower, brick kiln rd, purasaiwakkam, chennai, tamil nadu 600007",
    pincode: "600007",
    mapsUrl: "TODO: google maps share link",
    lat: 13.088783636943438,
    lng: 80.25061482563908,
  },

  contact: {
    phone: "+918048032552", // from old site. CONFIRM
    whatsapp: "919840562133", // from old site chat widget. CONFIRM
    email: "solidfitnesspurasawalkam@gmail.com",
    instagram: "TODO",
    facebook: "https://www.facebook.com/SolidFitness-Purasaiwalkam-114842084563803",
  },

  hours: [
    { days: "mon–sat", open: "TODO", close: "TODO" },
    { days: "sun", open: "TODO", close: "TODO" },
  ],

  about: "we at solid fitness are dedicated to helping our members achieve their fitness goals.",

  services: [
    { id: "muscle-gain", name: "muscle gain programs" },
    { id: "weight-loss", name: "weight loss programs" },
    { id: "cross-fit", name: "cross fit" },
    { id: "strength", name: "strength training" },
    { id: "cardio", name: "cardio vascular training" },
  ],

  hero: {
    // "sequence" = photoreal image sequence in /public/assets/sequence
    // "procedural" = three.js built gym (fallback)
    mode: "sequence" as "sequence" | "procedural",
    frameCount: 180,
    frameFormat: "webp",
    scrollLengthVh: 700,
  },

  theme: {
    accent: "#c22d2d", // solid fitness red from the existing site. reference video used champagne #e8c98a
  },

  // old site has a "subscription plans" page but no prices were readable. get them from the owner.
  plans: [
    { id: "core", name: "core", price: "TODO", period: "month", perks: ["TODO"] },
    { id: "pro", name: "pro", price: "TODO", period: "month", perks: ["TODO"] },
    { id: "elite", name: "elite", price: "TODO", period: "month", perks: ["TODO"] },
  ],

  trainers: [] as Array<{ name: string; role: string; speciality: string; years: number | null; photo: string }>,

  supplements: [] as Array<{ name: string; brand: string; price: string; image: string; tag?: string }>,

  zones: ["muscle gain", "weight loss", "cross fit", "strength", "cardio"],
} as const;

export type SiteConfig = typeof siteConfig;

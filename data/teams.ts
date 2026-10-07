// Team content is intentionally separated from the UI. That makes future roster updates way less painful and keeps the codebase cleaner.

export type Team = {
  slug: string;
  name: string;
  gender: "Girls" | "Boys";
  ageGroup: string;
  level?: string;
  coach?: string;
  description?: string;
  image: string;
  registrationUrl?: string;
};

export const teams: Team[] = [
  {
    slug: "16u-girls-national",
    name: "16U National",
    gender: "Girls",
    ageGroup: "16U",
    level: "National",
    coach: "TODO: Confirm coach name",
    description: "A competitive girls team built around discipline, teammate trust, and strong skill development.",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    registrationUrl: "https://www.upperhand.com/",
  },
  {
    slug: "17u-girls-premier",
    name: "17U Premier",
    gender: "Girls",
    ageGroup: "17U",
    level: "Premier",
    coach: "TODO: Confirm coach name",
    description: "A high-level development group focused on competitive growth and long-term leadership.",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80",
    registrationUrl: "https://www.upperhand.com/",
  },
  {
    slug: "15u-boys-elite",
    name: "15U Elite",
    gender: "Boys",
    ageGroup: "15U",
    level: "Elite",
    coach: "TODO: Confirm coach name",
    description: "A competitive boys team emphasizing trust, communication, and development on both sides of the net.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    registrationUrl: "https://www.upperhand.com/",
  },
  {
    slug: "18u-boys-competitive",
    name: "18U Competitive",
    gender: "Boys",
    ageGroup: "18U",
    level: "Competitive",
    coach: "TODO: Confirm coach name",
    description: "A program centered on toughness, team habits, and competitive readiness across the full season.",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80",
    registrationUrl: "https://www.upperhand.com/",
  },
];

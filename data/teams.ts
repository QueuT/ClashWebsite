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
    image: "/coclash/home-team-photo-01.jpg",
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
    image: "/coclash/home-team-photo-03.jpg",
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
    image: "/coclash/d5ac41_4ed6edb8b5f04b859a45d40dbdb2c1a3_mv2.jpg",
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
    image: "/coclash/d5ac41_2609fe3c2f2e4dc790c2efc0e8baba00_mv2.jpg",
    registrationUrl: "https://www.upperhand.com/",
  },
];

// Program data lives here so future staff can update the club offerings without digging into UI components and breaking layouts.

export type Program = {
  slug: string;
  name: string;
  shortDescription: string;
  ageGroup: string;
  href: string;
  image: string;
};

export const programs: Program[] = [
  {
    slug: "girls-volleyball",
    name: "Girls Volleyball",
    shortDescription:
      "Competitive girls volleyball designed around athlete development, teamwork, and a culture that values effort and accountability.",
    ageGroup: "Ages 12U–18U",
    href: "/programs#girls-volleyball",
    image: "/coclash/home-team-photo-01.jpg",
  },
  {
    slug: "boys-volleyball",
    name: "Boys Volleyball",
    shortDescription:
      "Competitive boys volleyball with a strong focus on development, team chemistry, and smart play in a demanding training environment.",
    ageGroup: "Ages 12U–18U",
    href: "/programs#boys-volleyball",
    image: "/coclash/d5ac41_2609fe3c2f2e4dc790c2efc0e8baba00_mv2.jpg",
  },
  {
    slug: "clashup-academy",
    name: "CLASHUP Academy",
    shortDescription:
      "Training opportunities and skill-building sessions designed to develop both technical fundamentals and competitive confidence.",
    ageGroup: "Youth development",
    href: "/programs#clashup-academy",
    image: "/coclash/home-team-photo-03.jpg",
  },
  {
    slug: "camps-clinics",
    name: "Camps & Clinics",
    shortDescription:
      "Focused sessions for skill development, team concepts, and high-repetition training across the season.",
    ageGroup: "Seasonal programming",
    href: "/programs#camps-clinics",
    image: "/coclash/d5ac41_66abba3bd5764d9c85fd0218d75f8e6a_mv2.jpg",
  },
  {
    slug: "open-gym",
    name: "Open Gym",
    shortDescription:
      "Open training opportunities for athletes who want to compete, improve, and connect with the club before the next season.",
    ageGroup: "Open participation",
    href: "/programs#open-gym",
    image: "/coclash/d5ac41_4ed6edb8b5f04b859a45d40dbdb2c1a3_mv2.jpg",
  },
];

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
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "boys-volleyball",
    name: "Boys Volleyball",
    shortDescription:
      "Competitive boys volleyball with a strong focus on development, team chemistry, and smart play in a demanding training environment.",
    ageGroup: "Ages 12U–18U",
    href: "/programs#boys-volleyball",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "clashup-academy",
    name: "CLASHUP Academy",
    shortDescription:
      "Training opportunities and skill-building sessions designed to develop both technical fundamentals and competitive confidence.",
    ageGroup: "Youth development",
    href: "/programs#clashup-academy",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "camps-clinics",
    name: "Camps & Clinics",
    shortDescription:
      "Focused sessions for skill development, team concepts, and high-repetition training across the season.",
    ageGroup: "Seasonal programming",
    href: "/programs#camps-clinics",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "open-gym",
    name: "Open Gym",
    shortDescription:
      "Open training opportunities for athletes who want to compete, improve, and connect with the club before the next season.",
    ageGroup: "Open participation",
    href: "/programs#open-gym",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",
  },
];

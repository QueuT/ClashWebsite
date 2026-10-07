// Coaching bios are centralized here so the staff page stays clean and future coach updates are low-risk.

export type Coach = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export const coaches: Coach[] = [
  {
    name: "Robert Saavedra",
    role: "Founder / Director — Girls Program",
    bio: "Founded Colorado Clash in June 2023 after eight seasons coaching girls and boys volleyball at the varsity and club levels. An all-city player from Wilson High School in Los Angeles, Robert has lived in northeast Denver for over 16 years and leads the club's development-first, community-focused mission. Head coach of the Longhorns 18U Girls and co-coach of the Mustangs 15U Girls for the 2026–27 season.",
    image: "/coclash/home-team-photo-02.jpg",
    imageAlt: "Colorado Clash girls team and coaches celebrate together.",
  },
  {
    name: "Andrea",
    role: "Head Coach — Mustangs 15U Girls",
    bio: "Leads the Mustangs 15U Girls for the 2026–27 season alongside Robert Saavedra, developing skilled, confident athletes ready to compete at a high level.",
    image: "/images/teams/mustangs-15u.png",
    imageAlt: "Colorado Clash Mustangs 15U team logo.",
  },
  {
    name: "Leah Torres",
    role: "Head Coach — Elk 16U Girls",
    bio: "Leads the Elk 16U Girls for the 2026–27 season, building athletes who compete with confidence, discipline, and character.",
    image: "/images/teams/elk-16u.png",
    imageAlt: "Colorado Clash Elk 16U team logo.",
  },
  {
    name: "Quincy Breaux",
    role: "Head Coach — Bison 18-2 Boys",
    bio: "Leads the Bison 18-2 Boys for the 2026–27 season, focused on skill development, high-level competition, and representing the club with pride.",
    image: "/images/teams/bison-18-2.png",
    imageAlt: "Colorado Clash Bison 18-2 team logo.",
  },
  {
    name: "Maresa Mosca",
    role: "Head Coach — Toros 18-1 Boys",
    bio: "Leads the Toros 18-1 Boys — the club's premier boys team — for the 2026–27 season, competing against top competition in Colorado and beyond.",
    image: "/images/teams/toros-18-1.png",
    imageAlt: "Colorado Clash Toros 18-1 team logo.",
  },
];

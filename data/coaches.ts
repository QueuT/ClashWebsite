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
    name: "TODO: Coach Name",
    role: "Director / Girls Program",
    bio: "A developmental leader focused on building confident athletes through discipline, trust, and competitive preparation.",
    image: "/coclash/home-team-photo-02.jpg",
    imageAlt: "Colorado Clash girls team and coaches celebrate together.",
  },
  {
    name: "TODO: Coach Name",
    role: "Boys Program Coach",
    bio: "Coach and mentor focused on team development, communication, and building a competitive culture that values accountability.",
    image: "/coclash/d5ac41_2609fe3c2f2e4dc790c2efc0e8baba00_mv2.jpg",
    imageAlt: "Colorado Clash boys team huddle with a coach before play.",
  },
  {
    name: "TODO: Coach Name",
    role: "Training / Skills Coach",
    bio: "A technical coach emphasizing fundamentals, movement patterns, and long-term athlete growth inside the club environment.",
    image: "/coclash/d5ac41_f8d1cefa6df94f6487914b983f54c141_mv2.png",
    imageAlt: "Colorado Clash coach encourages an athlete during a club event.",
  },
];

// Coaching bios are centralized here so the staff page stays clean and future coach updates are low-risk.

export type Coach = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const coaches: Coach[] = [
  {
    name: "TODO: Coach Name",
    role: "Director / Girls Program",
    bio: "A developmental leader focused on building confident athletes through discipline, trust, and competitive preparation.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "TODO: Coach Name",
    role: "Boys Program Coach",
    bio: "Coach and mentor focused on team development, communication, and building a competitive culture that values accountability.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "TODO: Coach Name",
    role: "Training / Skills Coach",
    bio: "A technical coach emphasizing fundamentals, movement patterns, and long-term athlete growth inside the club environment.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
];

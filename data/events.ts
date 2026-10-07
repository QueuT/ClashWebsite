// Event items are easy to tweak here without rewriting any of the event cards. Good for keeping seasonal info current.

import { registrationUrl, tryoutsEventUrl } from "./site";

export type EventItem = {
  date: string;
  title: string;
  location: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export const events: EventItem[] = [
  {
    date: "Oct 24",
    title: "2026–27 Girls Tryouts",
    location: "Denver, Colorado",
    description: "Tryouts for the upcoming girls season. Team placement and player evaluation details are shared at check-in.",
    ctaLabel: "Register",
    href: tryoutsEventUrl,
  },
  {
    date: "Nov 1",
    title: "Open Gym",
    location: "Colorado",
    description: "A low-pressure opportunity for athletes to meet coaches, compete, and learn more about the club culture.",
    ctaLabel: "Learn More",
    href: "/open-gym",
  },
  {
    date: "Nov 15",
    title: "CLASHUP Skills Session",
    location: "TODO: Confirm location",
    description: "Skill-focused training designed to develop fundamentals, movement quality, and volleyball confidence.",
    ctaLabel: "Register",
    href: registrationUrl,
  },
];

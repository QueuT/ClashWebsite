// This is the site config layer. The idea is simple: change it here once, and most of the site updates in one place instead of scattering links all over the app.

export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Colorado Clash VBC",
  tagline: "Volleyball Club",
  location: "Colorado",
  email: "clashcovbc@gmail.com",
  sponsor: {
    name: "Slunks",
    note: "Colorado Clash is a Slunks-sponsored club. Athletes wear official Slunks apparel at national events, major tournaments, and team travel whenever they are with the team and not actively competing.",
  },
  social: {
    instagram: "@coclashvbc",
    instagramUrl: "https://www.instagram.com/coclashvbc/",
  },
};

export const navItems: NavItem[] = [
  { label: "Programs", href: "/programs" },
  { label: "Teams", href: "/teams" },
  { label: "Tryouts", href: "/tryouts" },
  { label: "About", href: "/about" },
  { label: "Coaches", href: "/coaches" },
  { label: "Resources", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const registrationUrl =
  "https://app.upperhand.io/customers/2838-colorado-clash-vbc/offerings";

export const tryoutsEventUrl =
  "https://app.upperhand.io/customers/2838-colorado-clash-vbc/events/199459-girls-volleyball-tryouts";

export const merchUrl = "https://www.coclashvbc.com/category/all-products";

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
  phone: "TODO: Add official phone number",
  social: {
    instagram: "@coclashvbc",
    facebook: "TODO: Add official Facebook",
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

export const registrationUrl = "https://www.upperhand.com/";
export const merchUrl = "https://www.example.com/";

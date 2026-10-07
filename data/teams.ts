// Team content is intentionally separated from the UI. That makes future roster updates way less painful and keeps the codebase cleaner.

import { registrationUrl } from "./site";

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
  fee?: string;
  schedule?: string[];
  travelNote?: string;
};

// 2026–27 season lineup. Fees, schedules, and policies match the official team packets on Upper Hand.
export const teams: Team[] = [
  {
    slug: "mustangs-15u-girls",
    name: "Mustangs 15U",
    gender: "Girls",
    ageGroup: "15U",
    level: "National — Travel",
    coach: "Andrea and Robert Saavedra",
    description:
      "One of Colorado Clash's premier travel teams for the 2026–27 club season. The Mustangs are built for athletes who are ready to compete, grow, and challenge themselves against top competition in Colorado and across the country — with a focus on individual development, team chemistry, and preparing athletes for the next stage of their volleyball journey.",
    image: "/images/teams/mustangs-15u.png",
    registrationUrl,
    fee: "$3,100",
    schedule: [
      "5 Rocky Mountain Region (RMR) Power Tournaments",
      "Colorado Crossroads — February 5–7, 2027",
      "Boston Volleyball Festival Qualifier — one of February 19–21 or February 26–28, 2027 (per tournament assignment)",
    ],
    travelNote:
      "Coach travel expenses for the Boston Qualifier — airfare, lodging, and ground transportation — are included. Additional tournaments beyond the listed schedule require extra fees.",
  },
  {
    slug: "elk-16u-girls",
    name: "Elk 16U",
    gender: "Girls",
    ageGroup: "16U",
    level: "National — Travel",
    coach: "Leah Torres",
    description:
      "Designed for athletes committed to developing their skills, competing at a high level, and preparing for the next stage of their volleyball careers. Through quality training, competitive tournaments, and a positive team culture, the Elk build athletes who compete with confidence, discipline, and character.",
    image: "/images/teams/elk-16u.png",
    registrationUrl,
    fee: "$3,300",
    schedule: [
      "5 Rocky Mountain Region (RMR) Power Tournaments",
      "Colorado Crossroads — February 5–7, 2027",
      "Boston Volleyball Festival Qualifier — one of February 19–21 or February 26–28, 2027 (per tournament assignment)",
    ],
    travelNote:
      "Coach travel expenses for the Boston Qualifier — airfare, lodging, and ground transportation — are included. Additional tournaments beyond the listed schedule require extra fees.",
  },
  {
    slug: "bison-18-2-boys",
    name: "Bison 18-2",
    gender: "Boys",
    ageGroup: "18U",
    level: "Regional + Crossroads",
    coach: "Quincy Breaux",
    description:
      "Built for athletes committed to improving their skills, competing at a high level, and representing the club with pride — a season focused on growth, competition, and memorable experiences.",
    image: "/images/teams/bison-18-2.png",
    registrationUrl,
    fee: "$3,000",
    schedule: [
      "5 Rocky Mountain Region (RMR) Power Tournaments",
      "Colorado Crossroads Tournament in Denver",
    ],
    travelNote:
      "A potential trip to the Boston Volleyball Festival depends on team family interest and commitment — travel and tournament costs for Boston would be an additional expense, not included in club dues.",
  },
  {
    slug: "toros-18-1-boys",
    name: "Toros 18-1",
    gender: "Boys",
    ageGroup: "18U",
    level: "National — Travel",
    coach: "Maresa Mosca",
    description:
      "The club's premier boys team — competing at a high level against some of the best competition in Colorado and beyond while continuing to develop as athletes, teammates, and young men.",
    image: "/images/teams/toros-18-1.png",
    registrationUrl,
    fee: "$3,500",
    schedule: [
      "5 Rocky Mountain Region (RMR) Power Tournaments",
      "Colorado Crossroads Tournament in Denver",
      "One out-of-state tournament in Arizona",
    ],
    travelNote:
      "Travel expenses for the Arizona tournament — transportation, hotel, meals, and related costs — are not included in club dues and are each family's responsibility.",
  },
  {
    slug: "longhorns-18u-girls",
    name: "Longhorns 18",
    gender: "Girls",
    ageGroup: "18U",
    level: "National — Travel",
    coach: "Robert Saavedra",
    description:
      "One of the founding teams of Colorado Clash Volleyball Club, with 7 of 10 athletes returning from last season. The 2026–27 season is the program's most competitive yet — built to challenge the team in higher divisions against some of the strongest teams in the region and the nation.",
    image: "/images/teams/longhorns-18u.png",
    registrationUrl,
    fee: "$3,500",
    schedule: [
      "5 Rocky Mountain Region (RMR) Power Tournaments",
      "Nike Cowgirl Classic, Oklahoma City — January 23–24, 2027",
      "Colorado Crossroads — February 5–7, 2027",
      "Boston Volleyball Festival Qualifier — one of February 19–21 or February 26–28, 2027 (per tournament assignment)",
      "Season-ending tournament in Hawaii (dates to be announced)",
    ],
    travelNote:
      "Travel costs are not included. Each family covers player airfare, hotel, ground transportation, and meals for out-of-state tournaments, plus a share of coaching travel expenses — with an estimated breakdown provided months before each trip.",
  },
];

export const paymentPolicy =
  "All club fees must be paid in full by December 31, 2026. Athletes with outstanding balances after this deadline may not be eligible to participate in tournaments until their account is brought current.";

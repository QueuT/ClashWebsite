import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Answers are adapted from the official FAQ at https://www.coclashvbc.com/general-5

const faqs = [
  {
    question: "How are your teams selected at tryouts?",
    answer:
      "Players are selected for teams based on skill, experience, work ethic, positional needs, commitment, athletic ability, and attitude.",
  },
  {
    question: "How many athletes are selected per team?",
    answer: "10–12 players per team.",
  },
  {
    question: "Do you offer boys volleyball?",
    answer:
      "Yes. Colorado Clash fields boys teams, including the Bison 18-2 and Toros 18-1. See the Teams page for the current lineup.",
  },
  {
    question: "How does Clash handle multi-sport athletes?",
    answer:
      "We encourage multi-sport athletes. Practices are flexible, however, tournaments are mandatory. Communication between all parties is crucial.",
  },
  {
    question: "Does everyone get equal play time?",
    answer:
      "All players get equal practice time, but we give no guarantee of playing time. Athletes play as much as possible based on skill level, competition, position, and attitude.",
  },
  {
    question: "What if my athlete decides to quit before the season ends?",
    answer:
      "Once a player or parent has committed to a team, they are financially responsible for the entire club season unless there is a season-ending injury, in which case dues may be prorated.",
  },
  {
    question: "What if we can't attend a scheduled out-of-state tournament?",
    answer:
      "Payment is still required, because otherwise the rest of the team would be charged more to cover the expenses.",
  },
  {
    question: "Can my athlete join after tryouts are over?",
    answer: "Yes, provided there is an open position on a team based on her ability.",
  },
  {
    question: "How do I determine what age division my athlete must play in?",
    answer:
      "Refer to the official Age Divisions chart published by the region.",
    link: {
      label: "Age Divisions chart",
      href: "https://cdn1.sportngin.com/attachments/document/0880-3385604/2025-2026_Age_Definition_Chart_-_Sheet1__1_.pdf",
    },
  },
  {
    question: "Where do the teams practice?",
    answer:
      "The majority of practices are held at sites in the northeast Denver/Aurora area and surrounding communities. Practices may move further away due to school closures or gym availability.",
  },
  {
    question: "Do you have open practices where I can come watch?",
    answer: "Yes. Practices are open at the coach's discretion.",
  },
  {
    question: "How much does club volleyball cost?",
    answer:
      "Season tuition depends on the program — Regional and National teams are priced differently, with an additional estimated travel package for National teams. See the fees page for the full breakdown.",
    link: { label: "Fees page", href: "/fees" },
  },
  {
    question: "What should athletes bring?",
    answer:
      "Water, kneepads, court shoes, and a positive attitude. Volleyballs are provided for open gym sessions.",
  },
];

export default function FaqPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Straight answers about tryouts, teams, costs, and the club experience — adapted from the official club FAQ."
      />

      <div className="mt-12 space-y-5">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-xl font-black tracking-tighter text-foreground">{faq.question}</h2>
            <p className="mt-3 text-base leading-8 text-foreground-soft">
              {faq.answer}
              {faq.link ? (
                <>
                  {" "}
                  <Link href={faq.link.href} className="font-semibold text-primary hover:underline">
                    {faq.link.label}
                  </Link>
                </>
              ) : null}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

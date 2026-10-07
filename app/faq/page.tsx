import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// This FAQ is intentionally easy to update. Most of the real information is still a TODO, and that is better than faking certainty.

const faqs = [
  { question: "What age groups do you offer?", answer: "TODO: Confirm current age-group offerings and season structure." },
  { question: "How do tryouts work?", answer: "TODO: Add official tryout process, dates, and evaluation details." },
  { question: "What should athletes bring?", answer: "Athletes should typically bring water, kneepads, court shoes, and a positive attitude. Confirm details with the official club schedule." },
  { question: "How much does club volleyball cost?", answer: "TODO: Confirm season pricing and payment schedule with the club." },
  { question: "Do you offer boys volleyball?", answer: "TODO: Confirm current boys program offerings and age groups." },
  { question: "How do I contact the club?", answer: "Use the contact page for club questions and general inquiries until official contact details are finalized." },
];

export default function FaqPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="This page keeps answers clear and easy to update when official club information is confirmed."
      />

      <div className="mt-12 space-y-5">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black tracking-tighter text-slate-950">{faq.question}</h2>
            <p className="mt-3 text-base leading-8 text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

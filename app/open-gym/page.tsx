import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { registrationUrl } from "@/data/site";

// Content adapted from the official Open Gym FAQ at https://www.coclashvbc.com/about-3

const details = [
  {
    question: "Who can attend?",
    answer:
      "Open gym is open to current and prospective club players from every club, regardless of where you've played before.",
  },
  {
    question: "Do I need to register in advance?",
    answer:
      "Yes — pre-registration is required. Space is limited and sessions often fill up quickly, so walk-ins are not guaranteed a spot.",
  },
  {
    question: "What's the cost?",
    answer:
      "Each session is $10, payable online during registration. Venmo or cash may be accepted at the door if space allows.",
  },
  {
    question: "Will coaches be there?",
    answer:
      "Yes. Club coaches run the sessions, evaluate talent, and answer questions about tryouts or the upcoming season.",
  },
  {
    question: "Is this an official tryout?",
    answer:
      "No — open gyms are not tryouts, but coaches will be watching. It's a great chance to showcase your skills and get familiar with the program.",
  },
  {
    question: "What ages and levels can participate?",
    answer: "Sessions are organized by age group or grade level, typically 12U–18U.",
  },
  {
    question: "What should I bring?",
    answer:
      "Non-marking volleyball shoes, kneepads, a water bottle, and a competitive attitude. Volleyballs are provided.",
  },
  {
    question: "Can parents watch?",
    answer: "Yes — parents are welcome, though seating may be limited depending on the facility.",
  },
];

export default function OpenGymPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Open gym"
        title="A low-pressure way to get started"
        description="Open gyms are the perfect place for returning and exploring athletes to play, connect, and improve — whether or not you've committed to Clash."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {details.map((item) => (
          <div key={item.question} className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-lg font-black tracking-tighter text-foreground">{item.question}</h2>
            <p className="mt-3 text-sm leading-7 text-foreground-soft">{item.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-4xl border border-border bg-surface p-8 shadow-sm">
        <h2 className="text-2xl font-black tracking-tighter text-foreground">Find the schedule</h2>
        <p className="mt-3 text-base leading-8 text-foreground-soft">
          Session dates, age group breakdowns, and registration links are published on the club&apos;s Upper Hand offerings page.
          Sessions are first come, first served.
        </p>
        <div className="mt-6">
          <Button href={registrationUrl}>View sessions &amp; register</Button>
        </div>
      </div>
    </Container>
  );
}

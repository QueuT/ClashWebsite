import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

// Story and core values adapted from the official About page at https://www.coclashvbc.com/about-4

const coreValues = [
  {
    title: "Trust the Process",
    text: "Growth and development take time. Consistent effort and commitment are the keys to success in volleyball and in life.",
  },
  {
    title: "Build Players for Success",
    text: "We teach volleyball skills and foster personal character development, equipping athletes to succeed beyond the court.",
  },
  {
    title: "Work Hard, Play Hard",
    text: "Hard work and determination drive improvement — and enjoying the sport matters just as much as the effort behind it.",
  },
  {
    title: "Team over Talent",
    text: "Individual skills matter, but working together as a cohesive unit is what defines Colorado Clash.",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="About"
        title="Built around team culture and competitive standards"
        description="Colorado Clash is a youth volleyball organization focused on building confident athletes through strong coaching, disciplined development, and a clear sense of team identity."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-4xl border border-border bg-surface p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Our story</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground">Team Over Talent</h2>
          <p className="mt-4 text-base leading-8 text-foreground-soft">
            Colorado Clash was founded in June 2023 to fill the absence of volleyball teams in northeast Denver. Led by
            founder Robert Saavedra — a DSST Elevate High School teacher with eight seasons of varsity and club coaching
            experience — the club uses volleyball as a tool for character development and community building for
            student-athletes across the area.
          </p>
        </div>

        <div className="rounded-4xl border border-border bg-surface p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Our philosophy</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground">Compete. Develop. Belong.</h2>
          <p className="mt-4 text-base leading-8 text-foreground-soft">
            We focus on tough, disciplined, athlete-first development that creates better teammates, stronger competitors,
            and a healthier club environment — with a commitment to keeping club volleyball accessible and affordable for
            families throughout Colorado.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <SectionHeading
          eyebrow="Core values"
          title="What guides the club"
          description="Four principles shape how Colorado Clash interacts with players, coaches, and the community."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {coreValues.map((value) => (
            <div key={value.title} className="rounded-4xl border border-border bg-surface p-8 shadow-sm">
              <h3 className="text-2xl font-black tracking-tight text-foreground">{value.title}</h3>
              <p className="mt-4 text-base leading-8 text-foreground-soft">{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-4xl border border-border bg-surface p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Sponsor</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground">Proudly sponsored by Slunks</h2>
        <p className="mt-4 text-base leading-8 text-foreground-soft">{siteConfig.sponsor.note}</p>
      </div>
    </Container>
  );
}

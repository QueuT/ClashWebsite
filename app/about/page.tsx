import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// A club brand is more than a logo. This page frames who the club is and what it values without pretending to know facts we do not have yet.

export default function AboutPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="About"
        title="Built around team culture and competitive standards"
        description="Colorado Clash is a youth volleyball organization focused on building confident athletes through strong coaching, disciplined development, and a clear sense of team identity."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clash-primary">Our story</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Team Over Talent</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Volleyball is the vehicle. The team is the destination. At Colorado Clash, athletes learn how to compete with purpose, support one another, and grow through challenge.
          </p>
        </div>

        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clash-primary">Our philosophy</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Compete. Develop. Belong.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We focus on tough, disciplined, athlete-first development that creates better teammates, stronger competitors, and a healthier club environment.
          </p>
        </div>
      </div>
    </Container>
  );
}

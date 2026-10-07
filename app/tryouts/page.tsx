import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registrationUrl, tryoutsEventUrl } from "@/data/site";

// Tryouts are high-priority info, so the page keeps the important details front and center and avoids burying registration.

export default function TryoutsPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Tryouts"
        title="2026–27 season"
        description="Parents and athletes should be able to understand the next step quickly: who, when, where, and how to register."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-4xl border border-border bg-surface p-8 shadow-sm">
          <h2 className="text-2xl font-black tracking-tighter text-foreground">Girls</h2>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-foreground-soft">
            <li><strong className="text-foreground">Who:</strong> Current and incoming club volleyball athletes</li>
            <li>
              <strong className="text-foreground">When / Where / Cost:</strong> Dates, venue, and fees are posted on the
              {" "}<a href={tryoutsEventUrl} target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">official Girls Volleyball Tryouts event</a>{" "}
              on Upper Hand
            </li>
            <li><strong className="text-foreground">What to bring:</strong> Water, kneepads, court shoes, and a positive mindset</li>
            <li><strong className="text-foreground">Selection:</strong> Athletes are evaluated on skill, experience, work ethic, positional needs, commitment, and attitude</li>
          </ul>
        </div>

        <div className="rounded-4xl border border-border bg-surface p-8 shadow-sm">
          <h2 className="text-2xl font-black tracking-tighter text-foreground">Boys</h2>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-foreground-soft">
            <li><strong className="text-foreground">Who:</strong> Current and incoming competitive volleyball athletes</li>
            <li><strong className="text-foreground">When / Where:</strong> Sessions are listed on the Upper Hand offerings page</li>
            <li><strong className="text-foreground">What to expect:</strong> Evaluation, general skills work, and team placement conversation</li>
            <li><strong className="text-foreground">Registration:</strong> Complete the next step through Upper Hand</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href={tryoutsEventUrl}>Register for girls tryouts</Button>
        <Button href={registrationUrl} variant="secondary">View all offerings</Button>
        <Button href="/contact" variant="secondary">Contact the club</Button>
      </div>
    </Container>
  );
}

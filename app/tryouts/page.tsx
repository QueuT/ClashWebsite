import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registrationUrl } from "@/data/site";

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
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black tracking-tighter text-slate-950">Girls</h2>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <li><strong className="text-slate-950">Who:</strong> Current and incoming club volleyball athletes</li>
            <li><strong className="text-slate-950">When:</strong> TODO: Confirm official tryout dates</li>
            <li><strong className="text-slate-950">Where:</strong> TODO: Confirm venue</li>
            <li><strong className="text-slate-950">What to bring:</strong> Water, kneepads, court shoes, and a positive mindset</li>
            <li><strong className="text-slate-950">Cost:</strong> TODO: Confirm tryout fee</li>
          </ul>
        </div>

        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black tracking-tighter text-slate-950">Boys</h2>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <li><strong className="text-slate-950">Who:</strong> Current and incoming competitive volleyball athletes</li>
            <li><strong className="text-slate-950">When:</strong> TODO: Confirm official tryout dates</li>
            <li><strong className="text-slate-950">Where:</strong> TODO: Confirm venue</li>
            <li><strong className="text-slate-950">What to expect:</strong> Evaluation, general skills work, and team placement conversation</li>
            <li><strong className="text-slate-950">Registration:</strong> Complete the next step through Upper Hand</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href={registrationUrl}>Register for tryouts</Button>
        <Button href="/contact" variant="secondary">Contact the club</Button>
      </div>
    </Container>
  );
}

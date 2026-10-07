import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { registrationUrl } from "@/data/site";

// Fees are one of those pages that deserves a clean layout and clear placeholders. Parents need details fast, not a wall of text.

export default function FeesPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Fees"
        title="Season costs and club information"
        description="Club fees vary by program and team. Use this page as a quick reference while the club updates its official pricing details."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clash-primary">Season cost</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">TODO: Confirm club pricing</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Use official club fee information as the final source before registration. This page is structured to make future updates simple.
          </p>
        </div>

        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clash-primary">What&apos;s included</p>
          <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
            <li>• Team training and coaching</li>
            <li>• Practice structure and athlete support</li>
            <li>• Competition planning and team communication</li>
            <li>• Registration through Upper Hand</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href={registrationUrl}>Register now</Button>
        <Button href="/faq" variant="secondary">Read FAQ</Button>
      </div>
    </Container>
  );
}

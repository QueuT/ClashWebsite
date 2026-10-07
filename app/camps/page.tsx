import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { registrationUrl } from "@/data/site";

// This is the placeholder page for camp info. It keeps the structure ready for the real schedule without pretending we know it already.

export default function CampsPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Camps"
        title="Seasonal training and development sessions"
        description="Training opportunities help athletes sharpen fundamentals, sharpen decision-making, and build confidence in a focused environment."
      />
      <div className="mt-12 rounded-4xl border border-border bg-surface p-8 shadow-sm">
        <p className="text-base leading-8 text-foreground-soft">
          Camps and clinics run seasonally with a focus on high-repetition skill development and team concepts. Current
          sessions, age groups, and registration are published on the club&apos;s Upper Hand offerings page.
        </p>
        <div className="mt-6">
          <Button href={registrationUrl}>View camps &amp; clinics</Button>
        </div>
      </div>
    </Container>
  );
}

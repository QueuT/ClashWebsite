import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { registrationUrl } from "@/data/site";

// CLASHUP deserves its own page, but the structure stays light enough that updates are easy when the official program details roll in.

export default function ClashupPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="CLASHUP"
        title="Academy training with a competitive edge"
        description="CLASHUP is designed to help athletes build skill, confidence, and a stronger understanding of the game through intentional training."
      />
      <div className="mt-12 rounded-4xl border border-border bg-surface p-8 shadow-sm">
        <p className="text-base leading-8 text-foreground-soft">
          Skill-focused sessions and academy programming developed around fundamentals, movement quality, and volleyball
          confidence. Session schedules, age groups, and registration are published on the club&apos;s Upper Hand offerings page.
        </p>
        <div className="mt-6">
          <Button href={registrationUrl}>View CLASHUP sessions</Button>
        </div>
      </div>
    </Container>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// CLASHUP deserves its own page, but the structure stays light enough that updates are easy when the official program details roll in.

export default function ClashupPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="CLASHUP"
        title="Academy training with a competitive edge"
        description="CLASHUP is designed to help athletes build skill, confidence, and a stronger understanding of the game through intentional training."
      />
      <div className="mt-12 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-base leading-8 text-slate-600">
          TODO: Add official CLASHUP details, session schedule, and registration links.
        </p>
      </div>
    </Container>
  );
}

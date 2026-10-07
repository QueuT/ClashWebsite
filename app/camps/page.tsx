import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// This is the placeholder page for camp info. It keeps the structure ready for the real schedule without pretending we know it already.

export default function CampsPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Camps"
        title="Seasonal training and development sessions"
        description="Training opportunities help athletes sharpen fundamentals, sharpen decision-making, and build confidence in a focused environment."
      />
      <div className="mt-12 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-base leading-8 text-slate-600">
          TODO: Add official camp schedule, age groups, and registration information.
        </p>
      </div>
    </Container>
  );
}

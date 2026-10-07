import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Open gym is a simple entry point for families who want to feel out the culture before committing to a full season.

export default function OpenGymPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Open gym"
        title="A low-pressure way to get started"
        description="Open gym sessions are a great opportunity to meet coaches, evaluate the club environment, and get more comfortable with the team experience."
      />
      <div className="mt-12 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-base leading-8 text-slate-600">
          TODO: Add official dates, time, and location for upcoming open gym sessions.
        </p>
      </div>
    </Container>
  );
}

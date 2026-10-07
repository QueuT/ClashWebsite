import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

// Contact should feel easy and low-friction. This keeps the essentials visible without exposing anything unnecessary.

export default function ContactPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Questions about the club?"
        description="Use the official club contact details when they are confirmed. Until then, this page remains intentionally simple and easy to maintain."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <ul className="space-y-5 text-base text-slate-600">
            <li><strong className="text-slate-950">Email:</strong> {siteConfig.email}</li>
            <li><strong className="text-slate-950">Phone:</strong> {siteConfig.phone}</li>
            <li><strong className="text-slate-950">Instagram:</strong> {siteConfig.social.instagram}</li>
            <li><strong className="text-slate-950">Facebook:</strong> {siteConfig.social.facebook}</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black tracking-tighter text-slate-950">General inquiry</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Send an email or message via the official social platform to ask about tryouts, teams, upcoming sessions, or club operations.
          </p>
          <div className="mt-6">
            <Button href="mailto:info@example.com">Email the club</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

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
        description="Reach out about tryouts, teams, upcoming sessions, or club operations — the club responds by email and Instagram."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-4xl border border-border bg-surface p-8 shadow-sm">
          <ul className="space-y-5 text-base text-foreground-soft">
            <li><strong className="text-foreground">Email:</strong> {siteConfig.email}</li>
            <li>
              <strong className="text-foreground">Instagram:</strong>{" "}
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                {siteConfig.social.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-sm">
          <h2 className="text-2xl font-black tracking-tighter text-foreground">General inquiry</h2>
          <p className="mt-4 text-base leading-8 text-foreground-soft">
            Send an email or Instagram message to ask about tryouts, teams, upcoming sessions, or club operations.
          </p>
          <div className="mt-6">
            <Button href={`mailto:${siteConfig.email}`}>Email the club</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

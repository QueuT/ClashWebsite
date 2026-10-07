import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { registrationUrl, siteConfig } from "@/data/site";
import { paymentPolicy, teams } from "@/data/teams";

// Pricing matches the official 2026–27 team packets on Upper Hand.

export default function FeesPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="2026–2027 Club Membership Dues"
        title="Season costs and club information"
        description="Every team is priced for its own schedule — with clear tuition, inclusions, and payment details for families."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {teams.map((team) => (
          <div key={team.slug} className="rounded-4xl border border-border bg-surface p-8 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{team.ageGroup} • {team.gender}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Season tuition</p>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground">{team.name}</h2>
            {team.fee ? (
              <p className="mt-2 text-4xl font-black tracking-[-0.04em] text-primary">{team.fee}</p>
            ) : null}
            {team.schedule ? (
              <>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-foreground">Schedule highlights</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground-soft">
                  {team.schedule.map((event) => (
                    <li key={event}>• {event}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {team.travelNote ? (
              <p className="mt-4 rounded-2xl bg-surface-alt p-4 text-sm leading-6 text-foreground-soft">{team.travelNote}</p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-4xl border border-border bg-surface p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">What club dues cover</p>
          <ul className="mt-4 space-y-3 text-base leading-7 text-foreground-soft">
            <li>• Three hours of team training each week with professional coaching</li>
            <li>• Tournament registrations listed in each team&apos;s schedule</li>
            <li>• Practice facility rental, team equipment, and training resources</li>
            <li>• Team registration, administrative, and operational expenses</li>
            <li>• Team uniform package — including Slunks apparel</li>
          </ul>
        </div>

        <div className="rounded-4xl border border-border bg-surface p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Not included</p>
          <ul className="mt-4 space-y-3 text-base leading-7 text-foreground-soft">
            <li>• Player and shared coach travel for out-of-state tournaments (unless stated in the team packet)</li>
            <li>• Additional tournaments added at the coach&apos;s discretion</li>
            <li>• RMR/USA Volleyball registration via Sports Engine — required before an athlete can be rostered</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-4xl border border-border bg-surface p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Payment policy</p>
        <p className="mt-4 text-base leading-8 text-foreground-soft">
          {paymentPolicy} Cash, check, or credit card. Make checks payable to{" "}
          <strong className="text-foreground">Colorado Clash Volleyball Club</strong> — email{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary hover:underline">{siteConfig.email}</a>{" "}
          for the mailing address, or hand checks and cash to your head coach in person. Due to increased processing fees, Venmo payments are no
          longer accepted.
        </p>
      </div>

      <div className="mt-10 rounded-4xl border border-border bg-surface p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Slunks sponsorship</p>
        <p className="mt-4 text-base leading-8 text-foreground-soft">{siteConfig.sponsor.note}</p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href={registrationUrl}>Register now</Button>
        <Button href={registrationUrl} variant="secondary">Memberships &amp; passes</Button>
        <Button href="/faq" variant="secondary">Read FAQ</Button>
      </div>
    </Container>
  );
}

import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

// Dynamic team profiles let the club add a team without creating a one-off page every time. That keeps the content model sane.
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { paymentPolicy, teams } from "@/data/teams";

export function generateStaticParams() {
  return teams.map((item) => ({ team: item.slug }));
}

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ team: string }>;
}) {
  const { team } = await params;
  const selectedTeam = teams.find((item) => item.slug === team);

  if (!selectedTeam) {
    notFound();
  }

  return (
    <Container className="py-20">
      <article className="overflow-hidden rounded-4xl border border-border bg-surface shadow-sm">
        <div className="relative h-[380px] w-full">
          <Image src={selectedTeam.image} alt={selectedTeam.name} fill className="object-cover" />
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-[1.5fr_0.9fr] lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              {selectedTeam.ageGroup} • {selectedTeam.gender}
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-[-0.08em] text-foreground">{selectedTeam.name}</h1>
            <p className="mt-3 text-lg text-foreground-soft">{selectedTeam.level}</p>
            <p className="mt-6 text-base leading-8 text-foreground-soft">
              {selectedTeam.description ?? "Team information is being updated. Please check back soon for the official club details."}
            </p>

            {selectedTeam.fee ? (
              <p className="mt-6 text-2xl font-black tracking-tight text-foreground">
                2026–27 club fee: <span className="text-primary">{selectedTeam.fee}</span>
              </p>
            ) : null}

            {selectedTeam.schedule ? (
              <div className="mt-6">
                <h2 className="text-lg font-black tracking-tight text-foreground">Competition schedule</h2>
                <ul className="mt-3 space-y-2 text-base leading-7 text-foreground-soft">
                  {selectedTeam.schedule.map((event) => (
                    <li key={event}>• {event}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {selectedTeam.travelNote ? (
              <p className="mt-6 rounded-2xl bg-surface-alt p-4 text-sm leading-7 text-foreground-soft">
                {selectedTeam.travelNote}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={selectedTeam.registrationUrl ?? "/tryouts"}>Register with Upper Hand</Button>
              <Button href="/contact" variant="secondary">Contact the club</Button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-surface-alt p-6">
            <h2 className="text-xl font-black tracking-tighter text-foreground">Team details</h2>
            <ul className="mt-6 space-y-4 text-base text-foreground-soft">
              {selectedTeam.coach ? (
                <li><strong className="text-foreground">Coach:</strong> {selectedTeam.coach}</li>
              ) : null}
              <li><strong className="text-foreground">Gender:</strong> {selectedTeam.gender}</li>
              <li><strong className="text-foreground">Age group:</strong> {selectedTeam.ageGroup}</li>
              {selectedTeam.level ? (
                <li><strong className="text-foreground">Level:</strong> {selectedTeam.level}</li>
              ) : null}
              <li><strong className="text-foreground">Season:</strong> 2026–27 club season</li>
              <li><strong className="text-foreground">Practice:</strong> Sites across the northeast Denver/Aurora area</li>
              {selectedTeam.fee ? (
                <li><strong className="text-foreground">Club fee:</strong> {selectedTeam.fee}</li>
              ) : null}
            </ul>
            <p className="mt-6 text-sm leading-7 text-foreground-soft">{paymentPolicy}</p>
            <p className="mt-4 text-sm leading-7 text-foreground-soft">
              <strong className="text-foreground">Slunks-sponsored:</strong> {siteConfig.sponsor.note}
            </p>
          </div>
        </div>
      </article>
    </Container>
  );
}

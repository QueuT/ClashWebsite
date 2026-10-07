import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

// Dynamic team profiles let the club add a team without creating a one-off page every time. That keeps the content model sane.
import { Container } from "@/components/ui/Container";
import { teams } from "@/data/teams";

export default function TeamDetailPage({
  params,
}: {
  params: { team: string };
}) {
  const { team } = params;
  const selectedTeam = teams.find((item) => item.slug === team);

  if (!selectedTeam) {
    notFound();
  }

  return (
    <Container className="py-20">
      <article className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="relative h-[380px] w-full">
          <Image src={selectedTeam.image} alt={selectedTeam.name} fill className="object-cover" />
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-[1.5fr_0.9fr] lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clash-primary">
              {selectedTeam.ageGroup} • {selectedTeam.gender}
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-[-0.08em] text-slate-950">{selectedTeam.name}</h1>
            <p className="mt-3 text-lg text-slate-600">{selectedTeam.level}</p>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {selectedTeam.description ?? "Team information is being updated. Please check back soon for the official club details."}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={selectedTeam.registrationUrl ?? "/tryouts"}>Register with Upper Hand</Button>
              <Button href="/contact" variant="secondary">Contact the club</Button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-black tracking-tighter text-slate-950">Team details</h2>
            <ul className="mt-6 space-y-4 text-base text-slate-600">
              <li><strong className="text-slate-950">Coach:</strong> {selectedTeam.coach}</li>
              <li><strong className="text-slate-950">Gender:</strong> {selectedTeam.gender}</li>
              <li><strong className="text-slate-950">Age group:</strong> {selectedTeam.ageGroup}</li>
              <li><strong className="text-slate-950">Level:</strong> {selectedTeam.level ?? "TODO: Confirm competitive level"}</li>
              <li><strong className="text-slate-950">Season:</strong> TODO: Confirm official season details</li>
              <li><strong className="text-slate-950">Practice:</strong> TODO: Confirm practice location</li>
            </ul>
          </div>
        </div>
      </article>
    </Container>
  );
}

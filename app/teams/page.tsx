import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

// Team cards stay simple and scannable so families can quickly spot age group, gender, and level.
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teams } from "@/data/teams";

export default function TeamsPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Teams"
        title="Competitive teams built for growth"
        description="Every Colorado Clash team is designed to create a stronger athlete, a stronger teammate, and a stronger culture."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {teams.map((team) => (
          <article key={team.slug} className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-72 w-full">
              <Image src={team.image} alt={team.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clash-primary">{team.ageGroup}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{team.gender}</p>
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">{team.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{team.level}</p>
              <p className="mt-4 text-sm text-slate-600">Coach: {team.coach}</p>
              <Link href={`/teams/${team.slug}`} className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 hover:text-clash-primary">
                View team
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}

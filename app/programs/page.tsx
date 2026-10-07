import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/data/programs";
import Image from "next/image";

// This page is intentionally straightforward: image, summary, and a clear next step. No need to overcomplicate it.

export default function ProgramsPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Programs"
        title="The right environment for every athlete"
        description="Colorado Clash offers structured volleyball pathways for athletes who want to compete, learn, and grow inside a strong team culture."
      />

      <div className="mt-12 space-y-8">
        {programs.map((program) => (
          <article key={program.slug} className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative min-h-[260px]">
                <Image src={program.image} alt={program.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clash-primary">{program.ageGroup}</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">{program.name}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{program.shortDescription}</p>
                <a href={program.href} className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 hover:text-clash-primary">
                  Learn more
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coaches } from "@/data/coaches";

// The coaching page keeps it polished but not too heavy. It gives the staff a proper home without turning the site into a bio dump.

export default function CoachesPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Coaches"
        title="Leadership that elevates the club"
        description="The coaching staff shapes the athlete experience through standards, culture, and a development-first mindset."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {coaches.map((coach) => (
          <article key={coach.name} className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-80 w-full">
              <Image src={coach.image} alt={coach.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clash-primary">{coach.role}</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-slate-950">{coach.name}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{coach.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}

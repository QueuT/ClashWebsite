"use client";

// This is the main homepage. It tries to say, "this is a serious volleyball club" in under a minute,
// so parents can get the gist quickly without scrolling through a giant wall of marketing copy.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coaches } from "@/data/coaches";
import { events } from "@/data/events";
import { programs } from "@/data/programs";
import { teams } from "@/data/teams";
import { registrationUrl } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero first, because the first impression matters most. A strong image and a punchy headline do a lot of heavy lifting. */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80"
            alt="Volleyball athletes in action"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-900/40" />
        </div>

        <Container className="relative py-20 sm:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">
              Colorado Clash Volleyball Club
            </p>
            <h1 className="text-balance text-5xl font-black tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
              PLAY WITH PURPOSE.
              <span className="mt-2 block text-clash-secondary">COMPETE WITH CLASH.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              We develop confident athletes through teamwork, discipline, and competitive play that builds lasting character.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/tryouts" className="shadow-lg shadow-red-950/40">
                TRYOUTS / FIND YOUR TEAM
              </Button>
              <Button
                href="/programs"
                variant="ghost"
                className="border border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                EXPLORE PROGRAMS
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Team Over Talent"
            title="Volleyball is the vehicle. The team is the destination."
            description="Colorado Clash builds athletes who compete with purpose, support one another, and grow through challenge."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Compete",
                text: "Challenge yourself and your teammates with urgency, confidence, and a clear competitive standard.",
              },
              {
                title: "Develop",
                text: "Build smarter habits, stronger fundamentals, and a more complete game through consistent effort.",
              },
              {
                title: "Belong",
                text: "Create relationships that extend beyond the court and strengthen the athlete experience at every level.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clash-primary">
                  {item.title}
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="Development for every stage of the journey"
            description="From youth training to high-level competition, Colorado Clash offers organized pathways for athletes ready to improve and compete."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <div key={program.slug} className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950">
                <div className="relative h-56 w-full">
                  <Image src={program.image} alt={program.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clash-secondary">
                    {program.ageGroup}
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.06em] text-white">{program.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{program.shortDescription}</p>
                  <Link href={program.href} className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-white hover:text-clash-secondary">
                    Explore {program.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Featured teams"
            title="A club built around team culture"
            description="Explore the current and upcoming teams that define the Colorado Clash experience."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teams.map((team) => (
              <div key={team.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-64 w-full">
                  <Image src={team.image} alt={team.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clash-primary">{team.ageGroup}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{team.gender}</p>
                  </div>
                  <h3 className="mt-4 text-2xl font-black tracking-[-0.06em] text-slate-950">{team.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{team.level}</p>
                  <p className="mt-4 text-sm text-slate-600">Coach: {team.coach}</p>
                  <Link href={`/teams/${team.slug}`} className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 hover:text-clash-primary">
                    View Team
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-20">
        <Container>
          <SectionHeading
            eyebrow="Upcoming events"
            title="Stay connected to the season"
            description="Tryouts, clinics, open gyms, and competitive events help families plan the next step with clarity."
          />

          <div className="mt-10 space-y-5">
            {events.map((event) => (
              <div key={event.title} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-[120px_1.6fr_1.2fr_auto] md:items-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clash-primary">{event.date}</p>
                <div>
                  <h3 className="text-2xl font-black tracking-tighter text-slate-950">{event.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{event.location}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{event.description}</p>
                </div>
                <div className="text-sm text-slate-500">{event.location}</div>
                <Link href={event.href} className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-900 hover:border-slate-900">
                  {event.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Clash"
            title="A club defined by standards, trust, and growth"
            description="The Colorado Clash experience is built on development, competition, and a strong sense of community."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Development", text: "We place athlete growth at the center of every decision, from training to team culture." },
              { title: "Competition", text: "We help athletes perform with purpose while learning how to compete with composure and intensity." },
              { title: "Community", text: "Families, athletes, and coaches build trust and connection that extends beyond the season." },
            ].map((pill) => (
              <div key={pill.title} className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clash-secondary">{pill.title}</p>
                <p className="mt-5 text-lg leading-8 text-slate-200">{pill.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="rounded-4xl bg-slate-950 px-6 py-12 text-white sm:px-10 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clash-secondary">Ready to join the Clash?</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white">Find your team. Start your journey.</h2>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/tryouts">View tryouts</Button>
                <Button href="/contact" variant="ghost" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Coaches who build more than a team"
            description="A strong club starts with thoughtful leadership and a clear long-term vision for athlete development."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {coaches.map((coach) => (
              <div key={coach.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-72 w-full">
                  <Image src={coach.image} alt={coach.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clash-primary">{coach.role}</p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.06em] text-slate-950">{coach.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clash-primary">Quick access</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-slate-950">Register with Upper Hand</h2>
            </div>
            <Button href={registrationUrl}>Register now</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

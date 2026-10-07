"use client";

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
      <section className="relative isolate overflow-hidden bg-surface-strong">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80"
            alt="Volleyball athletes in action"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,18,0.78)_0%,rgba(8,11,18,0.7)_38%,rgba(8,11,18,0.25)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,140,255,0.35),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(72,217,209,0.22),transparent_28%)]" />
        </div>

        <Container className="relative py-20 sm:py-24 lg:py-28">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent-strong">
              Colorado Clash Volleyball Club
            </p>
            <h1 className="text-balance text-5xl font-black tracking-[-0.08em] text-white sm:text-6xl lg:text-[5rem]">
              TEAM OVER
              <span className="mt-2 block text-accent">TALENT.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              We develop confident athletes through teamwork, discipline, and competitive play that builds lasting character.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/tryouts">Find your team</Button>
              <Button
                href="/programs"
                variant="ghost"
                className="border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
              >
                Explore programs
              </Button>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["Youth athletes", "10+ club pathways"],
              ["Competitive culture", "Built for growth"],
              ["Team-first mindset", "Performance with purpose"],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-strong">{title}</p>
                <p className="mt-3 text-sm text-slate-200">{subtitle}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Team over talent"
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
                className="rounded-[2rem] border border-border bg-surface p-8 shadow-[var(--shadow-soft)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{item.title}</p>
                <p className="mt-5 text-lg leading-8 text-foreground-soft">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-20">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="Development for every stage of the journey"
            description="From youth training to high-level competition, Colorado Clash offers organized pathways for athletes ready to improve and compete."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {programs.map((program) => (
              <div key={program.slug} className="group overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={program.image} alt={program.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{program.ageGroup}</p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.06em] text-foreground">{program.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-foreground-soft">{program.shortDescription}</p>
                  <Link href={program.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-foreground hover:text-primary">
                    Explore {program.name}
                    <span aria-hidden="true">→</span>
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
              <div key={team.slug} className="group overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={team.image} alt={team.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{team.ageGroup}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{team.gender}</p>
                  </div>
                  <h3 className="mt-4 text-2xl font-black tracking-[-0.06em] text-foreground">{team.name}</h3>
                  <p className="mt-2 text-sm text-muted">{team.level}</p>
                  <p className="mt-4 text-sm text-foreground-soft">Coach: {team.coach}</p>
                  <Link href={`/teams/${team.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-foreground hover:text-primary">
                    View Team
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-20">
        <Container>
          <SectionHeading
            eyebrow="Upcoming events"
            title="Stay connected to the season"
            description="Tryouts, clinics, open gyms, and competitive events help families plan the next step with clarity."
          />

          <div className="mt-10 space-y-5">
            {events.map((event) => (
              <div key={event.title} className="grid gap-4 rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] md:grid-cols-[120px_1.6fr_1.2fr_auto] md:items-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{event.date}</p>
                <div>
                  <h3 className="text-2xl font-black tracking-[-0.05em] text-foreground">{event.title}</h3>
                  <p className="mt-2 text-sm text-muted">{event.location}</p>
                  <p className="mt-3 text-sm leading-7 text-foreground-soft">{event.description}</p>
                </div>
                <div className="text-sm text-muted">{event.location}</div>
                <Link href={event.href} className="inline-flex items-center justify-center rounded-full border border-border bg-surface-alt px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition hover:border-primary hover:text-primary">
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
              <div key={pill.title} className="rounded-[2rem] border border-border bg-surface-strong p-8 text-white shadow-[var(--shadow-strong)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{pill.title}</p>
                <p className="mt-5 text-lg leading-8 text-slate-200">{pill.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="rounded-[2.25rem] bg-[linear-gradient(135deg,var(--primary)_0%,var(--accent)_100%)] px-6 py-12 text-white shadow-[var(--shadow-strong)] sm:px-10 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Ready to join the Clash?</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">Find your team. Start your journey.</h2>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/tryouts" className="bg-white text-primary hover:bg-slate-100">View tryouts</Button>
                <Button href="/contact" variant="ghost" className="border-white/30 bg-white/5 text-white hover:bg-white/10">
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
              <div key={coach.name} className="group overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image src={coach.image} alt={coach.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{coach.role}</p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.06em] text-foreground">{coach.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-foreground-soft">{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="rounded-[2.25rem] border border-border bg-surface p-8 shadow-[var(--shadow-soft)] sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Quick access</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-foreground">Register with Upper Hand</h2>
            </div>
            <Button href={registrationUrl}>Register now</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

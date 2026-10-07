'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { navItems, registrationUrl, siteConfig } from "@/data/site";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Colorado Clash home">
          <Image
            src="/coclash/colorado-clash-crest.png"
            alt=""
            width={52}
            height={52}
            priority
            className="h-12 w-12 rounded-md bg-white p-1.5 object-contain"
          />
          <div>
            <p className="text-lg font-black tracking-[-0.06em] text-foreground">{siteConfig.name}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground-soft lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href={registrationUrl}
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--primary)_0%,var(--accent)_100%)] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
          >
            JOIN CLASH
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="rounded-full border border-border bg-surface p-2 text-foreground shadow-sm"
            onClick={() => setMobileOpen((current) => !current)}
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-base font-medium text-foreground-soft sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-2 py-2 transition hover:bg-surface-alt hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={registrationUrl}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--primary)_0%,var(--accent)_100%)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white"
              onClick={() => setMobileOpen(false)}
            >
              Register / Join Clash
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

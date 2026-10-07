'use client';

import Link from "next/link";
import { useState } from "react";
import { navItems, registrationUrl, siteConfig } from "@/data/site";

// Small, clean nav that works on phones without feeling like a desktop menu jammed into a tiny space.

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Colorado Clash home">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-clash-primary text-sm font-black text-white">
            CC
          </div>
          <div>
            <p className="text-lg font-black tracking-[-0.06em] text-slate-950">{siteConfig.name}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            href={registrationUrl}
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            JOIN CLASH
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="rounded-full border border-slate-300 p-2 lg:hidden"
          onClick={() => setMobileOpen((current) => !current)}
        >
          <span className="block h-0.5 w-6 bg-slate-900" />
          <span className="mt-1.5 block h-0.5 w-6 bg-slate-900" />
          <span className="mt-1.5 block h-0.5 w-6 bg-slate-900" />
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-base font-medium text-slate-700 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 transition hover:bg-slate-100 hover:text-slate-950"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={registrationUrl}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-clash-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white"
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

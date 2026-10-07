import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-strong text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-2xl font-black tracking-[-0.08em] text-white">{siteConfig.name}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">Volleyball Club</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Colorado-based youth volleyball with a focus on team culture, competitive development, and long-term athlete growth.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Navigation</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Resources</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link href="/programs" className="transition hover:text-white">Programs</Link></li>
            <li><Link href="/teams" className="transition hover:text-white">Teams</Link></li>
            <li><Link href="/tryouts" className="transition hover:text-white">Tryouts</Link></li>
            <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>{siteConfig.email}</li>
            <li>{siteConfig.phone}</li>
            <li><Link href="https://upperhand.com" className="transition hover:text-white">Upper Hand</Link></li>
            <li><Link href="/faq" className="transition hover:text-white">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Colorado Clash VBC</p>
          <p>Built for athletes, families, and the competitive volleyball community.</p>
        </div>
      </div>
    </footer>
  );
}

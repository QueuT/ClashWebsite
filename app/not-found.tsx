import Link from "next/link";

// Even a missing page should still feel like the club website, not like a broken template.

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clash-primary">404</p>
      <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950">Page not found</h1>
      <p className="mt-4 text-base leading-8 text-slate-600">
        The page you are looking for does not exist or is still being finalized.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-slate-800">
        Return home
      </Link>
    </div>
  );
}

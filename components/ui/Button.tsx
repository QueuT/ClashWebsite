import Link from "next/link";
import { ReactNode } from "react";

// A single button component keeps the site consistent and saves us from building 12 slightly different versions everywhere.

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2";

  const variantClass = {
    primary:
      "bg-clash-primary text-white shadow-sm hover:bg-red-700",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-700",
    ghost:
      "border border-slate-300 bg-white text-slate-900 hover:border-slate-900 hover:bg-slate-50",
  }[variant];

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${variantClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </button>
  );
}

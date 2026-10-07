import Link from "next/link";
import { ReactNode } from "react";

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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:-translate-y-0.5";

  const variantClass = {
    primary:
      "bg-[linear-gradient(135deg,var(--primary)_0%,var(--accent)_100%)] text-white shadow-[0_20px_40px_rgba(63,41,109,0.24)] hover:shadow-[0_24px_52px_rgba(63,41,109,0.32)]",
    secondary:
      "border border-border bg-surface text-foreground hover:border-primary hover:text-primary",
    ghost:
      "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
  }[variant];

  if (href) {
    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a href={href} className={`${baseClass} ${variantClass} ${className}`}>
          {children}
        </a>
      );
    }
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

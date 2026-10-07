// The section heading helper keeps the typography hierarchy tight and readable without making every block of content feel like a giant headline fight.

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-clash-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

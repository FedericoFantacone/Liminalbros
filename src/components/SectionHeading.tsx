type SectionHeadingProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`grid gap-8 lg:grid-cols-12 lg:gap-10 ${className}`}>
      <div className="lg:col-span-7">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
            {index}
          </span>
          <span className="h-px w-10 bg-acid/40" />
          <span className="eyebrow">{label}</span>
        </div>
        <h2 className="max-w-3xl text-balance text-[clamp(2.2rem,4.5vw,4.1rem)] font-medium leading-[1.03] tracking-[-0.055em]">
          {title}
        </h2>
      </div>
      {description && (
        <div className="flex items-end lg:col-span-5 lg:justify-end">
          <p className="max-w-md text-pretty text-[15px] leading-relaxed text-muted lg:text-right">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

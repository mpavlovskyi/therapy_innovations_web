interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  overline?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  overline,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {overline && (
        <p className="text-sm font-medium tracking-widest uppercase mb-4 text-[#6B6B6B]">
          {overline}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-black text-[#0F0F0F] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg text-[#6B6B6B] ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  overline?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ title, subtitle, overline, align = "left", light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {overline && (
        <p className={`text-sm font-semibold tracking-widest uppercase mb-4 ${light ? "text-[#E8722A]" : "text-[#E8722A]"}`}>
          {overline}
        </p>
      )}
      <h2 className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold ${light ? "text-white" : "text-[#191919]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"} ${light ? "text-white/50" : "text-[#6B7280]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ title, subtitle, align = "left", light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold ${light ? "text-white" : "text-[#1A1A1A]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"} ${light ? "text-white/70" : "text-[#6B6B6B]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

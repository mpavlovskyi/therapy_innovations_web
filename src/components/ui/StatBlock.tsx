interface StatBlockProps {
  value: string;
  label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-heading)] text-white">
        {value}
      </div>
      <div className="mt-3 text-sm text-white/60 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

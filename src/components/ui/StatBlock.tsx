interface StatBlockProps {
  value: string;
  label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-7xl font-black text-[#0F0F0F] tracking-tight">
        {value}
      </div>
      <div className="mt-3 text-sm text-[#6B6B6B] uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );
}

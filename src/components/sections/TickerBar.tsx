export function TickerBar() {
  const items = [
    "ABA Therapy Infrastructure",
    "Venture Studio",
    "Chicago",
    "7 Portfolio Companies",
    "100,000+ Users",
  ];

  const repeated = [...items, ...items];

  return (
    <section
      className="bg-[#F0F0EE] py-3.5 overflow-hidden border-y border-[#E5E5E5]"
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker-scroll 30s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B]"
          >
            {item}
            <span className="ml-6 text-[#C5C5C5]" aria-hidden="true">
              &middot;
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

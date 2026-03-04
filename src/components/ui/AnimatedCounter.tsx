"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  label,
  subtitle,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  subtitle: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <div ref={ref}>
      <div className="text-4xl md:text-5xl font-black text-[#0F0F0F] tracking-tight">
        {prefix}
        {started ? count.toLocaleString() : "0"}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[#6B6B6B]">
        {label}
      </div>
      <p className="mt-1 text-sm text-[#6B6B6B]">{subtitle}</p>
    </div>
  );
}

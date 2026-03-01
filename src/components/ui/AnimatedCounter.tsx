"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  label,
  subtitle,
  icon,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  subtitle: string;
  icon?: string;
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
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <div ref={ref} className="text-center">
      {icon && (
        <div className="flex justify-center mb-3">
          <Image src={icon} width={28} height={28} alt="" />
        </div>
      )}
      <div className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl font-bold text-white">
        {prefix}
        {started ? count.toLocaleString() : "0"}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-[#E8813A]">
        {label}
      </div>
      <p className="mt-1 text-sm text-white/60 max-w-[220px] mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

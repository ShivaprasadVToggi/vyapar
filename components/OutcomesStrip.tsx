"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  value: string;
  suffix?: string;
  label: string;
  isNumber?: boolean;
}

function AnimatedStat({ value, suffix, label, isNumber = true }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(isNumber ? 0 : value);

  useEffect(() => {
    if (!inView || !isNumber) return;
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(numericValue * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value, isNumber]);

  const formatValue = (v: number | string) => {
    if (typeof v === "string") return v;
    if (value.includes(".")) return v.toFixed(1);
    return Math.round(v).toLocaleString("en-IN");
  };

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-mono-tabular font-bold tracking-tight text-[var(--vp-fg)] text-4xl md:text-5xl lg:text-6xl leading-none">
        {formatValue(display)}
        {suffix && <span className="text-[var(--vp-brand)]">{suffix}</span>}
      </div>
      <div className="text-[14px] text-muted mt-3 max-w-[180px] mx-auto md:mx-0">
        {label}
      </div>
    </div>
  );
}

export function OutcomesStrip() {
  return (
    <section className="py-20 bg-[var(--vp-bg-soft)] border-y border-[var(--vp-border)]">
      <div className="container-vp">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <AnimatedStat value="T+0" suffix="" label="Distributor payment · from pool lock" isNumber={false} />
          <AnimatedStat value="3.5" suffix="%" label="Spread unlocked per truckload at full fill" />
          <AnimatedStat value="14" suffix="-day" label="Closed-loop lending cycle · fully secured" isNumber={false} />
          <AnimatedStat value="500" suffix="+" label="Kiranas onboarded per district from 3 distributors" />
        </div>
        <p className="text-center text-[11px] text-subtle mt-10">
          Figures are model-based targets. Pilot data will replace once available.
        </p>
      </div>
    </section>
  );
}

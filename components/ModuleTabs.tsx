"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Layers,
  Wallet,
  ShieldCheck,
  RotateCcw,
  Brain,
  Gauge,
} from "lucide-react";
import { ModuleVisual } from "./ProductVisuals";

const modules = [
  {
    id: "route-pools",
    name: "Route Pools",
    icon: Layers,
    promise: "Aggregate the beat.",
    description:
      "Open a Route Pool 48 hours before every scheduled delivery. Kiranas commit staple quantities anonymously. Progressive discount tiers unlock automatically as the pool fills.",
    href: "/platform/route-pools",
    visualType: "route-pools" as const,
  },
  {
    id: "disbursal",
    name: "Closed-Loop Disbursal",
    icon: Wallet,
    promise: "Pay the distributor, never the cash.",
    description:
      "When the pool locks, a partner NBFC funds 100% of the invoice straight to the distributor within 24 hours. The merchant never touches cash — eliminating diversion risk entirely.",
    href: "/platform/closed-loop-disbursal",
    visualType: "disbursal" as const,
  },
  {
    id: "pod",
    name: "Proof of Delivery",
    icon: ShieldCheck,
    promise: "Custody transfers at the counter.",
    description:
      "The distributor delivers on its own truck. The kirana inspects goods and enters a 4-digit OTP on the driver's phone; custody transfers instantly with an immutable audit trail.",
    href: "/platform/proof-of-delivery",
    visualType: "pod" as const,
  },
  {
    id: "repayment",
    name: "Repayment Engine",
    icon: RotateCcw,
    promise: "Sweeps and AutoPay, orchestrated.",
    description:
      "15–20% of daily UPI collections sweeps automatically at the PA nodal account to pay down principal. UPI AutoPay on Day 14 guarantees any remaining balance clears.",
    href: "/platform/repayment-engine",
    visualType: "repayment" as const,
  },
  {
    id: "credit",
    name: "Credit Intelligence",
    icon: Brain,
    promise: "Behavioral underwriting nobody else can build.",
    description:
      "Order size, fulfilment frequency, and UPI sweep velocity combine into a proprietary behavioral score. Signals traditional bureaus simply cannot see.",
    href: "/platform/credit-intelligence",
    visualType: "credit" as const,
  },
  {
    id: "risk",
    name: "Risk & Compliance",
    icon: Gauge,
    promise: "Built for RBI's LSP framework.",
    description:
      "PA nodal accounting, immutable audit trails, consent-driven mandates, and data residency — engineered from day one for regulated Indian financial infrastructure.",
    href: "/platform/risk-compliance",
    visualType: "risk" as const,
  },
];

export function ModuleTabs() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive((index + 1) % modules.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive((index - 1 + modules.length) % modules.length);
    }
  };

  const current = modules[active];
  const CurrentIcon = current.icon;

  return (
    <div>
      {/* Tab switcher */}
      <div
        ref={tabsRef}
        role="tablist"
        aria-label="Platform modules"
        className="flex flex-wrap gap-2 mb-10 p-1.5 bg-[var(--vp-bg-surface)] rounded-2xl border border-[var(--vp-border)]"
      >
        {modules.map((m, i) => {
          const Icon = m.icon;
          const isActive = i === active;
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${m.id}`}
              id={`tab-${m.id}`}
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onClick={() => setActive(i)}
              className={
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13.5px] font-medium transition-all flex-1 min-w-[140px] justify-center " +
                (isActive
                  ? "bg-white text-[var(--vp-fg)] shadow-sm border border-[var(--vp-border)]"
                  : "text-[var(--vp-fg-muted)] hover:text-[var(--vp-fg)]")
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{m.name}</span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="max-w-md">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}
            >
              <CurrentIcon className="w-6 h-6" />
            </div>
            <h3 className="heading-md mb-3">{current.promise}</h3>
            <p className="text-[17px] text-muted leading-relaxed mb-6">
              {current.description}
            </p>
            <Link href={current.href} className="btn-ghost">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-grid rounded-2xl opacity-40 pointer-events-none" />
            <div className="relative">
              <ModuleVisual type={current.visualType} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 text-center">
        <Link href="/platform" className="btn-ghost">
          Explore our platform
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

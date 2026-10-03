"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { formatINR } from "@/lib/utils";

const TIERS = [
  { fill: 40, kiranaPct: 1.5, nbfcPct: 1.0, vpPct: 0.4, label: "40% fill · 1.5% off" },
  { fill: 70, kiranaPct: 2.1, nbfcPct: 1.0, vpPct: 0.4, label: "70% fill · 2.5% off" },
  { fill: 100, kiranaPct: 2.1, nbfcPct: 1.0, vpPct: 0.4, label: "100% fill · 3.5% off" },
];

export function SpreadCalculator() {
  const [truckload, setTruckload] = useState(200000);
  const [kiranaCount, setKiranaCount] = useState(15);
  const [tierIndex, setTierIndex] = useState(2);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tier = TIERS[tierIndex];
  const totalSpreadPct = tier.kiranaPct + tier.nbfcPct + tier.vpPct;

  const breakdown = useMemo(() => {
    const totalSpread = (truckload * totalSpreadPct) / 100;
    const kiranaSavings = (truckload * tier.kiranaPct) / 100;
    const nbfcFee = (truckload * tier.nbfcPct) / 100;
    const vpFee = (truckload * tier.vpPct) / 100;
    const perKirana = truckload / kiranaCount;
    const perKiranaSavings = kiranaSavings / kiranaCount;

    return {
      totalSpread,
      kiranaSavings,
      nbfcFee,
      vpFee,
      perKirana,
      perKiranaSavings,
    };
  }, [truckload, kiranaCount, tier, totalSpreadPct]);

  const kiranaW = (tier.kiranaPct / totalSpreadPct) * 100;
  const nbfcW = (tier.nbfcPct / totalSpreadPct) * 100;
  const vpW = (tier.vpPct / totalSpreadPct) * 100;

  return (
    <div className="card-vp p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <label className="block text-[13px] font-medium text-muted mb-2">
              Truckload value
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono-tabular text-[var(--vp-fg-subtle)]">
                ₹
              </span>
              <input
                type="number"
                value={truckload}
                onChange={(e) => setTruckload(Math.max(50000, Number(e.target.value) || 0))}
                className="w-full h-12 pl-8 pr-4 rounded-xl border border-[var(--vp-border)] bg-[var(--vp-bg)] font-mono-tabular text-[15px] focus:outline-none focus:border-[var(--vp-brand)] focus:ring-2 focus:ring-[var(--vp-brand-surface)] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-muted mb-2">
              Number of kiranas · <span className="font-mono-tabular">{kiranaCount}</span>
            </label>
            <input
              type="range"
              min={5}
              max={30}
              value={kiranaCount}
              onChange={(e) => setKiranaCount(Number(e.target.value))}
              className="w-full h-2 bg-[var(--vp-bg-surface)] rounded-full appearance-none cursor-pointer accent-[var(--vp-brand)]"
            />
            <div className="flex justify-between text-[11px] text-subtle mt-1">
              <span>5</span>
              <span>30</span>
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-muted mb-2">
              Pool fill tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {TIERS.map((t, i) => (
                <button
                  key={t.fill}
                  onClick={() => setTierIndex(i)}
                  className={
                    "p-3 rounded-xl border text-left transition-all " +
                    (tierIndex === i
                      ? "border-[var(--vp-brand)] bg-[var(--vp-brand-surface)]"
                      : "border-[var(--vp-border)] hover:border-[var(--vp-border-strong)]")
                  }
                >
                  <div
                    className="font-mono-tabular font-bold text-[15px]"
                    style={{ color: tierIndex === i ? "var(--vp-brand)" : "var(--vp-fg)" }}
                  >
                    {t.fill}%
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">
                    {t.kiranaPct + t.nbfcPct + t.vpPct}% spread
                  </div>
                </button>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-subtle leading-relaxed pt-2 border-t border-[var(--vp-border)]">
            Illustrative. Actual terms vary by distributor and partner. Split at 100% fill:
            kiranas 2.1% · NBFC 1.0% · B2Beat 0.4%.
          </p>
        </div>

        {/* Output */}
        <div className="lg:col-span-3 space-y-6">
          {/* Stacked bar */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[13px] font-medium">Total spread unlocked</span>
              <span className="font-mono-tabular font-bold text-lg">
                {formatINR(breakdown.totalSpread)}
                <span className="text-[13px] font-normal text-muted ml-1">
                  ({totalSpreadPct}%)
                </span>
              </span>
            </div>
            <div className="h-4 bg-[var(--vp-bg-surface)] rounded-full overflow-hidden flex">
              <motion.div
                className="h-full"
                style={{ background: "var(--vp-brand)" }}
                initial={{ width: 0 }}
                animate={{ width: mounted ? `${kiranaW}%` : "0%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.div
                className="h-full"
                style={{ background: "var(--vp-accent-amber)" }}
                initial={{ width: 0 }}
                animate={{ width: mounted ? `${nbfcW}%` : "0%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              />
              <motion.div
                className="h-full"
                style={{ background: "#0A0A0A" }}
                initial={{ width: 0 }}
                animate={{ width: mounted ? `${vpW}%` : "0%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              />
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                {
                  label: "Kirana savings",
                  pct: tier.kiranaPct,
                  val: breakdown.kiranaSavings,
                  color: "var(--vp-brand)",
                },
                {
                  label: "NBFC fee",
                  pct: tier.nbfcPct,
                  val: breakdown.nbfcFee,
                  color: "var(--vp-accent-amber)",
                },
                {
                  label: "B2Beat",
                  pct: tier.vpPct,
                  val: breakdown.vpFee,
                  color: "#0A0A0A",
                },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-xl bg-[var(--vp-bg-surface)]">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: item.color }}
                    />
                    <span className="text-[12px] text-muted">{item.label}</span>
                  </div>
                  <div className="font-mono-tabular font-bold text-[15px]">
                    {formatINR(item.val)}
                  </div>
                  <div className="text-[11px] text-subtle">{item.pct}% of truckload</div>
                </div>
              ))}
            </div>
          </div>

          {/* Per-kirana & DSO */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--vp-border)]">
            <div className="p-4 rounded-xl bg-[var(--vp-bg-surface)]">
              <div className="text-[12px] text-muted mb-1">Avg. order per kirana</div>
              <div className="font-mono-tabular font-bold text-[18px]">
                {formatINR(Math.round(breakdown.perKirana))}
              </div>
              <div className="text-[11px] mt-1" style={{ color: "var(--vp-brand)" }}>
                Saves {formatINR(Math.round(breakdown.perKiranaSavings))} · no upfront cash
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[var(--vp-bg-surface)]">
              <div className="text-[12px] text-muted mb-1">Distributor DSO</div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono-tabular text-[15px] text-subtle line-through">
                  25 days
                </span>
                <span className="font-mono-tabular font-bold text-[18px]" style={{ color: "var(--vp-success)" }}>
                  → T+0
                </span>
              </div>
              <div className="text-[11px] mt-1 text-muted">
                Paid within 24h · zero bad debt
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

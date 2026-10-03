"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Truck,
  Wallet,
  Shield,
  ArrowRight,
  QrCode,
} from "lucide-react";

/* ============================================================
   Route Pool Card — Hero visual
   Shows route info, anonymized stores, tiered progress bar
   ============================================================ */
export function RoutePoolCard() {
  const [progress, setProgress] = useState(0);
  const targetProgress = 78;

  useEffect(() => {
    const t = setTimeout(() => setProgress(targetProgress), 300);
    return () => clearTimeout(t);
  }, []);

  const tiers = [
    { pct: 40, discount: "1.5%", label: "Tier 1" },
    { pct: 70, discount: "2.5%", label: "Tier 2" },
    { pct: 100, discount: "3.5%", label: "Tier 3" },
  ];

  const unlockedTiers = tiers.filter((t) => progress >= t.pct);

  return (
    <div className="card-vp p-6 w-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="flex items-center gap-2 text-[12px] text-subtle mb-1.5">
            <span className="px-2 py-0.5 rounded-full bg-[var(--vp-brand-surface)] text-[var(--vp-brand)] font-medium">
              LIVE
            </span>
            <span>Route Pool · RP-2041</span>
          </div>
          <h3 className="font-semibold text-[16px]">Ahmedabad — North Beat</h3>
          <p className="text-[13px] text-muted mt-0.5">Tuesday / Friday · Scheduled: Fri 06:00</p>
        </div>
        <div className="text-right">
          <div className="text-[11px] text-subtle uppercase tracking-wide">Locks in</div>
          <div className="font-mono-tabular font-semibold text-[18px]">14h 32m</div>
        </div>
      </div>

      {/* Stores row */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex -space-x-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-medium text-white"
              style={{
                background: `hsl(${160 + i * 8}, 35%, ${38 + i * 2}%)`,
              }}
            >
              K{i + 1}
            </div>
          ))}
        </div>
        <span className="text-[13px] text-muted">
          <span className="font-semibold text-[var(--vp-fg)]">15</span> stores committed · anonymous
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex items-center justify-between text-[13px] mb-2">
          <span className="text-muted">Pool fill</span>
          <span className="font-mono-tabular font-semibold">{progress}%</span>
        </div>
        <div className="relative h-2.5 bg-[var(--vp-bg-surface)] rounded-full overflow-visible">
          {/* Tier markers */}
          {tiers.map((t) => (
            <div
              key={t.label}
              className="absolute top-1/2 -translate-y-1/2 w-px h-4 bg-[var(--vp-border-strong)] z-10"
              style={{ left: `${t.pct}%` }}
            />
          ))}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: "var(--vp-brand)" }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
        </div>
      </div>

      {/* Tier badges */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {tiers.map((t, i) => {
          const unlocked = unlockedTiers.includes(t);
          return (
            <motion.div
              key={t.label}
              initial={{ opacity: 0.4, scale: 0.95 }}
              animate={unlocked ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.2 }}
              className={
                "rounded-lg p-2.5 text-center border transition-all " +
                (unlocked
                  ? "border-[var(--vp-brand-border)] bg-[var(--vp-brand-surface)]"
                  : "border-[var(--vp-border)] bg-[var(--vp-bg-surface)] opacity-60")
              }
            >
              <div className="text-[10px] uppercase tracking-wide text-subtle">{t.label}</div>
              <div
                className="font-mono-tabular font-bold text-[15px] mt-0.5"
                style={{ color: unlocked ? "var(--vp-brand)" : "var(--vp-fg-subtle)" }}
              >
                {t.discount}
              </div>
              <div className="text-[10px] text-muted mt-0.5">{t.pct}% fill</div>
            </motion.div>
          );
        })}
      </div>

      {/* Current discount banner */}
      <div
        className="mt-4 rounded-lg p-3 flex items-center justify-between"
        style={{ background: "var(--vp-accent-amber-surface)" }}
      >
        <span className="text-[13px] font-medium">Current discount unlocked</span>
        <span
          className="font-mono-tabular font-bold text-lg"
          style={{ color: "#8A6A1B" }}
        >
          2.5%
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   Disbursal Timeline — small status timeline
   ============================================================ */
export function DisbursalTimeline() {
  const steps = [
    { label: "Pool locks", status: "done", time: "T-0" },
    { label: "Invoice raised", status: "done", time: "T+0h" },
    { label: "NBFC approves", status: "active", time: "T+4h" },
    { label: "Funds disbursed", status: "pending", time: "T+24h" },
  ];

  return (
    <div className="card-vp p-5 w-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-[14px]">Disbursal status</h4>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-[var(--vp-success-surface)] text-[var(--vp-success)] font-medium">
          On track
        </span>
      </div>
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            <div
              className={
                "w-6 h-6 rounded-full flex items-center justify-center shrink-0 " +
                (s.status === "done"
                  ? "bg-[var(--vp-brand)] text-white"
                  : s.status === "active"
                  ? "bg-[var(--vp-brand-surface)] text-[var(--vp-brand)] ring-4 ring-[var(--vp-brand-surface)]/40"
                  : "bg-[var(--vp-bg-surface)] text-[var(--vp-fg-subtle)]")
              }
            >
              {s.status === "done" ? (
                <CheckCircle2 className="w-[14px] h-[14px]" />
              ) : s.status === "active" ? (
                <Clock className="w-[14px] h-[14px]" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
              )}
            </div>
            <div className="flex-1">
              <div
                className={
                  "text-[13px] font-medium " +
                  (s.status === "pending" ? "text-subtle" : "")
                }
              >
                {s.label}
              </div>
            </div>
            <div className="font-mono-tabular text-[12px] text-subtle">{s.time}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-[var(--vp-border)] flex items-center justify-between">
        <span className="text-[12px] text-muted">Amount</span>
        <span className="font-mono-tabular font-semibold text-[15px]">₹2,00,000</span>
      </div>
    </div>
  );
}

/* ============================================================
   Pool Tier Progress UI — for Core section
   ============================================================ */
export function PoolTierUI() {
  return (
    <div className="card-vp p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[11px] text-subtle uppercase tracking-wide">Route Pool</div>
          <div className="font-semibold mt-0.5">Surat — Central Beat</div>
        </div>
        <div className="font-mono-tabular text-[13px] text-subtle">₹1,86,400 / ₹2,00,000</div>
      </div>

      <div className="relative h-3 bg-[var(--vp-bg-surface)] rounded-full mb-5 overflow-visible">
        {[40, 70, 100].map((p) => (
          <div
            key={p}
            className="absolute top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[var(--vp-border-strong)]"
            style={{ left: `${p}%` }}
          />
        ))}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: "var(--vp-brand)" }}
          initial={{ width: 0 }}
          whileInView={{ width: "93%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          { t: "40%", d: "1.5%", on: true },
          { t: "70%", d: "2.5%", on: true },
          { t: "100%", d: "3.5%", on: false },
        ].map((x) => (
          <div
            key={x.t}
            className={
              "rounded-lg p-2.5 border text-[12px] " +
              (x.on
                ? "border-[var(--vp-brand-border)] bg-[var(--vp-brand-surface)] text-[var(--vp-brand)]"
                : "border-[var(--vp-border)] text-subtle")
            }
          >
            <div className="font-mono-tabular font-bold">{x.d}</div>
            <div className="mt-0.5 opacity-70">at {x.t}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-[var(--vp-border)]">
        <div className="flex items-center justify-between text-[12px]">
          <span className="text-muted">Anti-monopoly cap</span>
          <span className="font-mono-tabular font-medium">Max 35% per merchant</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Disbursal UI — for Core section
   ============================================================ */
export function DisbursalUI() {
  return (
    <div className="card-vp p-6 w-full">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}
        >
          <Wallet className="w-5 h-5" />
        </div>
        <div>
          <div className="font-semibold">T+0 NBFC Disbursal</div>
          <div className="text-[12px] text-muted">Closed-loop · no cash diversion</div>
        </div>
      </div>

      <div className="relative pl-6 space-y-5">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--vp-border)]" />
        {[
          { icon: CheckCircle2, label: "Pool locks", amt: "", color: "var(--vp-brand)" },
          { icon: ArrowRight, label: "100% invoice to distributor", amt: "₹2,00,000", color: "var(--vp-brand)" },
          { icon: Truck, label: "Goods in transit", amt: "", color: "var(--vp-fg-subtle)" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="relative">
              <div
                className="absolute -left-6 w-5 h-5 rounded-full flex items-center justify-center text-white"
                style={{ background: s.color }}
              >
                <Icon className="w-3 h-3" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px]">{s.label}</span>
                {s.amt && (
                  <span className="font-mono-tabular font-semibold text-[14px]">{s.amt}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 p-3 rounded-lg bg-[var(--vp-bg-surface)] flex items-center justify-between">
        <span className="text-[12px] text-muted">SLA</span>
        <span className="font-mono-tabular font-semibold text-[13px]">Within 24 hours</span>
      </div>
    </div>
  );
}

/* ============================================================
   Phone OTP UI — Proof of Delivery
   ============================================================ */
export function PhoneOTPUI() {
  return (
    <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] p-3 bg-[var(--vp-fg)] shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[var(--vp-fg)] rounded-b-2xl z-10" />
        <div className="rounded-[2rem] bg-[var(--vp-bg)] overflow-hidden" style={{ aspectRatio: "9/16" }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-medium">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span>●●●●</span>
              <span>📶</span>
              <span>🔋</span>
            </span>
          </div>

          <div className="px-5 pt-4 pb-6">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                style={{ background: "var(--vp-brand)" }}
              >
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-subtle">VyaparPool</div>
                <div className="font-semibold text-[13px]">Proof of Delivery</div>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-[11px] text-subtle uppercase tracking-wide mb-1">Confirm receipt</div>
              <div className="font-semibold text-[15px]">Ahmedabad North Beat</div>
              <div className="text-[12px] text-muted mt-1">12 SKUs · 4 cartons</div>
            </div>

            {/* OTP digits */}
            <div className="flex justify-center gap-2.5 mb-5">
              {["4", "●", "●", "●"].map((d, i) => (
                <div
                  key={i}
                  className={
                    "w-11 h-12 rounded-xl flex items-center justify-center font-mono-tabular font-bold text-lg border " +
                    (i === 0
                      ? "border-[var(--vp-brand)] bg-[var(--vp-brand-surface)] text-[var(--vp-brand)]"
                      : "border-[var(--vp-border)] bg-[var(--vp-bg-surface)] text-[var(--vp-fg-subtle)]")
                  }
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="text-center text-[11px] text-muted mb-5">
              Entered by kirana on driver&apos;s device
            </div>

            {/* Custody transfer */}
            <div
              className="rounded-xl p-3 text-center"
              style={{ background: "var(--vp-success-surface)" }}
            >
              <div className="flex items-center justify-center gap-1.5 text-[12px] font-medium" style={{ color: "var(--vp-success)" }}>
                <CheckCircle2 className="w-4 h-4" />
                Custody transferred
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Repayment UI — Sweep chart + ring
   ============================================================ */
export function RepaymentUI() {
  const dailySweeps = [18, 22, 15, 20, 19, 21, 17];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const progressPct = 62;

  return (
    <div className="card-vp p-6 w-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-[11px] text-subtle uppercase tracking-wide">Loan #LN-8821</div>
          <div className="font-semibold mt-0.5">14-day cycle · Day 9</div>
        </div>
        <div className="text-right">
          <div className="text-[11px] text-subtle">Remaining</div>
          <div className="font-mono-tabular font-semibold">₹5,054</div>
        </div>
      </div>

      <div className="flex items-center gap-6 mb-5">
        {/* Ring */}
        <div className="relative w-24 h-24 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="var(--vp-bg-surface)"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="var(--vp-brand)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 42}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
              whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - progressPct / 100) }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="font-mono-tabular font-bold text-lg">{progressPct}%</div>
            <div className="text-[10px] text-subtle">paid down</div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-2 text-[13px]">
          <div className="flex items-center justify-between">
            <span className="text-muted">Daily UPI sweep</span>
            <span className="font-medium">15–20%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted">AutoPay floor</span>
            <span className="font-medium">Day 14</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted">Avg. daily sweep</span>
            <span className="font-mono-tabular font-medium">₹732</span>
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div>
        <div className="text-[11px] text-subtle uppercase tracking-wide mb-2">
          Daily sweep % of UPI collections
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {dailySweeps.map((v, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{ background: "var(--vp-brand-surface)" }}
              initial={{ height: 0 }}
              whileInView={{ height: `${v * 4}px` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className="flex gap-1.5 mt-1.5">
          {days.map((d, i) => (
            <div key={i} className="flex-1 text-center text-[10px] text-subtle">
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Module UI visual — generic module card
   ============================================================ */
export function ModuleVisual({ type }: { type: string }) {
  switch (type) {
    case "route-pools":
      return <PoolTierUI />;
    case "disbursal":
      return <DisbursalUI />;
    case "pod":
      return <PhoneOTPUI />;
    case "repayment":
      return <RepaymentUI />;
    case "credit":
      return <CreditIntelUI />;
    case "risk":
      return <RiskComplianceUI />;
    default:
      return <PoolTierUI />;
  }
}

/* ============================================================
   Credit Intelligence UI
   ============================================================ */
export function CreditIntelUI() {
  return (
    <div className="card-vp p-6 w-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-[11px] text-subtle uppercase tracking-wide">Merchant Score</div>
          <div className="font-semibold mt-0.5">Kirana #K-4421 · Ahmedabad</div>
        </div>
        <div
          className="px-3 py-1 rounded-full text-[12px] font-semibold"
          style={{ background: "var(--vp-success-surface)", color: "var(--vp-success)" }}
        >
          Tier A
        </div>
      </div>

      {/* Score gauge */}
      <div className="flex items-center justify-center mb-5">
        <div className="relative w-36 h-36">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="var(--vp-bg-surface)"
              strokeWidth="10"
              strokeDasharray="314"
              strokeDashoffset="78"
              transform="rotate(135 60 60)"
            />
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="var(--vp-brand)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="314"
              initial={{ strokeDashoffset: 314 }}
              whileInView={{ strokeDashoffset: 125 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              transform="rotate(135 60 60)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="font-mono-tabular font-bold text-3xl">782</div>
            <div className="text-[11px] text-subtle">Behavioral score</div>
          </div>
        </div>
      </div>

      {/* Signals */}
      <div className="space-y-2.5">
        {[
          { label: "Order frequency", val: "High", pct: 85 },
          { label: "Fulfilment rate", val: "98%", pct: 98 },
          { label: "UPI sweep velocity", val: "Stable", pct: 72 },
          { label: "Pool participation", val: "Regular", pct: 80 },
        ].map((s) => (
          <div key={s.label}>
            <div className="flex items-center justify-between text-[12px] mb-1">
              <span className="text-muted">{s.label}</span>
              <span className="font-medium">{s.val}</span>
            </div>
            <div className="h-1.5 bg-[var(--vp-bg-surface)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--vp-brand)" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Risk & Compliance UI
   ============================================================ */
export function RiskComplianceUI() {
  return (
    <div className="card-vp p-6 w-full">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}
        >
          <Shield className="w-5 h-5" />
        </div>
        <div>
          <div className="font-semibold">Compliance posture</div>
          <div className="text-[12px] text-muted">LSP framework · PA nodal</div>
        </div>
      </div>

      <div className="space-y-2.5">
        {[
          { label: "RBI LSP registration", status: "Active" },
          { label: "PA nodal reconciliation", status: "Daily" },
          { label: "Data residency (India)", status: "Compliant" },
          { label: "Audit trail · immutable", status: "Enabled" },
          { label: "Consent & mandate mgmt", status: "UPI AutoPay" },
        ].map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between p-3 rounded-lg bg-[var(--vp-bg-surface)]"
          >
            <span className="text-[13px]">{r.label}</span>
            <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: "var(--vp-success)" }}>
              <CheckCircle2 className="w-[14px] h-[14px]" />
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { Layers, Wallet, ShieldCheck, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Four steps that turn a distributor's delivery beat into a pooled, pre-financed, self-repaying flow.",
};

const steps = [
  {
    num: "01",
    icon: Layers,
    title: "Virtual Beat Pooling",
    desc: "48 hours before a distributor's scheduled route, B2Beat opens a Route Pool. Kiranas commit staple quantities anonymously. Progressive discount tiers unlock at 40%, 70%, and 100% fill. Anti-monopoly rule: no merchant can take more than 35% of a pool.",
    accent: "var(--vp-brand-surface)",
    accentColor: "var(--vp-brand)",
  },
  {
    num: "02",
    icon: Wallet,
    title: "Instant T+0 NBFC Disbursal",
    desc: "When the pool locks, a partner NBFC pays 100% of the invoice directly to the distributor within 24 hours. Closed-loop architecture means the merchant never receives cash, so there is no diversion risk. The distributor passes on ~3.5% total spread.",
    accent: "var(--vp-accent-amber-surface)",
    accentColor: "#8A6A1B",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Zero-Asset Doorstep Delivery",
    desc: "The distributor delivers on its own truck. The kirana inspects goods and enters a 4-digit OTP on the driver's phone; custody transfers instantly with an immutable audit trail. No warehouses, no new trucks, no drop points.",
    accent: "#EEF2F6",
    accentColor: "var(--vp-fg)",
  },
  {
    num: "04",
    icon: RotateCcw,
    title: "Dual-Rail Repayment",
    desc: "Two rails guarantee repayment on the 14-day loan: (a) Daily micro-sweep — 15–20% of daily UPI collections on the merchant's linked QR splits at the PA nodal account to pay down principal. (b) UPI AutoPay mandate on Day 14 for any remaining balance.",
    accent: "var(--vp-brand-surface)",
    accentColor: "var(--vp-brand)",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="Four steps. Zero new assets."
        subtitle="B2Beat is a software and credit-orchestration layer on top of existing distributor delivery beats. Here's how a single route flows through the system."
      />

      <Section eyebrow="The flow" title="From pool open to repayment complete.">
        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="card-vp p-6 md:p-8 relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: s.accent, color: s.accentColor }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="md:text-center">
                      <div className="font-mono-tabular font-bold text-2xl" style={{ color: s.accentColor }}>
                        {s.num}
                      </div>
                      <div className="text-[11px] text-subtle uppercase tracking-wide">Step</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[20px] mb-2 tracking-tight">{s.title}</h3>
                    <p className="text-[15px] text-muted leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-full w-px h-6" style={{ background: "var(--vp-border)" }} />
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="The problem solved" title="What was broken before." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h4 className="font-semibold text-[16px] mb-4">For kiranas</h4>
            <p className="text-[14.5px] text-muted leading-relaxed">
              Lose 2–2.5% cash discount (over ₹1,20,000/year) because they lack lump-sum cash. Can't hit volume slabs individually.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[16px] mb-4">For distributors</h4>
            <p className="text-[14.5px] text-muted leading-relaxed">
              Suffer 20–30 day DSO, recurring bad debt, and the cost of running cash-collection beats that don't move goods.
            </p>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

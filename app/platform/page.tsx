import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Wallet, ShieldCheck, RotateCcw, Brain, Gauge } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Platform",
  description: "Explore B2Beat OS — six modules for pooling, financing, and collecting at any scale.",
};

const modules = [
  {
    name: "Route Pools",
    icon: Layers,
    href: "/platform/route-pools",
    desc: "Aggregate demand 48 hours before every scheduled beat. Anonymous ordering, progressive discount tiers, and anti-monopoly caps built in.",
  },
  {
    name: "Closed-Loop Disbursal",
    icon: Wallet,
    href: "/platform/closed-loop-disbursal",
    desc: "Partner NBFC pays 100% of the invoice directly to the distributor within 24 hours. Cash never touches the merchant.",
  },
  {
    name: "Proof of Delivery",
    icon: ShieldCheck,
    href: "/platform/proof-of-delivery",
    desc: "OTP-based custody transfer at the kirana counter. Immutable audit trail, zero paperwork, existing trucks only.",
  },
  {
    name: "Repayment Engine",
    icon: RotateCcw,
    href: "/platform/repayment-engine",
    desc: "Dual-rail collection: daily UPI micro-sweeps at the PA nodal account, plus UPI AutoPay as the Day-14 safety floor.",
  },
  {
    name: "Credit Intelligence",
    icon: Brain,
    href: "/platform/credit-intelligence",
    desc: "Behavioral underwriting from order frequency, fulfilment rate, and UPI sweep velocity. Signals traditional bureaus miss.",
  },
  {
    name: "Risk & Compliance",
    icon: Gauge,
    href: "/platform/risk-compliance",
    desc: "Engineered for RBI's LSP framework, PA nodal accounting, data residency, and immutable audit trails.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="B2Beat OS"
        title="One platform. Six modules. Infinite routes."
        subtitle="Pick the modules you need, or run the full stack end-to-end. Every module shares the same data model, the same ledger, and the same compliance posture."
        ctaPrimary={{ label: "Get Started", href: "/get-started" }}
        ctaSecondary={{ label: "Talk to sales", href: "/get-started" }}
      />

      <Section eyebrow="Modules" title="Everything you need to run financed routes.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.name}
                href={m.href}
                className="card-vp p-7 flex flex-col group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-[18px] mb-2 tracking-tight group-hover:text-[var(--vp-brand)] transition-colors">
                  {m.name}
                </h3>
                <p className="text-[14.5px] text-muted leading-relaxed mb-5 flex-1">
                  {m.desc}
                </p>
                <span className="btn-ghost self-start">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Architecture"
        title="Rides the rails India already trusts."
        subtitle="B2Beat is a software and credit-orchestration layer. We don't own warehouses, trucks, or drop points. We make the existing infrastructure work harder."
        className="bg-[var(--vp-bg-soft)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Zero physical liability",
              desc: "No warehouses, no trucks, no drop points. Every delivery moves on the distributor's existing fleet.",
            },
            {
              title: "Rides existing rails",
              desc: "UPI, UPI AutoPay, RBI-regulated PA nodal splits, NBFC partnerships — built on proven infrastructure.",
            },
            {
              title: "District-level flywheel",
              desc: "Onboarding 3 regional distributors unlocks 500+ kiranas in a single district. Network effects compound fast.",
            },
          ].map((item) => (
            <div key={item.title} className="card-vp p-6">
              <h4 className="font-semibold text-[16px] mb-2">{item.title}</h4>
              <p className="text-[14px] text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}

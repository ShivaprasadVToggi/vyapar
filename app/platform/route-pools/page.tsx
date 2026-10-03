import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { PoolTierUI } from "@/components/ProductVisuals";

export const metadata: Metadata = {
  title: "Route Pools",
  description: "Aggregate demand 48 hours before every scheduled beat. Anonymous ordering, progressive discount tiers, and anti-monopoly caps built in.",
};

const capabilities = [
  "Route Pool opens automatically 48h before scheduled beat",
  "Kiranas commit staple quantities anonymously",
  "Progressive tiers: 40% = 1.5% off, 70% = 2.5% off, 100% = 3.5% off",
  "Anti-monopoly rule: max 35% per merchant per pool",
  "Pool locks at deadline; disbursal triggered instantly",
  "Full audit trail of every commitment and edit",
];

const outcomes = [
  { metric: "48h", label: "Order window per beat" },
  { metric: "3.5%", label: "Max discount unlocked" },
  { metric: "35%", label: "Anti-monopoly cap per buyer" },
  { metric: "100%", label: "Orders anonymized between peers" },
];

export default function RoutePoolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform · Route Pools"
        title="Aggregate the beat. Before the truck rolls."
        subtitle="Turn every scheduled distributor route into a transparent demand pool. Kiranas commit anonymously, tiers unlock progressively, and the 35% anti-monopoly cap keeps the market fair."
        ctaPrimary={{ label: "Request a demo", href: "/get-started" }}
      />

      <Section eyebrow="How it works" title="From open to locked in 48 hours.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Pool opens",
                desc: "48 hours before the distributor's scheduled delivery beat, a Route Pool opens automatically for that route.",
              },
              {
                step: "02",
                title: "Kiranas commit",
                desc: "Retailers commit staple quantities (rice, oil, sugar, pulses). Orders stay anonymous between peers.",
              },
              {
                step: "03",
                title: "Tiers unlock",
                desc: "As the pool fills, discount tiers unlock at 40%, 70%, and 100%. No single merchant can take more than 35%.",
              },
              {
                step: "04",
                title: "Pool locks",
                desc: "At the deadline the pool locks. The NBFC is notified, disbursal is triggered, and the distributor confirms the load.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="font-mono-tabular font-bold text-[var(--vp-brand)] text-sm shrink-0 w-8">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] mb-1">{s.title}</h4>
                  <p className="text-[14.5px] text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-grid rounded-2xl opacity-40 pointer-events-none" />
            <div className="relative">
              <PoolTierUI />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Capabilities" title="Everything a demand pool needs." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
          {capabilities.map((c) => (
            <div key={c} className="flex items-start gap-3 p-4">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--vp-brand)" }} />
              <span className="text-[15px]">{c}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Outcomes" title="What a well-run pool delivers.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {outcomes.map((o) => (
            <div key={o.label} className="text-center">
              <div className="font-mono-tabular font-bold text-4xl text-[var(--vp-brand)]">{o.metric}</div>
              <div className="text-[13px] text-muted mt-2">{o.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <div className="container-vp pb-20">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/platform/closed-loop-disbursal" className="btn-ghost">
            Next: Closed-Loop Disbursal
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <CTABand />
    </>
  );
}

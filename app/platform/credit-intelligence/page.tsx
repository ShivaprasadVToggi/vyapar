import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Brain } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { CreditIntelUI } from "@/components/ProductVisuals";

export const metadata: Metadata = {
  title: "Credit Intelligence",
  description: "Behavioral underwriting from order frequency, fulfilment rate, and UPI sweep velocity. Signals traditional bureaus miss.",
};

const signals = [
  { name: "Order frequency", desc: "How often the merchant participates in Route Pools" },
  { name: "Fulfilment rate", desc: "Consistency of order commitments vs. actual take-up" },
  { name: "UPI sweep velocity", desc: "Stability and predictability of daily sales-based repayments" },
  { name: "Pool participation", desc: "Share of available pools the merchant joins" },
  { name: "Average ticket size", desc: "Order value trends over time vs. peer group" },
  { name: "Early repayment", desc: "Instances of voluntary top-up ahead of Day 14" },
];

export default function CreditIntelligencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform · Credit Intelligence"
        title="Behavioral underwriting nobody else can build."
        subtitle="Traditional credit bureaus see yesterday's loans. VyaparPool sees today's operating behavior: order size, fulfilment frequency, UPI sweep velocity. The result is a credit signal that's fresher, fairer, and far more predictive for semi-urban India."
        ctaPrimary={{ label: "Request a demo", href: "/get-started" }}
      />

      <Section eyebrow="The score" title="A behavioral score, not a bureau report.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="heading-md mb-4">Built on signals only VyaparPool can see.</h3>
            <p className="text-[16px] text-muted leading-relaxed mb-6">
              Every Route Pool participation, every proof-of-delivery confirmation, every daily UPI sweep — these are not just transactions. They are high-frequency behavioral data points that describe how a merchant actually operates.
            </p>
            <p className="text-[16px] text-muted leading-relaxed">
              The VyaparPool behavioral score updates continuously, giving NBFC partners an underwriting input that refreshes with every beat, not every quarter.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-grid rounded-2xl opacity-40 pointer-events-none" />
            <div className="relative"><CreditIntelUI /></div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Signals" title="Six dimensions of merchant behavior." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {signals.map((s) => (
            <div key={s.name} className="card-vp p-5">
              <h4 className="font-semibold text-[15px] mb-1.5">{s.name}</h4>
              <p className="text-[13.5px] text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="For lenders" title="What this means for your book.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Lower default risk", desc: "Behavioral signals are stronger predictors of repayment than static bureau data for thin-file merchants." },
            { title: "Dynamic pricing", desc: "Score tiers enable risk-based pricing. Safer merchants get better rates; riskier ones are priced appropriately." },
            { title: "Fresh data, always", desc: "The score updates with every transaction. No more relying on 6-month-old bureau reports." },
          ].map((item) => (
            <div key={item.title} className="card-vp p-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}>
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-[16px] mb-2">{item.title}</h4>
              <p className="text-[14px] text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="container-vp pb-20 text-center">
        <Link href="/platform/risk-compliance" className="btn-ghost">
          Next: Risk & Compliance
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <CTABand />
    </>
  );
}

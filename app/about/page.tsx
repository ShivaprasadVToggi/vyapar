import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "B2Beat is building the embedded working-capital layer for semi-urban and rural India's kirana economy.",
};

const values = [
  {
    icon: Target,
    title: "Rails-first",
    desc: "We don't rebuild physical infrastructure. We make India's existing distribution, payment, and credit rails work harder through software.",
  },
  {
    icon: Eye,
    title: "Radically transparent",
    desc: "Every participant in the value chain should see exactly what they pay, what they earn, and where the money flows. No hidden spreads, no fine print.",
  },
  {
    icon: Heart,
    title: "Built for the excluded middle",
    desc: "The 12 million kirana stores in semi-urban and rural India deserve modern financial infrastructure. We build for them first.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Working capital infrastructure for the India that's often overlooked."
        subtitle="B2Beat is an asset-light demand-aggregation and embedded working-capital platform. We're a software and credit-orchestration layer on top of existing distributor delivery beats. No warehouses, no trucks, no drop points."
      />

      <Section eyebrow="Mission" title="Make the 2% cash discount reach every kirana.">
        <div className="max-w-3xl mx-auto">
          <p className="text-[18px] leading-relaxed text-muted">
            India's 12 million kirana stores are the backbone of retail. Yet most lose 2–2.5% cash discount on every staple purchase — over ₹1,20,000 a year — simply because they can't put down lump-sum cash. Distributors, meanwhile, carry 20–30 day DSO and recurring bad debt.
          </p>
          <p className="text-[18px] leading-relaxed text-muted mt-5">
            B2Beat fixes both sides of the equation at once. By pooling demand across a route and embedding credit into the flow itself, we unlock savings for retailers, compress DSO for distributors, and create a new closed-loop asset class for lenders.
          </p>
        </div>
      </Section>

      <Section eyebrow="Values" title="What we build by." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="card-vp p-7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-[18px] mb-2">{v.title}</h4>
                <p className="text-[14.5px] text-muted leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="The model" title="How the economics add up.">
        <div className="card-vp p-8 max-w-3xl mx-auto">
          <div className="text-[12px] text-subtle uppercase tracking-wide mb-2">Unit economics · ₹2,00,000 truckload · 15 kiranas</div>
          <div className="font-mono-tabular font-bold text-3xl mb-6" style={{ color: "var(--vp-brand)" }}>
            Total spread 3.5% = ₹7,000
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl" style={{ background: "var(--vp-brand-surface)" }}>
              <div className="text-[12px] text-muted mb-1">Kiranas save</div>
              <div className="font-mono-tabular font-bold text-xl" style={{ color: "var(--vp-brand)" }}>2.1% · ₹4,200</div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "var(--vp-accent-amber-surface)" }}>
              <div className="text-[12px] text-muted mb-1">NBFC earns</div>
              <div className="font-mono-tabular font-bold text-xl" style={{ color: "#8A6A1B" }}>1.0% · ₹2,000</div>
            </div>
            <div className="p-4 rounded-xl bg-[var(--vp-bg-surface)]">
              <div className="text-[12px] text-muted mb-1">B2Beat</div>
              <div className="font-mono-tabular font-bold text-xl">0.4% · ₹800</div>
            </div>
          </div>
          <p className="text-[11px] text-subtle mt-4">
            Illustrative figures. B2Beat revenue = LSP origination fee from NBFC (1.0–1.5% annualized) + distributor SaaS/DSO fee (0.4–0.5%).
          </p>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

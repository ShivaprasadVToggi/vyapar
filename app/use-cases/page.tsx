import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { PersonaCards } from "@/components/PersonaCards";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Use Cases",
  description: "See how VyaparPool works for distributors, lenders, and retail networks across India.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Use Cases"
        title="One platform. Three winning outcomes."
        subtitle="Every participant in the value chain gains something real. Distributors compress DSO. Lenders get a closed-loop book. Retailers unlock cash discounts without upfront capital."
      />

      <Section eyebrow="Pick your role" title="Built for the teams that move India's staples.">
        <PersonaCards />
      </Section>

      <Section eyebrow="The system effect" title="When everyone wins, the system wins." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card-vp p-6">
            <div className="font-mono-tabular font-bold text-3xl mb-2" style={{ color: "var(--vp-brand)" }}>
              25 → 0
            </div>
            <h4 className="font-semibold text-[15px] mb-1">Distributor DSO collapses</h4>
            <p className="text-[13.5px] text-muted">From 25–30 days of waiting to T+0 payment. Working capital released back into the business.</p>
          </div>
          <div className="card-vp p-6">
            <div className="font-mono-tabular font-bold text-3xl mb-2" style={{ color: "var(--vp-brand)" }}>
              ~26%
            </div>
            <h4 className="font-semibold text-[15px] mb-1">Lender yield on closed-loop paper</h4>
            <p className="text-[13.5px] text-muted">14-day cycles, asset-backed, self-repaying via UPI rails. Collection efficiency traditional lending can't touch.</p>
          </div>
          <div className="card-vp p-6">
            <div className="font-mono-tabular font-bold text-3xl mb-2" style={{ color: "var(--vp-brand)" }}>
              ₹1.2L+
            </div>
            <h4 className="font-semibold text-[15px] mb-1">Annual savings per kirana</h4>
            <p className="text-[13.5px] text-muted">The 2–2.5% cash discount that was previously out of reach — captured passively, no lump-sum required.</p>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

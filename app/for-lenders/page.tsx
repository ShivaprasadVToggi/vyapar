import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { CheckCircle2, Landmark, Lock, Zap, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "For Lenders",
  description: "Deploy capital into a closed-loop, self-repaying book at ~26% annualized yield. Asset-backed 14-day paper with collection efficiency traditional lending can't match.",
};

const benefits = [
  { icon: Lock, title: "Truly closed-loop", desc: "Funds move NBFC → distributor. Merchant never touches cash. No diversion risk, no end-use ambiguity." },
  { icon: Zap, title: "Self-repaying by design", desc: "Daily UPI sweeps at the PA nodal account pay down principal before the merchant 'sees' the money. Collection is automatic." },
  { icon: Repeat, title: "14-day cycles · fast turnover", desc: "Capital turns over ~26 times per year. Short tenor means risk is measured in weeks, not months or years." },
  { icon: Landmark, title: "Asset-backed delivery", desc: "Every loan is backed by physical goods confirmed via OTP proof-of-delivery. Pure unsecured lending this is not." },
];

export default function ForLendersPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Teams · Lenders"
        title="A closed-loop, self-repaying book at ~26% annualized."
        subtitle="Deploy into a new asset class where the rails themselves guarantee repayment. UPI sweeps, AutoPay mandates, and asset-backed delivery create a collection efficiency no traditional microfinance book can match."
        ctaPrimary={{ label: "Partner with us", href: "/get-started" }}
      />

      <Section eyebrow="Why this asset class" title="The lending structure you've been waiting for.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="card-vp p-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[17px] mb-2">{b.title}</h4>
                <p className="text-[14.5px] text-muted leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Yield profile" title="Modeled economics on a ₹2,00,000 truckload." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <div className="card-vp p-6 text-center">
            <div className="text-[11px] text-subtle uppercase tracking-wide mb-2">Tenor</div>
            <div className="font-mono-tabular font-bold text-3xl" style={{ color: "var(--vp-brand)" }}>14 days</div>
            <div className="text-[12px] text-muted mt-1">Short-cycle · fast turnover</div>
          </div>
          <div className="card-vp p-6 text-center">
            <div className="text-[11px] text-subtle uppercase tracking-wide mb-2">Fee per cycle</div>
            <div className="font-mono-tabular font-bold text-3xl" style={{ color: "var(--vp-brand)" }}>1.0%</div>
            <div className="text-[12px] text-muted mt-1">On invoice value</div>
          </div>
          <div className="card-vp p-6 text-center">
            <div className="text-[11px] text-subtle uppercase tracking-wide mb-2">Annualized yield</div>
            <div className="font-mono-tabular font-bold text-3xl" style={{ color: "var(--vp-brand)" }}>~26%</div>
            <div className="text-[12px] text-muted mt-1">Modeled · closed-loop</div>
          </div>
        </div>
        <p className="text-center text-[11px] text-subtle mt-6">
          Illustrative figures. Actual yield depends on deployment velocity, loss experience, and operational costs.
        </p>
      </Section>

      <Section eyebrow="Underwriting inputs" title="Data your current systems don't have.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Order frequency per merchant",
            "Fulfilment consistency score",
            "UPI sweep velocity & stability",
            "Pool participation rate",
            "Peer-group benchmarking",
            "Dynamic behavioral score",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 p-3">
              <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--vp-brand)" }} />
              <span className="text-[14px]">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}

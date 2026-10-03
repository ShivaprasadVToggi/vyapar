import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { RepaymentUI } from "@/components/ProductVisuals";

export const metadata: Metadata = {
  title: "Repayment Engine",
  description: "Dual-rail collection: daily UPI micro-sweeps at the PA nodal account, plus UPI AutoPay as the Day-14 safety floor.",
};

const capabilities = [
  "Dual-rail repayment on every 14-day loan",
  "Daily micro-sweep: 15–20% of UPI collections",
  "Split happens at Payment Aggregator nodal account",
  "UPI AutoPay mandate registered on Day 0",
  "AutoPay fires on Day 14 for any remaining balance",
  "Merchant can always top up early via UPI",
  "Full transparency: kirana sees every sweep",
];

export default function RepaymentEnginePage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform · Repayment Engine"
        title="Sweeps and AutoPay, orchestrated."
        subtitle="Two rails guarantee repayment on every 14-day cycle. Daily micro-sweeps take a small slice of UPI sales before the merchant notices. UPI AutoPay guarantees the balance clears on Day 14."
        ctaPrimary={{ label: "Request a demo", href: "/get-started" }}
      />

      <Section eyebrow="Dual-rail design" title="Two collection mechanisms. One guaranteed outcome.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="card-vp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}>
                  <span className="font-mono-tabular font-bold text-sm">01</span>
                </div>
                <h4 className="font-semibold text-[17px]">Daily micro-sweep</h4>
              </div>
              <p className="text-[14.5px] text-muted leading-relaxed mb-3">
                15–20% of daily UPI collections on the merchant's linked QR is split at the Payment Aggregator nodal account to pay down principal. The merchant never feels a lump-sum deduction.
              </p>
              <div className="text-[12px] text-subtle">Rail A · soft, continuous, invisible</div>
            </div>

            <div className="card-vp p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--vp-accent-amber-surface)", color: "#8A6A1B" }}>
                  <span className="font-mono-tabular font-bold text-sm">02</span>
                </div>
                <h4 className="font-semibold text-[17px]">UPI AutoPay · Day 14</h4>
              </div>
              <p className="text-[14.5px] text-muted leading-relaxed mb-3">
                A UPI AutoPay mandate registered on Day 0 fires automatically on Day 14 for any remaining principal. The safety floor that guarantees 100% collection.
              </p>
              <div className="text-[12px] text-subtle">Rail B · hard, guaranteed, once per cycle</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-grid rounded-2xl opacity-40 pointer-events-none" />
            <div className="relative"><RepaymentUI /></div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Why it works" title="Collection efficiency traditional lending can't match." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Split at the source", desc: "Sweeps happen at the PA nodal account — before funds settle into the merchant's wallet. No 'will to pay' problem." },
            { title: "Small daily bites", desc: "15–20% of daily sales is psychologically invisible. The merchant never experiences a large, painful deduction." },
            { title: "Guaranteed floor", desc: "UPI AutoPay is a binding NPCI mandate. If sweeps haven't cleared principal by Day 14, the balance is collected automatically." },
          ].map((item) => (
            <div key={item.title} className="card-vp p-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}>
                <RotateCcw className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-[16px] mb-2">{item.title}</h4>
              <p className="text-[14px] text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Capabilities" title="A complete repayment orchestration layer.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
          {capabilities.map((c) => (
            <div key={c} className="flex items-start gap-3 p-4">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--vp-brand)" }} />
              <span className="text-[15px]">{c}</span>
            </div>
          ))}
        </div>
      </Section>

      <div className="container-vp pb-20 text-center">
        <Link href="/platform/credit-intelligence" className="btn-ghost">
          Next: Credit Intelligence
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <CTABand />
    </>
  );
}

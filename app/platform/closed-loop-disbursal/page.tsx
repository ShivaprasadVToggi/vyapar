import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wallet } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { DisbursalUI } from "@/components/ProductVisuals";

export const metadata: Metadata = {
  title: "Closed-Loop Disbursal",
  description: "Partner NBFC pays 100% of the invoice directly to the distributor within 24 hours. Cash never touches the merchant.",
};

const capabilities = [
  "100% invoice funded by partner NBFC on pool lock",
  "Funds sent directly to distributor — merchant never touches cash",
  "Closed-loop architecture eliminates diversion risk",
  "Distributor passes ~1.0% volume slab + ~2.5% cash discount",
  "SLA: funds disbursed within 24 hours of pool lock",
  "Reconciled automatically against the PA nodal account",
];

export default function ClosedLoopDisbursalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform · Closed-Loop Disbursal"
        title="Pay the distributor. Never the cash."
        subtitle="When a Route Pool locks, a partner NBFC funds the full invoice straight to the distributor. The closed-loop design means cash never diverts — and distributors get paid in 24 hours, not 25 days."
        ctaPrimary={{ label: "Request a demo", href: "/get-started" }}
      />

      <Section eyebrow="The flow" title="From pool lock to funded in hours.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              { step: "01", title: "Pool locks", desc: "Route Pool reaches deadline; final commitments and total invoice value are confirmed." },
              { step: "02", title: "NBFC approves", desc: "Credit decision based on pool structure, distributor history, and behavioral signals from B2Beat." },
              { step: "03", title: "Funds to distributor", desc: "100% of invoice value disbursed directly to the distributor's bank account within 24 hours." },
              { step: "04", title: "Goods in transit", desc: "Distributor loads the truck and delivers on the existing route. Repayment begins after delivery confirmation." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="font-mono-tabular font-bold text-[var(--vp-brand)] text-sm shrink-0 w-8">{s.step}</div>
                <div>
                  <h4 className="font-semibold text-[16px] mb-1">{s.title}</h4>
                  <p className="text-[14.5px] text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-grid rounded-2xl opacity-40 pointer-events-none" />
            <div className="relative"><DisbursalUI /></div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Why closed-loop" title="The diversion risk is designed out." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "No cash in the middle", desc: "Funds move NBFC → distributor. The merchant never receives cash that could be diverted to other uses." },
            { title: "Asset-backed by design", desc: "Every loan is backed by physical goods delivered and confirmed via OTP proof-of-delivery." },
            { title: "Self-repaying", desc: "Daily UPI sweeps at the nodal account mean principal is paid down before the merchant even 'sees' the money." },
          ].map((item) => (
            <div key={item.title} className="card-vp p-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}>
                <Wallet className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-[16px] mb-2">{item.title}</h4>
              <p className="text-[14px] text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Capabilities" title="Built for reconciliation, not spreadsheets.">
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
        <Link href="/platform/proof-of-delivery" className="btn-ghost">
          Next: Proof of Delivery
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <CTABand />
    </>
  );
}

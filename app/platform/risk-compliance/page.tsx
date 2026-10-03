import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Gauge, Shield } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { RiskComplianceUI } from "@/components/ProductVisuals";

export const metadata: Metadata = {
  title: "Risk & Compliance",
  description: "Engineered for RBI's LSP framework, PA nodal accounting, data residency, and immutable audit trails.",
};

const pillars = [
  {
    title: "RBI LSP Framework",
    desc: "VyaparPool operates as a Lending Service Provider. We do not lend directly. All credit is extended by RBI-regulated NBFC partners.",
  },
  {
    title: "PA Nodal Accounting",
    desc: "UPI splits and sweeps happen within the Payment Aggregator's nodal account structure, in compliance with RBI PA guidelines.",
  },
  {
    title: "Data Residency",
    desc: "All merchant and transaction data resides in India. No cross-border transfers of personal or financial data.",
  },
  {
    title: "Immutable Audit Trails",
    desc: "Every pool commitment, disbursal, proof-of-delivery, and sweep event is written to an append-only log.",
  },
  {
    title: "Consent-Driven Mandates",
    desc: "UPI AutoPay mandates are registered only after explicit merchant consent via UPI apps.",
  },
  {
    title: "Fair Practice Code",
    desc: "Transparent pricing, no hidden fees, clear communication of all terms to every participant in the value chain.",
  },
];

export default function RiskCompliancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform · Risk & Compliance"
        title="Built for RBI's LSP framework and PA nodal accounting."
        subtitle="Compliance isn't a feature bolted on at the end. It's how the system was designed from day one. Every flow, every data store, every integration respects the regulatory framework for digital lending in India."
        ctaPrimary={{ label: "Request compliance pack", href: "/get-started" }}
      />

      <Section eyebrow="Posture" title="A compliance system you can show the regulator.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="heading-md mb-4">Engineered for audit, not just operation.</h3>
            <p className="text-[16px] text-muted leading-relaxed mb-6">
              Every module in VyaparPool OS generates an immutable record. Reconstruct any transaction, any mandate, any sweep from first principles. The system is designed to be explainable to auditors, regulators, and your own risk team.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--vp-brand-surface)" }}>
              <Shield className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--vp-brand)" }} />
              <p className="text-[14px]" style={{ color: "var(--vp-brand)" }}>
                <strong>Important:</strong> VyaparPool is a Lending Service Provider and does not lend directly. Credit is extended by RBI-regulated NBFC partners.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-grid rounded-2xl opacity-40 pointer-events-none" />
            <div className="relative"><RiskComplianceUI /></div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Six pillars" title="The compliance foundation." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="card-vp p-5">
              <h4 className="font-semibold text-[15px] mb-1.5">{p.title}</h4>
              <p className="text-[13.5px] text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Trust badges" title="Certifications in progress.">
        <div className="flex flex-wrap gap-3 max-w-2xl">
          {[
            "SOC 2 Type II — in progress",
            "ISO 27001 — in progress",
            "RBI LSP registered",
            "PA nodal compliant",
          ].map((b) => (
            <span key={b} className="px-4 py-2 rounded-full border border-[var(--vp-border)] text-[13px] font-medium text-muted">
              {b}
            </span>
          ))}
        </div>
        <p className="text-[11px] text-subtle mt-4">
          Badges shown as status indicators. Formal certifications will be displayed only when awarded.
        </p>
      </Section>

      <div className="container-vp pb-20 text-center">
        <Link href="/platform" className="btn-ghost">
          Back to Platform overview
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <CTABand />
    </>
  );
}

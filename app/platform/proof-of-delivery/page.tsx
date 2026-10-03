import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { PhoneOTPUI } from "@/components/ProductVisuals";

export const metadata: Metadata = {
  title: "Proof of Delivery",
  description: "OTP-based custody transfer at the kirana counter. Immutable audit trail, zero paperwork, existing trucks only.",
};

const capabilities = [
  "4-digit OTP entered by kirana on driver's device",
  "Custody transfers instantly on confirmation",
  "Works on any smartphone — no app required for kirana",
  "Immutable audit trail with timestamp & geotag",
  "Triggers the repayment sweep automatically",
  "Dispute resolution workflow built in",
];

export default function ProofOfDeliveryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform · Proof of Delivery"
        title="Custody transfers at the counter."
        subtitle="The distributor delivers on its own truck. The kirana inspects goods, enters a 4-digit OTP on the driver's phone, and custody transfers instantly — with an immutable audit trail nobody can argue with."
        ctaPrimary={{ label: "Request a demo", href: "/get-started" }}
      />

      <Section eyebrow="The handoff" title="Paperwork replaced by four digits.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              { step: "01", title: "Truck arrives", desc: "Distributor's truck reaches the kirana store on the scheduled beat. Goods are unloaded for inspection." },
              { step: "02", title: "Kirana inspects", desc: "The retailer checks SKUs, quantities, and condition. No payment changes hands at this stage." },
              { step: "03", title: "4-digit OTP", desc: "Kirana enters the 4-digit OTP sent to their registered mobile number on the driver's phone." },
              { step: "04", title: "Custody transferred", desc: "System confirms OTP, custody transfers instantly, and the repayment engine is armed for daily sweeps." },
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
          <div className="relative flex justify-center">
            <PhoneOTPUI />
          </div>
        </div>
      </Section>

      <Section eyebrow="Why it matters" title="Proof that holds up in every dispute." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Immutable record", desc: "Every confirmation is timestamped, geotagged, and written to an append-only log. Cannot be altered retroactively." },
            { title: "No new hardware", desc: "Works on the driver's existing smartphone. No rugged scanners, no e-POD devices, no capex." },
            { title: "Kirana-friendly", desc: "Retailer doesn't need an app, a login, or even a smartphone. SMS OTP to any phone works." },
          ].map((item) => (
            <div key={item.title} className="card-vp p-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}>
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-[16px] mb-2">{item.title}</h4>
              <p className="text-[14px] text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Capabilities" title="Everything a delivery proof needs.">
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
        <Link href="/platform/repayment-engine" className="btn-ghost">
          Next: Repayment Engine
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <CTABand />
    </>
  );
}

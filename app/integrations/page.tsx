import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { IntegrationsGrid } from "@/components/IntegrationsGrid";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations",
  description: "B2Beat connects to distributor ERPs, NBFC core systems, payment aggregators, and communication rails.",
};

const categories = [
  {
    title: "Payment Rails",
    items: ["UPI", "UPI AutoPay", "Payment Aggregator nodal accounts", "IMPS / NEFT for disbursals"],
  },
  {
    title: "Distributor Systems",
    items: ["Tally ERP", "Busy Accounting", "Custom distributor ERPs via API", "WhatsApp Business for merchant comms"],
  },
  {
    title: "NBFC Core",
    items: ["Loan origination systems", "Core banking platforms", "NPA & provisioning feeds", "Mandate management systems"],
  },
  {
    title: "Verification & Comms",
    items: ["SMS / OTP gateways", "PAN & Aadhaar verification", "GSTIN lookup", "Bank account verification"],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Integrations"
        title="Connects to whoever you work with."
        subtitle="B2Beat is designed to plug into your existing stack — not replace it. REST APIs, webhooks, and pre-built connectors for the systems Indian distributors and NBFCs already run on."
      />

      <Section eyebrow="Ecosystem" title="Built on the rails India trusts.">
        <IntegrationsGrid />
      </Section>

      <Section eyebrow="Categories" title="An integration for every layer of the stack." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((c) => (
            <div key={c.title} className="card-vp p-6">
              <h4 className="font-semibold text-[17px] mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px]">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--vp-brand)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="API-first" title="If we don't have it, we'll build it.">
        <div className="card-vp p-8 max-w-3xl mx-auto text-center">
          <h3 className="heading-md mb-3">Need a custom integration?</h3>
          <p className="text-[16px] text-muted mb-6">
            Our platform is API-first and webhook-native. For enterprise partners, we build dedicated connectors and provide engineering support during onboarding.
          </p>
          <a href="/get-started" className="btn-primary inline-flex">Talk to our integrations team</a>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

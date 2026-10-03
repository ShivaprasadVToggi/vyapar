import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { CheckCircle2, Building2, TrendingDown, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "For Distributors",
  description: "Cut DSO to T+0, eliminate bad debt, and stop chasing collections. B2Beat turns your existing delivery beats into higher-margin routes.",
};

const benefits = [
  { icon: TrendingDown, title: "DSO from 25 days to T+0", desc: "Get paid in full within 24 hours of pool lock. The NBFC funds 100% of the invoice directly to you." },
  { icon: Shield, title: "Zero bad debt, zero collections", desc: "Credit risk sits with the NBFC. You never chase a kirana for payment again. Your sales team sells, your ops team delivers." },
  { icon: Clock, title: "Same trucks, same routes", desc: "No new infrastructure. No warehouses. No drop points. B2Beat is software that rides your existing delivery beats." },
  { icon: Building2, title: "Higher capacity utilization", desc: "Pooled demand means fuller trucks on every beat. Better asset utilization on the fleet you already own." },
];

export default function ForDistributorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Teams · Distributors"
        title="Stop waiting 25 days to get paid."
        subtitle="B2Beat turns your existing delivery routes into pooled, pre-financed orders. You deliver the same goods on the same trucks. The difference: you get paid in 24 hours, not 25 days."
        ctaPrimary={{ label: "Request a pilot", href: "/get-started" }}
      />

      <Section eyebrow="What changes" title="Everything that hurts today — fixed.">
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

      <Section eyebrow="Unit economics" title="A ₹2,00,000 truckload, reimagined." className="bg-[var(--vp-bg-soft)]">
        <div className="card-vp p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-[12px] text-subtle uppercase tracking-wide mb-3">Before B2Beat</div>
              <ul className="space-y-3 text-[14.5px] text-muted">
                <li className="flex items-start gap-2"><span className="text-[var(--vp-critical)]">✗</span> 25–30 day DSO</li>
                <li className="flex items-start gap-2"><span className="text-[var(--vp-critical)]">✗</span> 2–3% bad debt annually</li>
                <li className="flex items-start gap-2"><span className="text-[var(--vp-critical)]">✗</span> Costly cash-collection beats</li>
                <li className="flex items-start gap-2"><span className="text-[var(--vp-critical)]">✗</span> Working capital locked in receivables</li>
              </ul>
            </div>
            <div>
              <div className="text-[12px] uppercase tracking-wide mb-3" style={{ color: "var(--vp-brand)" }}>With B2Beat</div>
              <ul className="space-y-3 text-[14.5px]">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--vp-brand)" }} /> T+0 payment (funded within 24h)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--vp-brand)" }} /> Zero credit risk to you</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--vp-brand)" }} /> No collection cost</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--vp-brand)" }} /> Capital freed for inventory & growth</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

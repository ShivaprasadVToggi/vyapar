import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { CheckCircle2, Store, Wallet, TrendingUp, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "For Retailers",
  description: "Buy staples ~2.1% cheaper with zero upfront capital. Daily UPI sweeps make repayment automatic and painless.",
};

const benefits = [
  { icon: TrendingUp, title: "Capture the cash discount", desc: "Unlock ~2.1% savings on every truckload of staples — the same discount that was previously only available to buyers who can pay lump-sum cash." },
  { icon: Wallet, title: "Zero upfront capital", desc: "You don't put down cash. The NBFC funds the invoice. You receive goods first, then repay gradually from daily sales." },
  { icon: Shield, title: "Repayment is automatic", desc: "15–20% of daily UPI sales sweeps toward principal. You never write a cheque, never miss a due date, never feel a big deduction." },
  { icon: Store, title: "More working capital for your shop", desc: "Cash that would have been tied up in bulk inventory payments stays in your business — for fast-moving SKUs, credit to regulars, or expansion.",
  },
];

export default function ForRetailersPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Teams · Retailers"
        title="Buy cheaper. Zero cash upfront."
        subtitle="B2Beat lets kirana stores capture the 2–2.5% cash discount on staples without putting down lump-sum capital. Goods arrive first. Repayment happens automatically from daily UPI sales."
        ctaPrimary={{ label: "Talk to your distributor", href: "/get-started" }}
      />

      <Section eyebrow="The math" title="Over ₹1,20,000 a year left on the table.">
        <div className="card-vp p-8 max-w-2xl mx-auto text-center">
          <div className="text-[12px] text-subtle uppercase tracking-wide mb-2">
            What the average kirana loses annually
          </div>
          <div className="font-mono-tabular font-bold text-5xl md:text-6xl mb-3" style={{ color: "var(--vp-critical)" }}>
            ₹1,20,000+
          </div>
          <p className="text-[15px] text-muted max-w-lg mx-auto">
            Most semi-urban kiranas never capture the 2–2.5% cash discount because they can't afford the lump-sum payment. B2Beat fixes that.
          </p>
        </div>
      </Section>

      <Section eyebrow="What you get" title="A simpler way to buy staples." className="bg-[var(--vp-bg-soft)]">
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

      <Section eyebrow="How to join" title="Ask your distributor about B2Beat.">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[17px] text-muted leading-relaxed mb-6">
            B2Beat reaches kiranas through their existing distributors. If your distributor is on the platform, you can start participating in Route Pools immediately. If not, tell them about us — we'll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/get-started" className="btn-primary">Refer your distributor</a>
            <a href="#" className="btn-secondary">Download retailer brochure</a>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

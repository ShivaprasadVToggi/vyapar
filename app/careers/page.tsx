import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join B2Beat and build the embedded working-capital layer for semi-urban and rural India.",
};

const roles = [
  {
    title: "Senior Backend Engineer",
    team: "Engineering",
    location: "Bengaluru · Hybrid",
    type: "Full-time",
    desc: "Design and build the core pooling, disbursal, and repayment engines. Strong TypeScript, distributed systems, and fintech API experience.",
  },
  {
    title: "Product Manager — Lending",
    team: "Product",
    location: "Bengaluru · Hybrid",
    type: "Full-time",
    desc: "Own the credit product from underwriting inputs to repayment outcomes. Work with NBFC partners and our behavioral data science team.",
  },
  {
    title: "Field Operations Lead — Gujarat",
    team: "Operations",
    location: "Ahmedabad · On-field",
    type: "Full-time",
    desc: "Onboard distributors and kirana networks across Gujarat. Translate ground reality into product requirements. First principles operator.",
  },
  {
    title: "Credit Risk Analyst",
    team: "Risk",
    location: "Bengaluru · Hybrid",
    type: "Full-time",
    desc: "Model portfolio risk on a new closed-loop asset class. Build early-warning indicators from B2Beat's unique behavioral signals.",
  },
  {
    title: "Senior Frontend Engineer",
    team: "Engineering",
    location: "Bengaluru · Hybrid",
    type: "Full-time",
    desc: "Build the B2Beat OS used by distributors, NBFC ops teams, and our field force. Next.js, TypeScript, design systems.",
  },
  {
    title: "NBFC Partnerships",
    team: "Business",
    location: "Mumbai / Bengaluru",
    type: "Full-time",
    desc: "Structure partnerships with RBI-regulated NBFCs. Own the capital-side of the marketplace. Credit background and existing relationships a strong plus.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build financial infrastructure for the India that matters."
        subtitle="We're a small, senior team building something genuinely new. If you want to ship product that moves real money for real merchants in semi-urban and rural India, we'd love to talk."
        ctaPrimary={{ label: "See open roles", href: "#roles" }}
      />

      <Section eyebrow="Why B2Beat" title="A small team. A large problem. Real leverage.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Real-world impact", desc: "The product you build directly improves the economics of kirana stores and distributors across India." },
            { title: "Hard, interesting problems", desc: "Marketplace design, behavioral underwriting, closed-loop money flows, RBI compliance — pick your hard problem." },
            { title: "Founder-led, senior team", desc: "Work directly with founders. Short decision loops. High trust. Minimal process. Maximum leverage." },
          ].map((item) => (
            <div key={item.title} className="card-vp p-6">
              <h4 className="font-semibold text-[16px] mb-2">{item.title}</h4>
              <p className="text-[14px] text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="roles" eyebrow="Open roles" title="Come build with us." className="bg-[var(--vp-bg-soft)]">
        <div className="space-y-3 max-w-4xl mx-auto">
          {roles.map((r) => (
            <a key={r.title} href="#" className="card-vp p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
              <div>
                <h4 className="font-semibold text-[17px] mb-1 group-hover:text-[var(--vp-brand)] transition-colors">{r.title}</h4>
                <div className="flex flex-wrap items-center gap-3 text-[12.5px] text-muted mb-2">
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{r.team}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{r.location}</span>
                  <span>{r.type}</span>
                </div>
                <p className="text-[14px] text-muted leading-relaxed max-w-2xl">{r.desc}</p>
              </div>
              <span className="btn-ghost shrink-0 self-start md:self-center">
                Apply
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
        <p className="text-center text-[13px] text-muted mt-8">
          Don't see a role that fits? Email us at careers@vyaparpool.com — we're always looking for exceptional people.
        </p>
      </Section>

      <CTABand />
    </>
  );
}

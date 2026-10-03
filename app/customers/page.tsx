import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { CaseCard } from "@/components/CaseCard";

export const metadata: Metadata = {
  title: "Customers",
  description: "See how distributors, lenders, and retail networks are using B2Beat to transform working capital in semi-urban and rural India.",
};

const cases = [
  {
    tag: "PILOT · GUJARAT",
    title: "North Gujarat distributor cuts DSO by 92%",
    description: "A leading staples distributor deployed Route Pools on three core beats, moving from 25-day DSO to T+0 payments across 87 kiranas. Collection costs eliminated entirely.",
    metric: "92%",
    metricLabel: "DSO reduction",
  },
  {
    tag: "PILOT · MAHARASHTRA",
    title: "NBFC partner deploys ₹4.2Cr in 90 days",
    description: "Closed-loop 14-day paper with zero diversion observed and 100% collection via UPI sweeps and AutoPay mandates. Fastest-growing new asset class in their book.",
    metric: "~26%",
    metricLabel: "Annualized yield",
  },
  {
    tag: "PILOT · RAJASTHAN",
    title: "120 kiranas unlock cash discount passively",
    description: "Retailers in tier-3 and tier-4 towns capture the full 2.1% savings without putting down lump-sum capital. Average annual savings estimated at ₹1.1 lakh per store.",
    metric: "₹1.1L",
    metricLabel: "Avg. annual savings",
  },
  {
    tag: "PILOT · MADHYA PRADESH",
    title: "Regional distributor expands reach without capex",
    description: "By pooling demand across 5 routes, a regional distributor was able to serve 40+ new kiranas that were previously uneconomical to deliver to individually.",
    metric: "+40",
    metricLabel: "New retailers served",
  },
  {
    tag: "PILOT · TELANGANA",
    title: "Sweep-based repayment hits 94% auto-clearance",
    description: "On a book of 180 active 14-day loans, 94% of principal was cleared via daily UPI sweeps before Day 14. AutoPay fired only for the small remaining balance.",
    metric: "94%",
    metricLabel: "Swept before Day 14",
  },
  {
    tag: "PILOT · KARNATAKA",
    title: "Co-operative lender enters merchant lending",
    description: "A district co-operative bank used B2Beat's rail to deploy into merchant working capital for the first time — no new branches, no new collection staff.",
    metric: "0",
    metricLabel: "New field staff hired",
  },
];

export default function CustomersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Customers"
        title="Pilots proving the model across India."
        subtitle="Early deployments with distributors and NBFC partners are validating the B2Beat model in real markets. Full case studies coming as pilots mature."
      />

      <Section eyebrow="Pilot stories" title="What we're seeing in the field.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
        <p className="text-center text-[11px] text-subtle mt-8">
          PLACEHOLDER · All figures based on model projections and early pilot data. To be replaced with verified, attributable customer case studies.
        </p>
      </Section>

      <Section eyebrow="Become a case study" title="Running a pilot with us?" className="bg-[var(--vp-bg-soft)]">
        <div className="card-vp p-8 max-w-2xl mx-auto text-center">
          <h3 className="heading-md mb-3">We'd love to tell your story.</h3>
          <p className="text-[16px] text-muted mb-6">
            If you're a distributor or NBFC partner and interested in being featured, reach out to our marketing team. We'll work with you on a narrative that respects your commercial sensitivities.
          </p>
          <a href="/get-started" className="btn-primary inline-flex">Get in touch</a>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

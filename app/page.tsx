import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { LogoStrip } from "@/components/LogoStrip";
import { FeatureRow } from "@/components/FeatureRow";
import { ModuleTabs } from "@/components/ModuleTabs";
import { SpreadCalculator } from "@/components/SpreadCalculator";
import { PersonaCards } from "@/components/PersonaCards";
import { OutcomesStrip } from "@/components/OutcomesStrip";
import { CaseCard, DeveloperCard } from "@/components/CaseCard";
import { IntegrationsGrid } from "@/components/IntegrationsGrid";
import { InsightsRow } from "@/components/InsightsRow";
import { CTABand } from "@/components/CTABand";
import {
  RoutePoolCard,
  DisbursalTimeline,
  PoolTierUI,
  DisbursalUI,
  PhoneOTPUI,
  RepaymentUI,
} from "@/components/ProductVisuals";

export default function HomePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-40"
            style={{ background: "var(--vp-brand-surface)", filter: "blur(80px)" }}
          />
        </div>

        <div className="container-vp relative">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--vp-brand-border)] bg-[var(--vp-brand-surface)] text-[var(--vp-brand)] text-[12px] font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--vp-brand)] animate-pulse" />
              Asset-light · Zero warehouses · Zero trucks
            </div>
            <h1 className="heading-xl mb-5">
              Working capital, delivered
              <br />
              <span style={{ color: "var(--vp-brand)" }}>with every beat.</span>
            </h1>
            <p className="text-[19px] text-muted leading-relaxed max-w-2xl mx-auto mb-8">
              B2Beat turns distributor delivery routes into pooled, pre-financed orders.
              Distributors get paid in 24 hours. Kiranas buy ~2.1% cheaper with zero upfront cash.
              Lenders get a closed-loop, self-repaying book.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/get-started" className="btn-primary">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/platform" className="btn-secondary">
                Explore the Platform
              </Link>
            </div>
          </div>

          {/* Hero product visual */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <RoutePoolCard />
            </div>
            <div>
              <DisbursalTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* ============== LOGO STRIP ============== */}
      <LogoStrip />

      {/* ============== VYAPARPOOL CORE ============== */}
      <Section
        eyebrow="B2Beat Core"
        title="A pooling engine. And so much more."
        subtitle="Four tightly-integrated capabilities that turn a distributor's existing delivery beat into a financed, risk-controlled flow."
      >
        <FeatureRow
          features={[
            {
              title: "Pool demand without friction.",
              description:
                "Open a Route Pool 48 hours before every beat. Orders stay anonymous between peers, discount tiers unlock progressively, and an anti-monopoly rule ensures no single buyer can take more than 35% of any pool.",
              visual: <PoolTierUI />,
            },
            {
              title: "Get paid in 24 hours.",
              description:
                "When the pool locks, a partner NBFC funds 100% of the invoice straight to the distributor. Closed-loop architecture means the merchant never touches cash. Zero credit risk, zero collection chasing.",
              visual: <DisbursalUI />,
            },
            {
              title: "Deliver with proof, not paperwork.",
              description:
                "Doorstep delivery on the distributor's own truck. The kirana inspects goods and confirms with a 4-digit OTP on the driver's phone; custody transfers instantly with an immutable audit trail.",
              visual: <PhoneOTPUI />,
            },
            {
              title: "Repay as sales happen.",
              description:
                "15–20% of daily UPI collections sweeps automatically at the Payment Aggregator nodal account to pay down principal. UPI AutoPay on Day 14 acts as the guaranteed safety floor for any remaining balance.",
              visual: <RepaymentUI />,
            },
          ]}
        />
      </Section>

      {/* ============== B2BEAT OS ============== */}
      <Section
        eyebrow="B2Beat OS"
        title="One home for pooling, financing, and collecting. At any scale."
        subtitle="Six modules. One operating system. Pick what you need, or run the full stack end-to-end."
        className="bg-[var(--vp-bg-soft)]"
      >
        <ModuleTabs />
      </Section>

      {/* ============== SPREAD CALCULATOR ============== */}
      <Section
        eyebrow="Unit Economics"
        title="See where the 3.5% goes."
        subtitle="A transparent, three-way split that works for every participant in the value chain. Model a truckload live."
      >
        <SpreadCalculator />
      </Section>

      {/* ============== USE CASES ============== */}
      <Section
        eyebrow="Use Cases"
        title="Embed modern working capital — whether you're a distributor, a lender, or a retail network."
        className="bg-[var(--vp-bg-soft)]"
      >
        <PersonaCards />
        <div className="mt-10 text-center">
          <Link href="/use-cases" className="btn-ghost">
            Explore use cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* ============== OUTCOMES STRIP ============== */}
      <OutcomesStrip />

      {/* ============== CUSTOMERS ============== */}
      <Section
        eyebrow="Customers"
        title="Trusted by modern distribution teams."
        subtitle="Early pilots are demonstrating the model in real markets across Western India."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <CaseCard
            tag="PILOT · GUJARAT"
            title="North Gujarat distributor cuts DSO by 92%"
            description="A leading staples distributor deployed Route Pools on three core beats, moving from 25-day DSO to T+0 payments across 87 kiranas."
            metric="92%"
            metricLabel="DSO reduction"
          />
          <CaseCard
            tag="PILOT · MAHARASHTRA"
            title="NBFC partner deploys ₹4.2Cr in 90 days"
            description="Closed-loop 14-day paper with zero diversion and 100% collection via UPI sweeps and AutoPay mandates."
            metric="~26%"
            metricLabel="Annualized yield"
          />
          <CaseCard
            tag="PILOT · RAJASTHAN"
            title="120 kiranas unlock cash discount passively"
            description="Retailers in tier-3 and tier-4 towns capture the full 2.1% savings without putting down lump-sum capital."
            metric="₹1.1L"
            metricLabel="Avg. annual savings"
          />
          <DeveloperCard />
        </div>
        <p className="text-center text-[11px] text-subtle mt-6">
          PLACEHOLDER · Pilot stories based on model projections; to be replaced with verified customer outcomes.
        </p>
      </Section>

      {/* ============== INTEGRATIONS ============== */}
      <Section
        eyebrow="Integrations"
        title="Distributor ERPs. NBFCs. Payment aggregators. Whoever you work with, B2Beat connects."
        className="bg-[var(--vp-bg-soft)]"
      >
        <IntegrationsGrid />
      </Section>

      {/* ============== INSIGHTS ============== */}
      <Section
        eyebrow="Learn more"
        title="Next-gen rural commerce finance."
        subtitle="Field notes, frameworks, and data from the front lines of embedded working capital."
      >
        <InsightsRow />
      </Section>

      {/* ============== CTA BAND ============== */}
      <CTABand />
    </>
  );
}

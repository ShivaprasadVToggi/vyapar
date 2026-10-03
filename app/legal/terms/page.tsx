import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for VyaparPool Technologies.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: October 2026"
      />
      <section className="pb-24">
        <div className="container-vp">
          <div className="max-w-3xl mx-auto prose prose-vp space-y-6 text-[15px] leading-relaxed text-muted">
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2 not-prose">1. Acceptance of Terms</h3>
              <p>By accessing or using VyaparPool's platform, website, and services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Services.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2 not-prose">2. Description of Services</h3>
              <p>VyaparPool operates as a Lending Service Provider (LSP) technology platform. We provide demand aggregation, credit orchestration, and repayment infrastructure. VyaparPool does not lend directly. All credit is extended by RBI-regulated NBFC partners.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2 not-prose">3. User Accounts</h3>
              <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate, current information and notify us of unauthorized use.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2 not-prose">4. Eligibility</h3>
              <p>Services are available only to legal entities and individuals who can form legally binding contracts under Indian law. Distributors, NBFCs, and retailers must meet our onboarding and KYC requirements.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2 not-prose">5. Fees & Payments</h3>
              <p>Fees for VyaparPool's services are as agreed in separate commercial agreements between VyaparPool and its partners (distributors, NBFCs). Retail participants do not pay platform fees directly.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2 not-prose">6. Intellectual Property</h3>
              <p>All content, software, trademarks, and other intellectual property in the Services are owned by VyaparPool Technologies or its licensors. You receive a limited, non-exclusive right to use the Services as intended.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2 not-prose">7. Limitation of Liability</h3>
              <p>To the fullest extent permitted by law, VyaparPool shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2 not-prose">8. Governing Law</h3>
              <p>These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2 not-prose">9. Contact</h3>
              <p>For questions about these Terms, contact legal@vyaparpool.com.</p>
            </div>
            <p className="text-[12px] text-subtle pt-4 border-t border-[var(--vp-border)]">
              PLACEHOLDER · These terms are a draft template and must be reviewed and finalized by legal counsel before production use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

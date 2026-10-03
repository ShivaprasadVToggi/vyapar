import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for B2Beat Technologies.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: October 2026"
      />
      <section className="pb-24">
        <div className="container-vp">
          <div className="max-w-3xl mx-auto space-y-6 text-[15px] leading-relaxed text-muted">
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">1. Information We Collect</h3>
              <p>We collect information you provide (name, email, company, KYC documents), transaction data (pool commitments, orders, disbursals, repayments), device data, and usage data on our platform.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">2. How We Use Information</h3>
              <p>To provide and operate the Services, to underwrite and facilitate credit via our NBFC partners, to comply with legal and regulatory obligations (including RBI LSP framework), to improve our product, and to communicate with you.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">3. Data Sharing</h3>
              <p>We share data only with: (a) RBI-regulated NBFC partners for the purpose of credit facilitation, (b) Payment Aggregators for transaction processing, (c) service providers under contract, (d) regulators and law enforcement as required by law. We never sell personal data.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">4. Data Residency</h3>
              <p>All personal and financial data resides in India. No cross-border transfers of personal data are made without appropriate safeguards and legal approval.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">5. Security</h3>
              <p>We implement industry-standard administrative, technical, and physical safeguards including encryption in transit (TLS 1.3) and at rest, access controls, and regular security audits.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">6. Your Rights</h3>
              <p>You may have rights to access, correct, or delete your personal data, subject to applicable law and our legitimate business and compliance obligations. Contact privacy@vyaparpool.com to exercise these rights.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">7. Data Retention</h3>
              <p>We retain data as long as necessary to provide the Services, meet legal and regulatory obligations, resolve disputes, and enforce agreements.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">8. Grievance Officer</h3>
              <p>For privacy concerns, contact our Grievance Officer at privacy@vyaparpool.com. We acknowledge and respond to complaints within the timelines required by applicable law.</p>
            </div>
            <p className="text-[12px] text-subtle pt-4 border-t border-[var(--vp-border)]">
              PLACEHOLDER · This privacy policy is a draft template and must be reviewed and finalized by legal counsel before production use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

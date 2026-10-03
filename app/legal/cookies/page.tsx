import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for B2Beat Technologies.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="Last updated: October 2026"
      />
      <section className="pb-24">
        <div className="container-vp">
          <div className="max-w-3xl mx-auto space-y-6 text-[15px] leading-relaxed text-muted">
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">What are cookies</h3>
              <p>Cookies are small text files stored on your device when you visit a website. They help the website remember information about your visit and improve your experience.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">Types of cookies we use</h3>
              <ul className="space-y-3 list-disc pl-5">
                <li><strong className="text-[var(--vp-fg)]">Essential cookies:</strong> Required for the website to function. Cannot be disabled.</li>
                <li><strong className="text-[var(--vp-fg)]">Functional cookies:</strong> Remember preferences and settings to improve your experience.</li>
                <li><strong className="text-[var(--vp-fg)]">Analytics cookies:</strong> Help us understand how visitors use the website so we can improve it.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">Managing cookies</h3>
              <p>You can control and/or delete cookies through your browser settings. Note that disabling cookies may affect the functionality of this website.</p>
            </div>
            <div>
              <h3 className="text-[var(--vp-fg)] font-semibold text-[18px] mb-2">Contact</h3>
              <p>For questions about our cookie practices, contact privacy@vyaparpool.com.</p>
            </div>
            <p className="text-[12px] text-subtle pt-4 border-t border-[var(--vp-border)]">
              PLACEHOLDER · This cookie policy is a draft template and must be reviewed and finalized by legal counsel before production use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

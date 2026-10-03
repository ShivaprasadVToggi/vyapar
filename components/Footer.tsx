import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Route Pools", href: "/platform/route-pools" },
      { label: "Closed-Loop Disbursal", href: "/platform/closed-loop-disbursal" },
      { label: "Proof of Delivery", href: "/platform/proof-of-delivery" },
      { label: "Repayment Engine", href: "/platform/repayment-engine" },
      { label: "Credit Intelligence", href: "/platform/credit-intelligence" },
      { label: "Risk & Compliance", href: "/platform/risk-compliance" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Overview", href: "/use-cases" },
      { label: "Distributors", href: "/for-distributors" },
      { label: "Lenders", href: "/for-lenders" },
      { label: "Retail Networks", href: "/for-retailers" },
    ],
  },
  {
    title: "For Teams",
    links: [
      { label: "Distributors", href: "/for-distributors" },
      { label: "Lenders", href: "/for-lenders" },
      { label: "Retailers", href: "/for-retailers" },
      { label: "Risk Teams", href: "/platform/risk-compliance" },
      { label: "Finance & Ops", href: "/platform/closed-loop-disbursal" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Docs", href: "/developers" },
      { label: "System Status", href: "#" },
      { label: "Compliance & Trust", href: "/platform/risk-compliance" },
      { label: "Release Notes", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Customers", href: "/customers" },
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--vp-fg)] text-[var(--vp-fg-inverse)] mt-auto">
      <div className="container-vp py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-[14px] mb-4 opacity-90">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "var(--vp-brand)" }}
            >
              B2
            </span>
            <div>
              <div className="font-semibold">B2Beat Technologies</div>
              <div className="text-[12px] opacity-50 mt-0.5 max-w-md">
                B2Beat is a Lending Service Provider and does not lend directly.
                Credit is extended by RBI-regulated NBFC partners.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="opacity-60 hover:opacity-100 transition-opacity">
              <Twitter className="w-[18px] h-[18px]" />
            </a>
            <a href="#" aria-label="LinkedIn" className="opacity-60 hover:opacity-100 transition-opacity">
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <a href="#" aria-label="GitHub" className="opacity-60 hover:opacity-100 transition-opacity">
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a href="#" aria-label="YouTube" className="opacity-60 hover:opacity-100 transition-opacity">
              <Youtube className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center gap-3 text-[12px] opacity-50">
          <span className="px-3 py-1.5 border border-white/15 rounded-full">
            SOC 2 — PLACEHOLDER / in progress
          </span>
          <span className="px-3 py-1.5 border border-white/15 rounded-full">
            ISO 27001 — PLACEHOLDER / in progress
          </span>
          <span className="px-3 py-1.5 border border-white/15 rounded-full">
            RBI LSP Framework
          </span>
          <span className="px-3 py-1.5 border border-white/15 rounded-full">
            PA Nodal Compliant
          </span>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] opacity-50">
          <div>© {new Date().getFullYear()} B2Beat Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link href="/legal/terms" className="hover:opacity-100 transition-opacity">Terms</Link>
            <Link href="/legal/privacy" className="hover:opacity-100 transition-opacity">Privacy</Link>
            <Link href="/legal/cookies" className="hover:opacity-100 transition-opacity">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

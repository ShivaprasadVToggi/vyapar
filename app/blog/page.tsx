import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { InsightsRow } from "@/components/InsightsRow";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Field notes, frameworks, and data from the front lines of embedded working capital in semi-urban and rural India.",
};

const featured = {
  category: "Working Capital",
  title: "The cash-discount trap: why kiranas lose ₹1.2 lakh a year",
  excerpt:
    "Most semi-urban kiranas never capture the 2–2.5% cash discount distributors offer. The lump-sum cash requirement is the bottleneck — and it's solvable with embedded credit and demand pooling.",
  readTime: "6 min read",
  date: "March 2026",
  gradient: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
};

const moreArticles = [
  {
    category: "Distribution",
    title: "From 30-day DSO to T+0: the distributor's playbook",
    excerpt: "How demand aggregation and embedded credit are rewriting the economics of FMCG distribution in tier-3 and tier-4 India. A practical framework.",
    readTime: "8 min read",
    date: "February 2026",
  },
  {
    category: "Lending",
    title: "Closed-loop paper: why structure beats credit score",
    excerpt: "When the repayment mechanism is baked into the money flow itself, underwriting changes. What traditional lenders can learn from B2Beat's dual-rail design.",
    readTime: "7 min read",
    date: "February 2026",
  },
  {
    category: "Policy",
    title: "RBI's LSP framework: a builder's reading guide",
    excerpt: "The digital lending guidelines and LSP regulations create both constraints and greenfield opportunity. Here's what we're building against.",
    readTime: "10 min read",
    date: "January 2026",
  },
  {
    category: "Operations",
    title: "Zero-asset logistics: software on existing rails",
    excerpt: "Why we deliberately chose not to own warehouses, trucks, or drop points — and how that decision changes the unit economics of last-mile commerce finance.",
    readTime: "5 min read",
    date: "January 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Field notes from rural commerce finance."
        subtitle="Frameworks, data, and honest takes on building embedded working capital for the India that doesn't make the fintech headlines."
      />

      {/* Featured */}
      <section className="pb-16">
        <div className="container-vp">
          <div className="eyebrow mb-4">Featured</div>
          <a href="#" className="card-vp overflow-hidden grid grid-cols-1 lg:grid-cols-2 group">
            <div
              className="aspect-[16/10] lg:aspect-auto relative"
              style={{ background: featured.gradient }}
            >
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur text-[11px] font-semibold text-[var(--vp-brand)] uppercase tracking-wide">
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[12px] text-subtle mb-3">
                <span>{featured.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="heading-md mb-3 group-hover:text-[var(--vp-brand)] transition-colors">
                {featured.title}
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-5">{featured.excerpt}</p>
              <span className="btn-ghost self-start">
                Read article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>
        </div>
      </section>

      <Section eyebrow="Latest" title="More from the blog." className="bg-[var(--vp-bg-soft)] pt-16">
        <InsightsRow />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {moreArticles.map((a) => (
            <a key={a.title} href="#" className="card-vp p-6 group">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-full text-[11px] font-medium uppercase tracking-wide" style={{ background: "var(--vp-bg-surface)", color: "var(--vp-fg-muted)" }}>
                  {a.category}
                </span>
                <span className="text-[12px] text-subtle">{a.date}</span>
              </div>
              <h3 className="font-semibold text-[17px] leading-snug mb-2 tracking-tight group-hover:text-[var(--vp-brand)] transition-colors">
                {a.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed mb-4">{a.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[12px] text-subtle">
                  <Clock className="w-3.5 h-3.5" />
                  {a.readTime}
                </span>
                <span className="btn-ghost text-[13px]">
                  Read
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}

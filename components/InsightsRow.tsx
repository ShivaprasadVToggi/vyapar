import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    category: "Working Capital",
    title: "The cash-discount trap: why kiranas lose ₹1.2 lakh a year",
    excerpt:
      "Most semi-urban kiranas never capture the 2–2.5% cash discount distributors offer. The lump-sum cash requirement is the bottleneck — and it's solvable.",
    readTime: "6 min read",
    href: "/blog",
    gradient: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
  },
  {
    category: "Distribution",
    title: "From 30-day DSO to T+0: the distributor's playbook",
    excerpt:
      "How demand aggregation and embedded credit are rewriting the economics of FMCG distribution in tier-3 and tier-4 India. A practical framework.",
    readTime: "8 min read",
    href: "/blog",
    gradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
  },
];

export function InsightsRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {articles.map((a) => (
        <Link
          key={a.title}
          href={a.href}
          className="card-vp overflow-hidden flex flex-col group"
        >
          <div
            className="aspect-[16/9] relative"
            style={{ background: a.gradient }}
          >
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur text-[11px] font-semibold text-[var(--vp-fg-muted)] uppercase tracking-wide">
                {a.category}
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="font-semibold text-[18px] leading-snug mb-2 tracking-tight group-hover:text-[var(--vp-brand)] transition-colors">
              {a.title}
            </h3>
            <p className="text-[14.5px] text-muted leading-relaxed mb-5 flex-1">
              {a.excerpt}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-[var(--vp-border)]">
              <span className="flex items-center gap-1.5 text-[12px] text-subtle">
                <Clock className="w-3.5 h-3.5" />
                {a.readTime}
              </span>
              <span className="btn-ghost text-[13px]">
                Read
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

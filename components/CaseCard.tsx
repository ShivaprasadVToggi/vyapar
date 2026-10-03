import Link from "next/link";
import { ArrowRight, Code2, BookOpen } from "lucide-react";

interface CaseCardProps {
  tag: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export function CaseCard({ tag, title, description, metric, metricLabel }: CaseCardProps) {
  return (
    <div className="card-vp overflow-hidden flex flex-col group">
      {/* Placeholder image block */}
      <div
        className="aspect-[16/10] relative"
        style={{
          background:
            "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 50%, #F4F4F5 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white/70 backdrop-blur text-[11px] font-medium text-[var(--vp-fg-muted)] uppercase tracking-wide mb-3">
              Placeholder
            </div>
            <div className="text-[13px] text-[var(--vp-fg-muted)] font-medium">
              TODO: replace with real photography
            </div>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-semibold text-[var(--vp-brand)]">
            {tag}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-[17px] leading-snug mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-[14px] text-muted leading-relaxed mb-5 flex-1">
          {description}
        </p>

        <div className="pt-5 border-t border-[var(--vp-border)] flex items-end justify-between">
          <div>
            <div className="font-mono-tabular font-bold text-2xl text-[var(--vp-brand)]">
              {metric}
            </div>
            <div className="text-[12px] text-muted mt-0.5">{metricLabel}</div>
          </div>
          <Link href="/customers" className="btn-ghost text-[13px]">
            Read
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function DeveloperCard() {
  return (
    <div className="rounded-2xl p-7 flex flex-col text-white relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: "var(--vp-brand)", filter: "blur(60px)" }} />

      <div className="relative">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <Code2 className="w-5 h-5" />
        </div>

        <h3 className="font-semibold text-[18px] leading-snug mb-2 tracking-tight">
          Create flexible lending products. With less work.
        </h3>
        <p className="text-[14px] text-white/60 leading-relaxed mb-5">
          Purpose-built for developers, our low-code API lets you launch fast and scale with ease.
        </p>

        {/* Code snippet */}
        <div className="rounded-xl bg-black/40 border border-white/10 p-4 mb-5 overflow-x-auto">
          <pre className="text-[12px] leading-relaxed font-mono-tabular text-white/80">
{`// Create a route pool
const pool = await vyapar.pools.create({
  routeId: "RT-NORTH-01",
  scheduledAt: "2026-03-15T06:00:00Z",
  categories: ["staples"],
});

// Lock & trigger disbursal webhook
await vyapar.pools.lock(pool.id);`}
          </pre>
        </div>

        <Link href="/developers" className="inline-flex items-center gap-2 font-medium text-[14px] hover:gap-3 transition-all">
          <BookOpen className="w-4 h-4" />
          Read the docs
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

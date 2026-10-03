import Link from "next/link";
import { Building2, Landmark, Store, ArrowRight } from "lucide-react";

const personas = [
  {
    icon: Building2,
    title: "For Distributors",
    promise: "Cut DSO to T+0, eliminate bad debt.",
    description:
      "Get paid in 24 hours on every truckload. Stop chasing collections. Turn your existing delivery beats into a higher-margin, lower-risk business.",
    href: "/for-distributors",
    accent: "var(--vp-brand-surface)",
    accentColor: "var(--vp-brand)",
  },
  {
    icon: Landmark,
    title: "For Lenders",
    promise: "A closed-loop, self-repaying book.",
    description:
      "Deploy capital into 14-day cycles with ~26% annualized yield. Cash never touches the merchant. UPI sweeps and AutoPay create a collection efficiency no other asset class can match.",
    href: "/for-lenders",
    accent: "var(--vp-accent-amber-surface)",
    accentColor: "#8A6A1B",
  },
  {
    icon: Store,
    title: "For Retail Networks",
    promise: "Buy cheaper with zero upfront capital.",
    description:
      "Kiranas unlock 2.1% savings on staples without putting down cash. Daily micro-sweeps mean repayment is automatic and painless. More working capital for what actually moves.",
    href: "/for-retailers",
    accent: "#EEF2F6",
    accentColor: "var(--vp-fg)",
  },
];

export function PersonaCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {personas.map((p) => {
        const Icon = p.icon;
        return (
          <Link
            key={p.title}
            href={p.href}
            className="card-vp p-7 flex flex-col group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: p.accent, color: p.accentColor }}
            >
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-[16px] mb-2">{p.title}</h3>
            <p className="font-medium text-[18px] leading-snug mb-3 tracking-tight">
              {p.promise}
            </p>
            <p className="text-[14.5px] text-muted leading-relaxed mb-5 flex-1">
              {p.description}
            </p>
            <span className="btn-ghost self-start">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#0F1115" }}>
      {/* Decorative */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: "var(--vp-brand)", filter: "blur(100px)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-50"
          style={{ background: "var(--vp-accent-amber)", filter: "blur(100px)" }}
        />
      </div>

      <div className="container-vp relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5">
            Your next beat is already on the map.
          </h2>
          <p className="text-white/60 text-[17px] md:text-[19px] leading-relaxed mb-8 max-w-xl mx-auto">
            Turn existing distributor routes into pooled, pre-financed orders.
            Onboard in weeks, not quarters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-medium text-[15px] transition-colors"
              style={{ background: "var(--vp-brand)", color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--vp-brand-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--vp-brand)")}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-medium text-[15px] border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

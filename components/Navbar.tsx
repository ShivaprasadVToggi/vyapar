"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Layers,
  Wallet,
  ShieldCheck,
  RotateCcw,
  Brain,
  Gauge,
  Building2,
  Landmark,
  Store,
  Code2,
  BookOpen,
  Users,
  Info,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const platformModules = [
  {
    name: "Route Pools",
    href: "/platform/route-pools",
    icon: Layers,
    desc: "Aggregate the beat",
  },
  {
    name: "Closed-Loop Disbursal",
    href: "/platform/closed-loop-disbursal",
    icon: Wallet,
    desc: "Pay the distributor, never the cash",
  },
  {
    name: "Proof of Delivery",
    href: "/platform/proof-of-delivery",
    icon: ShieldCheck,
    desc: "Custody transfers at the counter",
  },
  {
    name: "Repayment Engine",
    href: "/platform/repayment-engine",
    icon: RotateCcw,
    desc: "Sweeps and AutoPay, orchestrated",
  },
  {
    name: "Credit Intelligence",
    href: "/platform/credit-intelligence",
    icon: Brain,
    desc: "Behavioral underwriting",
  },
  {
    name: "Risk & Compliance",
    href: "/platform/risk-compliance",
    icon: Gauge,
    desc: "Built for RBI's LSP framework",
  },
];

const navItems = [
  {
    label: "Platform",
    href: "/platform",
    hasMega: true,
  },
  {
    label: "Use Cases",
    href: "/use-cases",
  },
  {
    label: "For Teams",
    href: "#",
    hasDropdown: true,
    dropdown: [
      { label: "Distributors", href: "/for-distributors", icon: Building2 },
      { label: "Lenders", href: "/for-lenders", icon: Landmark },
      { label: "Retailers", href: "/for-retailers", icon: Store },
    ],
  },
  {
    label: "Developers",
    href: "/developers",
  },
  {
    label: "Resources",
    href: "#",
    hasDropdown: true,
    dropdown: [
      { label: "Blog", href: "/blog", icon: BookOpen },
      { label: "Customers", href: "/customers", icon: Users },
      { label: "About", href: "/about", icon: Info },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        scrolled
          ? "bg-[var(--vp-bg)]/85 backdrop-blur-md border-b border-[var(--vp-border)]"
          : "bg-[var(--vp-bg)] border-b border-transparent"
      )}
    >
      <div className="container-vp">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "var(--vp-brand)" }}
            >
              VP
            </span>
            <span className="tracking-tight">VyaparPool</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasMega) setMegaOpen(true);
                  if (item.hasDropdown) setDropdownOpen(item.label);
                }}
                onMouseLeave={() => {
                  if (item.hasMega) setMegaOpen(false);
                  if (item.hasDropdown) setDropdownOpen(null);
                }}
              >
                <Link
                  href={item.href === "#" ? (item.label === "Platform" ? "/platform" : "/blog") : item.href}
                  className="flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[var(--vp-fg-muted)] hover:text-[var(--vp-fg)] transition-colors rounded-lg"
                >
                  {item.label}
                  {(item.hasMega || item.hasDropdown) && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  )}
                </Link>

                {/* Mega menu for Platform */}
                {item.hasMega && megaOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px]">
                    <div className="card-vp p-4 grid grid-cols-2 gap-1">
                      {platformModules.map((mod) => {
                        const Icon = mod.icon;
                        return (
                          <Link
                            key={mod.name}
                            href={mod.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--vp-bg-surface)] transition-colors group"
                          >
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                              style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}
                            >
                              <Icon className="w-[18px] h-[18px]" />
                            </div>
                            <div>
                              <div className="font-medium text-[14px] text-[var(--vp-fg)] group-hover:text-[var(--vp-brand)] transition-colors flex items-center gap-1">
                                {mod.name}
                                <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              </div>
                              <div className="text-[13px] text-[var(--vp-fg-muted)] mt-0.5">
                                {mod.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Simple dropdown */}
                {item.hasDropdown && dropdownOpen === item.label && (
                  <div className="absolute left-0 top-full pt-3 min-w-[200px]">
                    <div className="card-vp py-2">
                      {item.dropdown?.map((d) => {
                        const Icon = d.icon;
                        return (
                          <Link
                            key={d.label}
                            href={d.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-[var(--vp-fg-muted)] hover:text-[var(--vp-fg)] hover:bg-[var(--vp-bg-surface)] transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                            {d.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#"
              className="text-[14px] font-medium text-[var(--vp-fg-muted)] hover:text-[var(--vp-fg)] transition-colors px-3 py-2"
            >
              Sign in
            </Link>
            <Link href="/get-started" className="btn-primary text-[14px] h-10 px-4">
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--vp-bg-surface)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-30 bg-[var(--vp-bg)] overflow-y-auto">
          <div className="container-vp py-6 space-y-6">
            <div>
              <div className="eyebrow mb-3">Platform</div>
              <div className="space-y-1">
                {platformModules.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <Link
                      key={mod.name}
                      href={mod.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--vp-bg-surface)]"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}
                      >
                        <Icon className="w-[18px] h-[18px]" />
                      </div>
                      <div>
                        <div className="font-medium text-[14px]">{mod.name}</div>
                        <div className="text-[13px] text-[var(--vp-fg-muted)]">{mod.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[var(--vp-border)] pt-6 space-y-1">
              <Link href="/use-cases" className="block px-3 py-2.5 font-medium">Use Cases</Link>
              <Link href="/for-distributors" className="block px-3 py-2.5 text-[var(--vp-fg-muted)]">For Distributors</Link>
              <Link href="/for-lenders" className="block px-3 py-2.5 text-[var(--vp-fg-muted)]">For Lenders</Link>
              <Link href="/for-retailers" className="block px-3 py-2.5 text-[var(--vp-fg-muted)]">For Retailers</Link>
              <Link href="/developers" className="block px-3 py-2.5 font-medium">Developers</Link>
              <Link href="/blog" className="block px-3 py-2.5 text-[var(--vp-fg-muted)]">Blog</Link>
              <Link href="/customers" className="block px-3 py-2.5 text-[var(--vp-fg-muted)]">Customers</Link>
              <Link href="/about" className="block px-3 py-2.5 text-[var(--vp-fg-muted)]">About</Link>
            </div>

            <div className="border-t border-[var(--vp-border)] pt-6 flex flex-col gap-3">
              <Link href="#" className="text-center font-medium text-[var(--vp-fg-muted)] py-2">
                Sign in
              </Link>
              <Link href="/get-started" className="btn-primary w-full">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

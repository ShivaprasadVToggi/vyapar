"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Route,
  Wallet,
  QrCode,
  ArrowRightLeft,
  Brain,
  Shield,
  ArrowUpRight,
  CheckCircle2,
  Truck,
} from "lucide-react";

type Module = {
  id: string;
  name: string;
  iconKey: "route" | "wallet" | "qrcode" | "arrows" | "brain" | "shield";
  title: string;
  description: string;
  accent: string;
};

const modules: Module[] = [
  {
    id: "route-pools",
    name: "Route Pools",
    iconKey: "route",
    title: "Route Pools",
    description:
      "Aggregate distributor delivery routes into pooled, pre-financed order blocks. Turn existing logistics into a demand signal that lenders can trust.",
    accent: "#4F46E5",
  },
  {
    id: "disbursal",
    name: "Closed-Loop Disbursal",
    iconKey: "wallet",
    title: "Closed-Loop Disbursal",
    description:
      "Funds flow directly to the supplier, never through the distributor. Principal is protected from day one with a verifiable audit trail.",
    accent: "#7C3AED",
  },
  {
    id: "pod",
    name: "Proof of Delivery",
    iconKey: "qrcode",
    title: "Proof of Delivery",
    description:
      "QR-coded POD confirms every drop in real time. Repayment triggers automatically the moment inventory hits the kirana shelf.",
    accent: "#0EA5E9",
  },
  {
    id: "repayment",
    name: "Repayment Engine",
    iconKey: "arrows",
    title: "Repayment Engine",
    description:
      "Daily sweep from kirana sales repays principal incrementally. Self-liquidating structure with configurable waterfall logic.",
    accent: "#059669",
  },
  {
    id: "credit",
    name: "Credit Intelligence",
    iconKey: "brain",
    title: "Credit Intelligence",
    description:
      "Behavioral scoring from route velocity, basket mix, and repayment consistency. Underwrite the network, not just the borrower.",
    accent: "#D97706",
  },
  {
    id: "risk",
    name: "Risk & Compliance",
    iconKey: "shield",
    title: "Risk & Compliance",
    description:
      "Continuous monitoring with automated alerts. RBI LSP framework compliant, with immutable audit trails and data residency controls.",
    accent: "#DC2626",
  },
];

function ModuleIcon({ iconKey, color }: { iconKey: Module["iconKey"]; color: string }) {
  const props = { className: "w-5 h-5", style: { color } };
  switch (iconKey) {
    case "route": return <Route {...props} />;
    case "wallet": return <Wallet {...props} />;
    case "qrcode": return <QrCode {...props} />;
    case "arrows": return <ArrowRightLeft {...props} />;
    case "brain": return <Brain {...props} />;
    case "shield": return <Shield {...props} />;
  }
}

// Mock UI for each module panel
function ModuleMockup({ moduleId, accent }: { moduleId: string; accent: string }) {
  if (moduleId === "route-pools") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 w-full max-w-md">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
          <span className="text-xs font-medium text-gray-500">Route Map</span>
        </div>
        <div className="space-y-2">
          {[
            { name: "Route 07 — North", orders: "124", status: "Pooled" },
            { name: "Route 12 — Central", orders: "89", status: "Pooling" },
            { name: "Route 03 — South", orders: "156", status: "Pooled" },
            { name: "Route 21 — East", orders: "67", status: "Active" },
          ].map((r, i) => (
            <div
              key={r.name}
              className="flex items-center justify-between p-2 rounded-lg"
              style={{ background: i % 2 === 0 ? "#FAFAFA" : "transparent" }}
            >
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">{r.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 font-mono">{r.orders} orders</span>
                <span
                  className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background:
                      r.status === "Pooled"
                        ? "#EEF2FF"
                        : r.status === "Pooling"
                        ? "#FEF3C7"
                        : "#ECFDF5",
                    color:
                      r.status === "Pooled"
                        ? accent
                        : r.status === "Pooling"
                        ? "#92400E"
                        : "#059669",
                  }}
                >
                  {r.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (moduleId === "disbursal") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 w-full max-w-md">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
          <span className="text-xs font-medium text-gray-500">Funds Flow</span>
        </div>
        <div className="flex items-center justify-between">
          {[
            { icon: Building2, label: "Lender", amount: "₹5.0L" },
            { icon: Wallet, label: "Supplier", amount: "₹4.8L" },
            { icon: Users, label: "Kirana", amount: "₹0" },
          ].map((node, i) => (
            <div key={node.label} className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: i === 1 ? "#EEF2FF" : "#F3F4F6" }}
              >
                <node.icon
                  className="w-5 h-5"
                  style={{ color: i === 1 ? accent : "#6B7280" }}
                />
              </div>
              <span className="text-[11px] font-medium text-gray-600">{node.label}</span>
              <span className="text-xs font-mono font-semibold text-gray-800">{node.amount}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-1 text-[11px] text-gray-500">
          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#059669" }} />
          Closed-loop · verified trail
        </div>
      </div>
    );
  }

  if (moduleId === "pod") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 w-full max-w-md">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
          <span className="text-xs font-medium text-gray-500">Delivery Verification</span>
        </div>
        <div className="flex gap-4">
          <div
            className="w-24 h-24 rounded-lg flex items-center justify-center"
            style={{ background: "#F0F9FF" }}
          >
            <QrCode className="w-14 h-14" style={{ color: accent }} />
          </div>
          <div className="flex-1 space-y-2">
            <div className="text-xs text-gray-500">Drop #A-2847</div>
            <div className="text-sm font-semibold text-gray-800">Sharma Kirana Store</div>
            <div className="flex items-center gap-1 text-xs" style={{ color: "#059669" }}>
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified · 2 min ago
            </div>
            <div className="text-[11px] text-gray-500 font-mono">₹14,850 · 28 SKUs</div>
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === "repayment") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 w-full max-w-md">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
          <span className="text-xs font-medium text-gray-500">Repayment — Day 14</span>
        </div>
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span className="font-mono font-semibold" style={{ color: accent }}>
              58%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: accent }}
              initial={{ width: 0 }}
              animate={{ width: "58%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-lg bg-gray-50">
            <div className="text-[10px] text-gray-500">Collected</div>
            <div className="text-sm font-semibold font-mono text-gray-800">₹2.9L</div>
          </div>
          <div className="p-2 rounded-lg bg-gray-50">
            <div className="text-[10px] text-gray-500">Pending</div>
            <div className="text-sm font-semibold font-mono text-gray-800">₹2.1L</div>
          </div>
          <div className="p-2 rounded-lg" style={{ background: "#ECFDF5" }}>
            <div className="text-[10px]" style={{ color: "#059669" }}>On-time</div>
            <div className="text-sm font-semibold font-mono" style={{ color: "#059669" }}>
              100%
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (moduleId === "credit") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 w-full max-w-md">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
          <span className="text-xs font-medium text-gray-500">Behavioral Score</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#F3F4F6" strokeWidth="3" />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke={accent}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="78 100"
                className="credit-ring-fill"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">78</span>
            </div>
          </div>
          <div className="flex-1 space-y-1.5">
            {[
              { label: "Route velocity", val: 82 },
              { label: "Basket diversity", val: 71 },
              { label: "Repayment consistency", val: 85 },
            ].map((m) => (
              <div key={m.label} className="flex items-center gap-2">
                <span className="text-[11px] text-gray-500 w-28">{m.label}</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: accent }}
                    initial={{ width: 0 }}
                    animate={{ width: `${m.val}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .credit-ring-fill {
            stroke-dasharray: 0 100;
            animation: ringFill 1s ease-out forwards;
          }
          @keyframes ringFill {
            to { stroke-dasharray: 78 100; }
          }
        `}</style>
      </div>
    );
  }

  // risk & compliance
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 w-full max-w-md">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
        <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
        <span className="text-xs font-medium text-gray-500">Compliance Monitor</span>
      </div>
      <div className="space-y-2">
        {[
          { label: "KYC verification", status: "Pass", color: "#059669" },
          { label: "Data residency check", status: "Pass", color: "#059669" },
          { label: "Audit trail sync", status: "Active", color: "#0EA5E9" },
          { label: "NBFC mandate", status: "Verified", color: "#059669" },
        ].map((c) => (
          <div
            key={c.label}
            className="flex items-center justify-between p-2 rounded-lg bg-gray-50"
          >
            <span className="text-sm text-gray-700">{c.label}</span>
            <span
              className="text-[11px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1"
              style={{ background: "#ECFDF5", color: c.color }}
            >
              <CheckCircle2 className="w-3 h-3" /> {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OSModuleNav() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [dotY, setDotY] = useState(0);
  const DOT_SIZE = 8;

  useEffect(() => {
    const el = itemRefs.current[active];
    if (el) {
      const parent = el.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        setDotY(elRect.top - parentRect.top + elRect.height / 2 - DOT_SIZE / 2);
      }
    }
  }, [active]);

  const activeModule = modules[active];

  return (
    <section
      className="w-full py-20 md:py-28"
      style={{ background: "#FAFAF7" }}
    >
      <div className="container-vp">
        <div className="mb-12 text-center">
          <div className="text-[12px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: "#6B7280" }}>
            B2BEAT OS
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3" style={{ color: "#111111", lineHeight: 1.1 }}>
            One home for operating and
            <br />
            scaling embedded credit.
          </h2>
          <p className="text-xl md:text-2xl" style={{ color: "#9CA3AF" }}>
            However complex.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Sidebar */}
          <div className="relative w-full lg:w-56 flex-shrink-0">
            {/* Animated dot indicator */}
            <motion.div
              className="absolute left-0 rounded-full"
              style={{
                background: "#4F46E5",
                top: dotY,
                width: DOT_SIZE,
                height: DOT_SIZE,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            <nav className="pl-5 border-l" style={{ borderColor: "#E5E7EB" }}>
              {modules.map((mod, i) => (
                <button
                  key={mod.id}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onClick={() => setActive(i)}
                  className={`block w-full text-left py-2.5 pr-4 text-sm transition-colors duration-200 ${
                    active === i
                      ? "font-semibold"
                      : "font-normal"
                  }`}
                  style={{
                    color: active === i ? "#111111" : "#9CA3AF",
                  }}
                >
                  {mod.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Main panel */}
          <div className="flex-1 w-full min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative rounded-2xl p-8 md:p-10 border"
                style={{
                  background: "#F0F0ED",
                  borderColor: activeModule.accent,
                  boxShadow: `0 0 0 1px ${activeModule.accent}15`,
                }}
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${activeModule.accent}15` }}
                      >
                        <ModuleIcon iconKey={activeModule.iconKey} color={activeModule.accent} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: "#111111" }}>
                        {activeModule.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed mb-6 max-w-lg" style={{ color: "#6B7280" }}>
                      {activeModule.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm font-medium" style={{ color: activeModule.accent }}>
                      <span>Explore module</span>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: activeModule.accent }}
                      >
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <ModuleMockup moduleId={activeModule.id} accent={activeModule.accent} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

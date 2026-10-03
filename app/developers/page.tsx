import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { Code2, Zap, Shield, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Developers",
  description: "Low-code APIs and webhooks for building flexible lending products on top of VyaparPool's rails.",
};

const features = [
  { icon: Zap, title: "Low-code integration", desc: "RESTful APIs, idiomatic SDKs coming soon, and clear webhook contracts. Integrate in days, not quarters." },
  { icon: Shield, title: "Secure by default", desc: "API keys with scoped permissions, idempotency keys, webhook signatures, and TLS 1.3 everywhere." },
  { icon: Code2, title: "Designed for fintech builders", desc: "Versioned endpoints, explicit error codes, idempotent mutations, and a sandbox that mirrors production behavior." },
  { icon: BookOpen, title: "Docs that actually work", desc: "Every endpoint documented with request/response examples, curl snippets, and integration checklists." },
];

export default function DevelopersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Developers"
        title="Build on VyaparPool's rails."
        subtitle="Low-code APIs and webhooks for distributors, NBFCs, and fintech partners who want to embed pooled, pre-financed wholesale commerce into their own products."
        ctaPrimary={{ label: "Get API keys", href: "/get-started" }}
      />

      <Section eyebrow="Platform" title="Everything you need to ship.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="card-vp p-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[17px] mb-2">{f.title}</h4>
                <p className="text-[14.5px] text-muted leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Code example" title="Create a pool. Lock it. Get paid." className="bg-[var(--vp-bg-soft)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-2xl p-6 text-white overflow-x-auto" style={{ background: "#0F1115" }}>
            <div className="text-[11px] uppercase tracking-wide text-white/50 mb-3">Create & lock a Route Pool</div>
            <pre className="text-[12.5px] leading-relaxed font-mono-tabular text-white/85">
{`// Initialize the client
import { VyaparPool } from "@vyaparpool/sdk";
const vp = new VyaparPool({ apiKey: process.env.VP_API_KEY });

// 1. Create a route pool
const pool = await vp.pools.create({
  routeId: "RT-GUJ-NORTH-01",
  scheduledAt: "2026-03-15T06:00:00Z",
  categories: ["rice", "oil", "sugar", "pulses"],
  antiMonopolyCapPct: 35,
});

// 2. Add merchant commitments (via your UI)
await vp.pools.addCommitment(pool.id, {
  merchantId: "K-4421",
  skus: [{ sku: "BASMATI-5KG", qty: 8 }],
});

// 3. Lock the pool at deadline
const locked = await vp.pools.lock(pool.id);
console.log("Disbursal triggered:", locked.disbursalId);

// 4. Listen for the webhook
// POST /webhooks/vyaparpool → { event: "disbursal.completed", ... }`}
            </pre>
          </div>
          <div className="rounded-2xl p-6 overflow-x-auto" style={{ background: "#0F1115" }}>
            <div className="text-[11px] uppercase tracking-wide text-white/50 mb-3">Webhook response</div>
            <pre className="text-[12.5px] leading-relaxed font-mono-tabular text-white/85">
{`{
  "event": "disbursal.completed",
  "poolId": "pool_01HRZ...",
  "disbursalId": "disb_01HRZ...",
  "amount": 200000,
  "currency": "INR",
  "distributorAccount": {
    "ifsc": "HDFC0001234",
    "accountNo": "****8721"
  },
  "nbfcPartner": "nbfc_01H...",
  "tenorDays": 14,
  "merchantCount": 15,
  "proofOfDelivery": {
    "type": "OTP",
    "status": "awaiting"
  },
  "createdAt": "2026-03-13T06:00:01Z"
}`}
            </pre>
          </div>
        </div>
      </Section>

      <Section eyebrow="What you can build" title="Flexible primitives, powerful products.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "White-label Route Pools for your distributor network",
            "Custom credit products using VyaparPool behavioral scores",
            "Embedded repayment into your merchant app",
            "ERP reconciliation feeds for distributors",
            "Portfolio monitoring dashboards for lenders",
            "Custom analytics on top of pool-level data",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2.5 p-3">
              <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--vp-brand)" }} />
              <span className="text-[14px]">{item}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="btn-ghost">
            Read the full API docs
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const integrations = [
  { name: "UPI", sub: "Core rail" },
  { name: "UPI AutoPay", sub: "Mandate management" },
  { name: "PA Nodal Accounts", sub: "Split & sweep" },
  { name: "NBFC Core Systems", sub: "Loan origination" },
  { name: "Tally", sub: "Distributor ERP" },
  { name: "Busy", sub: "Distributor ERP" },
  { name: "WhatsApp Business", sub: "Merchant comms" },
  { name: "SMS / OTP Gateways", sub: "Verification" },
];

export function IntegrationsGrid() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {integrations.map((i) => (
          <div
            key={i.name}
            className="card-vp p-5 flex flex-col items-center justify-center text-center min-h-[100px]"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--vp-bg-surface)] flex items-center justify-center mb-2.5">
              <span className="font-bold text-[13px] text-[var(--vp-fg-muted)]">
                {i.name.charAt(0)}
              </span>
            </div>
            <div className="font-medium text-[14px]">{i.name}</div>
            <div className="text-[11px] text-subtle mt-0.5">{i.sub}</div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/integrations" className="btn-ghost">
          Explore all integrations
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <p className="text-center text-[11px] text-subtle mt-3">
        Logos shown as text placeholders · TODO: replace with approved brand marks
      </p>
    </div>
  );
}

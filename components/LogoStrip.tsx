export function LogoStrip() {
  const partners = [
    { name: "NBFC Partners", type: "PLACEHOLDER" },
    { name: "Distributor Groups", type: "PLACEHOLDER" },
    { name: "UPI · NPCI", type: "RAIL" },
    { name: "Payment Aggregator", type: "PLACEHOLDER" },
    { name: " nodal Accounts", type: "RAIL" },
  ];

  return (
    <section className="py-12 border-y border-[var(--vp-border)] bg-[var(--vp-bg-soft)]">
      <div className="container-vp">
        <p className="text-center text-[13px] text-subtle uppercase tracking-[0.08em] font-medium mb-8">
          Built on the rails India trusts
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[var(--vp-border)] flex items-center justify-center">
                <span className="text-[10px] font-bold text-[var(--vp-fg-subtle)]">
                  {p.name.charAt(0)}
                </span>
              </div>
              <span className="font-semibold text-[15px] tracking-tight text-[var(--vp-fg)]">
                {p.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-[11px] text-subtle mt-6">
          TODO: replace with approved partner logos · logos shown as placeholders
        </p>
      </div>
    </section>
  );
}

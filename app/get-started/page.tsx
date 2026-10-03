"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { CheckCircle2, Loader2 } from "lucide-react";

const roles = [
  "Distributor",
  "NBFC / Lender",
  "Retailer network",
  "Investor",
  "Other",
];

const volumeOptions = [
  "Under ₹50 lakh / month",
  "₹50 lakh – ₹2 Cr / month",
  "₹2 Cr – ₹10 Cr / month",
  "₹10 Cr+ / month",
];

export default function GetStartedPage() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    volume: "",
    message: "",
    honeypot: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email";
    if (!form.company.trim()) e.company = "Please enter your company";
    if (!form.role) e.role = "Please select your role";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // Spam trap

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setFormState("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <>
      <PageHeader
        eyebrow="Get Started"
        title="Let's talk about your routes."
        subtitle="Tell us a bit about yourself. A VyaparPool specialist will reach out within one business day to discuss a pilot or partnership."
      />

      <section className="pb-20">
        <div className="container-vp">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Info side */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-vp p-6">
                <h3 className="font-semibold text-[17px] mb-4">What happens next</h3>
                <ol className="space-y-4">
                  {[
                    "We review your details within one business day",
                    "A specialist schedules a 30-min intro call",
                    "We map your routes / book and design a pilot",
                    "Commercials and integration plan agreed",
                    "Go-live in 2–4 weeks",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0" style={{ background: "var(--vp-brand-surface)", color: "var(--vp-brand)" }}>
                        {i + 1}
                      </span>
                      <span className="text-[14.5px] text-muted pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card-vp p-6">
                <h3 className="font-semibold text-[17px] mb-3">Prefer email?</h3>
                <p className="text-[14.5px] text-muted leading-relaxed">
                  Reach us directly at{" "}
                  <a href="mailto:hello@vyaparpool.com" className="text-[var(--vp-brand)] font-medium hover:underline">
                    hello@vyaparpool.com
                  </a>
                </p>
              </div>
            </div>

            {/* Form side */}
            <div className="lg:col-span-3">
              <div className="card-vp p-7 md:p-8">
                {formState === "success" ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "var(--vp-success-surface)" }}>
                      <CheckCircle2 className="w-7 h-7" style={{ color: "var(--vp-success)" }} />
                    </div>
                    <h3 className="font-semibold text-[22px] mb-2">Thank you.</h3>
                    <p className="text-[15px] text-muted max-w-md mx-auto">
                      We've received your details. A VyaparPool specialist will be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <label>
                        Don't fill this out:
                        <input
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={form.honeypot}
                          onChange={(e) => update("honeypot", e.target.value)}
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field
                        label="Full name"
                        required
                        error={errors.name}
                      >
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          className={inputCls(!!errors.name)}
                          placeholder="Jane Doe"
                        />
                      </Field>

                      <Field
                        label="Work email"
                        required
                        error={errors.email}
                      >
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={inputCls(!!errors.email)}
                          placeholder="jane@company.com"
                        />
                      </Field>
                    </div>

                    <Field
                      label="Company"
                      required
                      error={errors.company}
                    >
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        className={inputCls(!!errors.company)}
                        placeholder="Your company name"
                      />
                    </Field>

                    <Field
                      label="I am a"
                      required
                      error={errors.role}
                    >
                      <select
                        value={form.role}
                        onChange={(e) => update("role", e.target.value)}
                        className={inputCls(!!errors.role)}
                      >
                        <option value="">Select your role</option>
                        {roles.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Monthly purchase volume">
                      <select
                        value={form.volume}
                        onChange={(e) => update("volume", e.target.value)}
                        className={inputCls(false)}
                      >
                        <option value="">Select a range</option>
                        {volumeOptions.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Message (optional)">
                      <textarea
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        rows={4}
                        className={inputCls(false) + " resize-none py-3"}
                        placeholder="Tell us about your routes, your book, or what you're trying to solve..."
                      />
                    </Field>

                    {formState === "error" && (
                      <div className="p-3 rounded-lg text-[14px]" style={{ background: "var(--vp-critical-surface)", color: "var(--vp-critical)" }}>
                        Something went wrong. Please try again or email hello@vyaparpool.com.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="btn-primary w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formState === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit request"
                      )}
                    </button>

                    <p className="text-[11px] text-subtle">
                      By submitting, you agree to be contacted by VyaparPool regarding your request. We'll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium mb-1.5">
        {label} {required && <span style={{ color: "var(--vp-critical)" }}>*</span>}
      </label>
      {children}
      {error && <p className="text-[12px] mt-1" style={{ color: "var(--vp-critical)" }}>{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return (
    "w-full h-12 px-4 rounded-xl border bg-[var(--vp-bg)] text-[15px] transition-all focus:outline-none " +
    (hasError
      ? "border-[var(--vp-critical)] focus:ring-2 focus:ring-[var(--vp-critical)]/20"
      : "border-[var(--vp-border)] focus:border-[var(--vp-brand)] focus:ring-2 focus:ring-[var(--vp-brand-surface)]")
  );
}

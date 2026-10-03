import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
  ctaPrimary,
  ctaSecondary,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden", className)}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>
      <div className="container-vp relative">
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">{eyebrow}</div>
          <h1 className="heading-xl mb-5">{title}</h1>
          {subtitle && (
            <p className="text-[19px] text-muted leading-relaxed mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row items-start gap-3">
              {ctaPrimary && (
                <Link href={ctaPrimary.href} className="btn-primary">
                  {ctaPrimary.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href} className="btn-secondary">
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  eyebrowColor?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  align = "left",
  eyebrowColor,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-vp", className)}>
      <div className="container-vp">
        {(eyebrow || title || subtitle) && (
          <div
            className={cn(
              "max-w-2xl mb-12",
              align === "center" && "mx-auto text-center"
            )}
          >
            {eyebrow && (
              <div
                className="eyebrow mb-4"
                style={eyebrowColor ? { color: eyebrowColor } : undefined}
              >
                {eyebrow}
              </div>
            )}
            {title && <h2 className="heading-lg mb-4">{title}</h2>}
            {subtitle && (
              <p className="text-[18px] text-muted leading-relaxed">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

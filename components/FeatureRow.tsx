import { cn } from "@/lib/utils";

interface FeatureRowProps {
  features: Array<{
    title: string;
    description: string;
    visual: React.ReactNode;
  }>;
}

export function FeatureRow({ features }: FeatureRowProps) {
  return (
    <div className="space-y-20">
      {features.map((f, i) => {
        const reverse = i % 2 === 1;
        return (
          <div
            key={f.title}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
              reverse && "lg:[&>*:first-child]:order-2"
            )}
          >
            <div className="max-w-md">
              <h3 className="heading-md mb-4">{f.title}</h3>
              <p className="text-[17px] text-muted leading-relaxed">
                {f.description}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-grid rounded-2xl opacity-40 pointer-events-none" />
              <div className="relative">{f.visual}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

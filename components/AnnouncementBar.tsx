import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="w-full bg-[var(--vp-fg)] text-[var(--vp-fg-inverse)]">
      <div className="container-vp py-2.5 flex items-center justify-center gap-2 text-[13px]">
        <span className="opacity-80">New guide</span>
        <span aria-hidden="true">→</span>
        <Link
          href="/blog"
          className="font-medium hover:underline underline-offset-4 inline-flex items-center gap-1"
        >
          How Route Pooling cuts distributor DSO from 25 days to T+0
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

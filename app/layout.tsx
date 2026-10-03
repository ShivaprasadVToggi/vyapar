import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B5D4B",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vyaparpool.com"),
  title: {
    default: "VyaparPool — Working capital, delivered with every beat",
    template: "%s · VyaparPool",
  },
  description:
    "VyaparPool turns distributor delivery routes into pooled, pre-financed orders. Distributors get paid in 24 hours. Kiranas buy cheaper with zero upfront cash. Lenders get a closed-loop, self-repaying book.",
  keywords: [
    "VyaparPool",
    "working capital",
    "kirana finance",
    "distributor DSO",
    "embedded lending",
    "route pooling",
    "B2B fintech India",
    "LSP",
  ],
  openGraph: {
    title: "VyaparPool — Working capital, delivered with every beat",
    description:
      "An asset-light demand-aggregation and embedded working-capital platform for semi-urban and rural kirana stores in India.",
    type: "website",
    locale: "en_IN",
    siteName: "VyaparPool",
  },
  twitter: {
    card: "summary_large_image",
    title: "VyaparPool — Working capital, delivered with every beat",
    description:
      "Turn distributor routes into pooled, pre-financed orders. T+0 payments for distributors, zero-upfront buying for kiranas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--vp-bg)] text-[var(--vp-fg)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[var(--vp-brand)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

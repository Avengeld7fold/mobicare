import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import SmoothScrolling from "@/components/SmoothScrolling";
import LoadingGate from "@/components/loader/LoadingGate";
import HtmlLanguage from "@/components/HtmlLanguage";
import ImageProtection from "@/components/ImageProtection";
import MobiCareNavbar from "@/components/MobiCareNavbar";
import "lenis/dist/lenis.css";
import "./globals.css";
import "./mobicare.css";
import "./pricelist.css";
import "./price-opening.css";

const gobold = localFont({
  src: "../public/fonts/mobicare/Gobold-Regular.otf",
  variable: "--font-gobold",
  weight: "400",
  display: "swap",
});

const greycliff = localFont({
  src: [
    {
      path: "../public/fonts/mobicare/Greycliff-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/mobicare/Greycliff-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/mobicare/Greycliff-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-greycliff",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mobicare.example";

export const viewport: Viewport = {
  themeColor: "#080c09",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "MobiCare Service Center", template: "%s | MobiCare" },
  description: "MobiCare Service Center.",
  authors: [{ name: "MobiCare", url: SITE_URL }],
  creator: "MobiCare",
  publisher: "MobiCare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "MobiCare",
    title: "MobiCare Service Center",
    description: "MobiCare Service Center.",
    images: [
      {
        url: "/images/iphone.webp",
        width: 1200,
        height: 630,
        alt: "MobiCare Service Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MobiCare Service Center",
    description: "MobiCare Service Center.",
    images: ["/images/iphone.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/mobicare-mark.png", type: "image/png" },
    ],
    shortcut: "/mobicare-mark.png",
    apple: "/mobicare-mark.png",
  },
};

import { I18nProvider } from "@/lib/i18n/context";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HtmlLanguage
      className={`${gobold.variable} ${greycliff.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <ImageProtection />
        <LoadingGate>
          <I18nProvider>
            <SmoothScrolling>
              <MobiCareNavbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </SmoothScrolling>
          </I18nProvider>
        </LoadingGate>
      </body>
    </HtmlLanguage>
  );
}

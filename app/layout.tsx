import type { Metadata, Viewport } from "next";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mobicare.example";

const SITE_DESCRIPTION =
  "Pusat servis gadget profesional & presisi di Bali untuk iPhone, iPad, MacBook, dan Android. Diagnosa terbuka di meja servis, estimasi transparan, suku cadang berkualitas, dan garansi resmi toko.";

export const viewport: Viewport = {
  themeColor: "#080c09",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "MobiCare Service Center Bali", template: "%s | MobiCare" },
  description: SITE_DESCRIPTION,
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
    title: "MobiCare Service Center Bali — Servis iPhone, iPad, MacBook & Android",
    description: SITE_DESCRIPTION,
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
    title: "MobiCare Service Center Bali — Servis iPhone, iPad, MacBook & Android",
    description: SITE_DESCRIPTION,
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
};

import { I18nProvider } from "@/lib/i18n/context";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MobiCare Service Center",
  image: `${SITE_URL}/images/logo.svg`,
  description: SITE_DESCRIPTION,
  telephone: "+6281999336722",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Teuku Umar No.57, Dauh Puri Kauh",
    addressLocality: "Denpasar",
    addressRegion: "Bali",
    postalCode: "80113",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.6705254,
    longitude: 115.2095412,
  },
  url: SITE_URL,
  sameAs: [
    "https://www.instagram.com/fixmi_id/",
    "https://www.tiktok.com/@fixmiservicecenter",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HtmlLanguage className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

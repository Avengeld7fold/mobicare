import type { Metadata } from "next";
import PricelistExplorer from "@/components/pricelist/PricelistExplorer";
import { getPricelistView } from "@/lib/pricelist-server";

// ISR: HTML di-generate secara statis dan di-revalidate tiap 30 detik, atau instan via revalidatePath() / sync button.
export const revalidate = 30;

export const metadata: Metadata = {
  title: "Daftar Harga Servis iPhone, iPad, MacBook & Android — MobiCare Service Center Bali",
  description:
    "Cek estimasi harga servis iPhone, iPad, MacBook, Apple Watch, dan Android di MobiCare Service Center Bali. Daftar harga transparan untuk ganti LCD, baterai, kamera, dan lainnya.",
  alternates: {
    canonical: "/pricelist",
    languages: { id: "/pricelist", en: "/en/pricelist" },
  },
  openGraph: {
    title: "Daftar Harga Servis iPhone, iPad, MacBook & Android — MobiCare Service Center Bali",
    description:
      "Cek biaya perbaikan perangkat Apple & Android di MobiCare Service Center Bali. Estimasi transparan dan tanpa biaya tersembunyi.",
    url: "/pricelist",
    images: [
      {
        url: "/images/iphone.webp",
        width: 1200,
        height: 630,
        alt: "Daftar Harga Servis MobiCare Service Center",
      },
    ],
  },
};

export default async function PricelistPage() {
  const { categoryCards, activeCategory, lastUpdated } = await getPricelistView();

  if (!activeCategory) {
    return (
      <section className="mobi-container py-24">
        <h1 className="font-display text-4xl font-bold text-foreground">Daftar Harga</h1>
        <p className="mt-4 text-text-secondary">
          Daftar harga sedang diperbarui. Silakan hubungi kami untuk penawaran terbaru.
        </p>
      </section>
    );
  }

  return <PricelistExplorer categories={categoryCards} activeCategory={activeCategory} lastUpdated={lastUpdated} />;
}

import type { Metadata } from "next";
import PricelistExplorer from "@/components/pricelist/PricelistExplorer";
import { getPricelist, getPricelistView } from "@/lib/pricelist-server";

// ISR: Aktifkan generateStaticParams() untuk SSG awal, di-revalidate tiap 30 detik atau instan via revalidatePath() / sync button.
export const revalidate = 30;

interface PageProps {
  params: Promise<{
    kategori: string;
  }>;
}

export async function generateStaticParams() {
  const categories = await getPricelist();
  return categories.map((c) => ({
    kategori: c.Slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { kategori } = await params;
  const categories = await getPricelist();
  const category = categories.find((c) => c.Slug.toLowerCase() === kategori.toLowerCase());

  const categoryName = category?.Name || (kategori.charAt(0).toUpperCase() + kategori.slice(1));
  const title = `Daftar Harga Servis ${categoryName} — MobiCare Service Center Bali`;
  const description = category?.description ||
    `Estimasi harga servis ${categoryName} di MobiCare Service Center Bali. Daftar harga transparan untuk LCD, baterai, kamera, dan lainnya.`;
  const image = category?.Image || "/images/iphone.webp";

  return {
    title,
    description,
    alternates: {
      canonical: `/pricelist/${kategori.toLowerCase()}`,
      languages: {
        id: `/pricelist/${kategori.toLowerCase()}`,
        en: `/en/pricelist/${kategori.toLowerCase()}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/pricelist/${kategori.toLowerCase()}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `Daftar Harga Servis ${categoryName} MobiCare Service Center`,
        },
      ],
    },
  };
}

export default async function CategoryPricelistPage({ params }: PageProps) {
  const { kategori } = await params;
  const { categoryCards, activeCategory, lastUpdated } = await getPricelistView(kategori.toLowerCase());

  return (
    <PricelistExplorer
      categories={categoryCards}
      activeCategory={activeCategory}
      lastUpdated={lastUpdated}
    />
  );
}

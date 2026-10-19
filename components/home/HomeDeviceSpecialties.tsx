"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function HomeDeviceSpecialties() {
  const { locale, getLocalizedPath } = useI18n();
  const isEn = locale === "en";

  const categories = [
    {
      name: "iPhone",
      slug: "iphone",
      image: "/images/iphone.webp",
      alt: isEn ? "iPhone repair price list" : "Daftar harga servis iPhone",
      href: "/pricelist/iphone",
    },
    {
      name: "iPad",
      slug: "ipad",
      image: "/images/ipad.webp",
      alt: isEn ? "iPad repair price list" : "Daftar harga servis iPad",
      href: "/pricelist/ipad",
    },
    {
      name: "Macbook",
      slug: "macbook",
      image: "/images/macbook.webp",
      alt: isEn ? "MacBook repair price list" : "Daftar harga servis MacBook",
      href: "/pricelist/macbook",
    },
    {
      name: "iWatch",
      slug: "iwatch",
      image: "/images/iwatch.webp",
      alt: isEn ? "Apple Watch repair price list" : "Daftar harga servis iWatch",
      href: "/pricelist/iwatch",
    },
    {
      name: "Android",
      slug: "android",
      image: "/images/android.webp",
      alt: isEn ? "Android repair price list" : "Daftar harga servis Android",
      href: "/pricelist/android",
    },
  ];

  return (
    <section className="home-devices" id="device-hub" aria-labelledby="device-hub-heading">
      <div className="home-devices-inner">
        {/* Heading: Kicker & H2 tanpa link kanan */}
        <div className="devices-heading">
          <p className="devices-kicker">
            {isEn ? "DEVICE SPECIALTIES" : "SPESIALISASI PERANGKAT"}
          </p>
          <h2 id="device-hub-heading">
            {isEn ? "SELECT YOUR GADGET." : "PILIH GADGET ANDA."}
          </h2>
        </div>

        {/* Asymmetrical Device Gallery Grid persis halaman pricelist */}
        <div className="device-gallery-grid">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={getLocalizedPath(category.href)}
              className="device-gallery-card"
              data-device={category.slug}
              aria-label={
                isEn
                  ? `View ${category.name} repair services`
                  : `Lihat layanan perbaikan ${category.name}`
              }
            >
              <span className="device-gallery-name">{category.name}</span>
              <span className="device-gallery-image">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 720px) 180px, 240px"
                  className="object-contain"
                />
              </span>
              <span className="device-gallery-action">
                <span>{isEn ? "View services" : "Lihat layanan"}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

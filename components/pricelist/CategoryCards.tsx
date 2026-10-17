"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import ServiceIcon, { CATEGORY_ICON } from "./ServiceIcon";
import type { Category } from "@/lib/data";

interface CategoryCardsProps {
  categories: Pick<Category, "Name" | "Slug" | "Image">[];
  activeSlug: string;
  onSelect: (slug: string) => void;
}

export default function CategoryCards({ categories, activeSlug, onSelect }: CategoryCardsProps) {
  const { dict } = useI18n();
  const isEn = dict.locale === "en";
  return (
    <div className="device-gallery-grid">
      {categories.map((category) => (
        <button key={category.Slug} type="button" onClick={() => onSelect(category.Slug)}
          aria-pressed={category.Slug === activeSlug} className="device-gallery-card" data-device={category.Slug}>
          <span className="device-gallery-name">{category.Name}</span>
          <span className="device-gallery-image">
            {category.Image ? (
              <Image src={category.Image} alt="" fill sizes="(max-width: 720px) 180px, 240px" className="object-contain" />
            ) : (
              <ServiceIcon name={CATEGORY_ICON[category.Slug] ?? "wrench"} className="h-10 w-10" />
            )}
          </span>
          <span className="device-gallery-action">
            <span>{category.Slug === activeSlug ? (isEn ? "Selected" : "Sedang dipilih") : (isEn ? "View services" : "Lihat layanan")}</span>
            {category.Slug === activeSlug ? <Check size={20} aria-hidden="true" /> : <ArrowUpRight size={20} aria-hidden="true" />}
          </span>
        </button>
      ))}
    </div>
  );
}

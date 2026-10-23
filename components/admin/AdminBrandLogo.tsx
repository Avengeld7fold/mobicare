"use client";

import MobiCareWordmark from "@/components/MobiCareWordmark";

interface AdminBrandLogoProps {
  className?: string;
}

export default function AdminBrandLogo({ className = "" }: AdminBrandLogoProps) {
  return <MobiCareWordmark className={`admin-brand-wordmark-svg ${className}`.trim()} />;
}

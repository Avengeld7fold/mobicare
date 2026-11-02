import type { Metadata } from "next";
import MobiCareHero from "@/components/MobiCareHero";
import MobiCareDivider from "@/components/MobiCareDivider";
import HomeDeviceSpecialties from "@/components/home/HomeDeviceSpecialties";
import HomeWhoWeAre from "@/components/home/HomeWhoWeAre";
import HomeSmarterWay from "@/components/home/HomeSmarterWay";
import HomeAlertsSignup from "@/components/home/HomeAlertsSignup";

export const metadata: Metadata = {
  title: "MobiCare Service Center Bali — Servis iPhone, iPad, MacBook & Android",
  description:
    "Service center gadget di Bali. Cek daftar harga servis iPhone, iPad, MacBook & Android, temukan cabang MobiCare terdekat, dan mulai konsultasi via WhatsApp.",
  alternates: {
    canonical: "/",
    languages: { en: "/en" },
  },
};

export default function Home() {
  return (
    <>
      <MobiCareHero />
      <MobiCareDivider />
      <HomeDeviceSpecialties />
      <HomeWhoWeAre />
      <HomeSmarterWay />
      <HomeAlertsSignup />
    </>
  );
}


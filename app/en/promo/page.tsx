import type { Metadata } from "next";
import PromoPage from "../../promo/page";

// ISR: HTML di-generate secara statis dan di-revalidate tiap 30 detik, atau instan via revalidatePath() / sync button.
export const revalidate = 30;

export const metadata: Metadata = {
  title: "Device Repair Offers — MobiCare Service Center",
  description:
    "Browse current MobiCare service offers for your device and contact our team for repair consultation.",
  alternates: {
    canonical: "/en/promo",
  },
};

export default PromoPage;

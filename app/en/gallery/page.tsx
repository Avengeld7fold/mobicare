import type { Metadata } from "next";
import GalleryPage from "../../gallery/page";

// ISR: HTML di-generate secara statis dan di-revalidate tiap 30 detik, atau instan via revalidatePath() / sync button.
export const revalidate = 30;

export const metadata: Metadata = {
  title: "Repair Gallery — MobiCare Service Center",
  description:
    "Explore verified repair documentation and technician activity from MobiCare Service Center.",
  alternates: {
    canonical: "/en/gallery",
  },
};

export default GalleryPage;

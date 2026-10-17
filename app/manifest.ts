import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MobiCare",
    short_name: "MobiCare",
    description:
      "Pusat service iPhone, iPad, MacBook & Android terpercaya di Bali sejak 2014. Transparan, rapi, bergaransi.",
    start_url: "/",
    display: "standalone",
    background_color: "#080c09",
    theme_color: "#00a651",
    icons: [
      {
        src: "/mobicare-mark.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}

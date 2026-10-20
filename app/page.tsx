import MobiCareHero from "@/components/MobiCareHero";
import MobiCareDivider from "@/components/MobiCareDivider";
import HomeDeviceSpecialties from "@/components/home/HomeDeviceSpecialties";
import HomeWhoWeAre from "@/components/home/HomeWhoWeAre";
import HomeSmarterWay from "@/components/home/HomeSmarterWay";
import HomeAlertsSignup from "@/components/home/HomeAlertsSignup";

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


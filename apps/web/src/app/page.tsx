import BottomNavigation from "@/components/home/BottomNavigation";
import CategorySection from "@/components/home/CategorySection";
import FeaturedEvent from "@/components/home/FeaturedEvent";
import Hero from "@/components/home/Hero";
import SiteHeader from "@/components/home/SiteHeader";
import WelcomeSearch from "@/components/home/WelcomeSearch";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.siteShell}>
      <SiteHeader />
      <Hero />
      <div className={styles.homeContent}>
        <WelcomeSearch />
        <FeaturedEvent />
        <CategorySection />
      </div>
      <BottomNavigation />
    </main>
  );
}

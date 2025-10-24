import styles from "./page.module.css";
import VideoHero from "@/components/VideoHero/VideoHero";
import Ehrlichkeit from "@/components/Ehrlichkeit/Ehrlichkeit";
import ReferenzenHero from "@/components/ReferenzenHero/ReferenzenHero";
import QualitatBanner from "@/components/QualitatBanner/QualitatBanner";
import KuechenHero from "@/components/KuechenHero/KuechenHero";
import ServiceBanner from "@/components/ServiceBanner/ServiceBanner";
import CtaSection from "@/components/CtaSection/CtaSection";
import ReviewsSection from "@/components/Reviews/Reviews";
import FAQSection from "@/components/FAQSection/FAQSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <VideoHero />
      <Ehrlichkeit />
      <ReferenzenHero />
      <QualitatBanner />
      <KuechenHero />
      <ServiceBanner />
      <CtaSection />
      <ReviewsSection />
      <FAQSection />
    </div>
  );
}

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
import ContactForm from "@/components/ContactForm/ContactForm";
import DetailLoesungen from "@/components/DetailLoesungen/DetailLoesungen";
import Leistungen from "@/components/Leistungen/Leistungen";
import ServicesOverview from "@/components/ServicesOverview/ServicesOverview";
import KitchenShowcase from "@/components/KitchenShowcase/KitchenShowcase";

// Importă noile componente pentru scroll effects
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import { ScrollSection } from "@/components/ScrollSection/ScrollSection";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Efectele globale de scroll */}
      <SmoothScroll />

      {/* Secțiuni cu animații la scroll */}
      <VideoHero />

      <ScrollSection stagger={true}>
        <Ehrlichkeit />
      </ScrollSection>

      <ScrollSection>
        <ReferenzenHero />
      </ScrollSection>

      <ScrollSection stagger={true}>
        <QualitatBanner />
      </ScrollSection>

      <ScrollSection>
        <KuechenHero />
      </ScrollSection>

      <ScrollSection stagger={true}>
        <ServiceBanner />
      </ScrollSection>

      <ScrollSection>
        <CtaSection />
      </ScrollSection>

      <ScrollSection stagger={true}>
        <DetailLoesungen />
      </ScrollSection>

      <ScrollSection>
        <Leistungen />
      </ScrollSection>

      <ScrollSection stagger={true}>
        <ServicesOverview />
      </ScrollSection>

      <ScrollSection>
        <KitchenShowcase />
      </ScrollSection>

      <ScrollSection>
        <ReviewsSection />
      </ScrollSection>

      <ScrollSection stagger={true}>
        <FAQSection />
      </ScrollSection>

      <ScrollSection>
        <ContactForm />
      </ScrollSection>
    </div>
  );
}

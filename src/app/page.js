import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import ProductsSection from "../components/ProductsSection";
import AdvantagesSection from "../components/AdvantagesSection";
import SelectionGuideSection from "../components/SelectionGuideSection";
import FaqSection from "../components/FaqSection";
import ContactUsSection from "../components/ContactUsSection";

export default function Home() {
  return (
    <Layout>
      <HomePage />
      <ProductsSection />
      <AdvantagesSection />
      <SelectionGuideSection />
      <FaqSection />
      <ContactUsSection />
    </Layout>
  );
}


import { Helmet } from "react-helmet-async";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Precios y Planes | Genoma AI - Desde $47/mes</title>
        <meta name="description" content="Planes transparentes para empresas y agencias. Agentes IA de texto desde $47/mes, con voz desde $97/mes. CRM gratis incluido. Sin costos ocultos." />
        <meta property="og:title" content="Precios y Planes | Genoma AI - Desde $47/mes" />
        <meta property="og:description" content="Planes transparentes para empresas y agencias. Agentes IA de texto desde $47/mes, con voz desde $97/mes. CRM gratis incluido." />
        <meta property="og:url" content="https://genomai.ai/pricing" />
        <meta property="og:image" content="https://genomai.ai/og-image.png" />
        <link rel="canonical" href="https://genomai.ai/pricing" />
      </Helmet>
      <div className="pt-24">
        <PricingSection showAll={true} />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
};

export default Pricing;

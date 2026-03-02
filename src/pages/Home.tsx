import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import DualTrackSection from "@/components/DualTrackSection";
import PricingSection from "@/components/PricingSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es Genoma AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Genoma AI es una plataforma SaaS que te permite crear y desplegar agentes de IA conversacional que pueden manejar llamadas telefónicas, mensajes de WhatsApp, chat web y más. Nuestros agentes se integran nativamente con GoHighLevel y otros CRMs."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito conocimientos técnicos para usarlo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para nada. Genoma AI está diseñado para ser sin código. Puedes configurar tu agente de IA en minutos usando nuestra interfaz intuitiva. No necesitas desarrolladores."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué idiomas soportan los agentes IA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestros agentes soportan inglés y español de forma nativa, con voces naturales impulsadas por ElevenLabs. Idiomas adicionales están disponibles bajo solicitud."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona el programa de marca blanca?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con nuestros planes de Agencia, obtienes una versión completamente personalizada de la plataforma con tu logo, dominio y precios propios. Tus clientes nunca ven la marca Genoma AI."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo integrarlo con mi CRM existente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "¡Sí! Ofrecemos integración nativa con GoHighLevel, y también soportamos conexiones vía Zapier, Make y API directa para otros CRMs como HubSpot, Salesforce y más."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay prueba gratuita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos una prueba gratuita para que puedas probar la plataforma antes de comprometerte. No se requiere tarjeta de crédito para comenzar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye el CRM gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada plan incluye un CRM completo con gestión de contactos, seguimiento de pipeline, historial de conversaciones y automatización básica. Es todo lo que necesitas para gestionar tus leads."
      }
    }
  ]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Genoma AI",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Plataforma de agentes IA conversacionales para empresas y agencias.",
  "url": "https://genomai.ai",
  "author": {
    "@type": "Organization",
    "name": "Genoma AI",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Winter Park",
      "addressRegion": "FL",
      "postalCode": "32792",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-305-525-6302",
      "contactType": "sales",
      "availableLanguage": ["Spanish", "English"]
    }
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "47",
    "highPrice": "497",
    "priceCurrency": "USD"
  }
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Genoma AI | Agentes IA Conversacionales para Empresas y Agencias</title>
        <meta name="description" content="Automatiza llamadas, califica leads y agenda citas con agentes de IA conversacional que se integran con tu CRM. Para empresas y agencias en USA y LATAM." />
        <meta property="og:title" content="Genoma AI | Agentes IA que Suenan Humanos y Trabajan 24/7" />
        <meta property="og:description" content="Plataforma de agentes IA conversacionales para WhatsApp, Instagram, Facebook, llamadas y chat web. CRM gratis incluido." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genomai.ai/" />
        <meta property="og:image" content="https://genomai.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Genoma AI | Agentes IA Conversacionales" />
        <meta name="twitter:description" content="Automatiza llamadas, califica leads y agenda citas con agentes de IA conversacional que se integran con tu CRM." />
        <meta name="twitter:image" content="https://genomai.ai/og-image.png" />
        <link rel="canonical" href="https://genomai.ai/" />
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <HeroSection />
      <BenefitsSection />
      <UseCasesSection />
      <DualTrackSection />
      <PricingSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;

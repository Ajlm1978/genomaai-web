import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const TermsOfService = () => {
  const { i18n } = useTranslation();
  const isEs = i18n.language === "es";

  return (
    <>
      <Helmet>
        <title>Términos de Servicio | Genoma AI</title>
        <meta name="description" content="Términos de servicio de Genoma AI. Lee los términos y condiciones que rigen el uso de nuestra plataforma de agentes IA conversacionales." />
        <meta property="og:title" content="Términos de Servicio | Genoma AI" />
        <meta property="og:url" content="https://genomai.ai/terms-of-service" />
        <link rel="canonical" href="https://genomai.ai/terms-of-service" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {isEs ? "Términos de Servicio" : "Terms of Service"}
          </h1>
          <p className="text-gray-400 mb-8">
            {isEs ? "Última actualización: Febrero 2026" : "Last updated: February 2026"}
          </p>
          <div className="prose prose-invert prose-sm max-w-none text-gray-300 space-y-6">
            <p>
              {isEs
                ? "Al utilizar los servicios de Genoma AI, usted acepta estos términos de servicio. Por favor léalos cuidadosamente."
                : "By using Genoma AI services, you agree to these terms of service. Please read them carefully."}
            </p>
            <h2 className="text-xl font-semibold text-white">
              {isEs ? "Uso del Servicio" : "Use of Service"}
            </h2>
            <p>
              {isEs
                ? "Genoma AI le otorga una licencia limitada, no exclusiva y no transferible para usar nuestra plataforma de acuerdo con el plan de suscripción seleccionado."
                : "Genoma AI grants you a limited, non-exclusive, non-transferable license to use our platform in accordance with your selected subscription plan."}
            </p>
            <h2 className="text-xl font-semibold text-white">
              {isEs ? "Pagos y Suscripciones" : "Payments and Subscriptions"}
            </h2>
            <p>
              {isEs
                ? "Las suscripciones se facturan mensualmente. Puede cancelar en cualquier momento. Los reembolsos están sujetos a nuestra política de reembolsos."
                : "Subscriptions are billed monthly. You may cancel at any time. Refunds are subject to our refund policy."}
            </p>
            <h2 className="text-xl font-semibold text-white">
              {isEs ? "Contacto" : "Contact"}
            </h2>
            <p>
              {isEs
                ? "Para preguntas sobre estos términos, contáctenos en ventas@genomai.ai"
                : "For questions about these terms, contact us at ventas@genomai.ai"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;

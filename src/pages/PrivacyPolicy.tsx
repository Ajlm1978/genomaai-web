import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const isEs = i18n.language === "es";

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          {isEs ? "Política de Privacidad" : "Privacy Policy"}
        </h1>
        <p className="text-gray-400 mb-8">
          {isEs ? "Última actualización: Febrero 2026" : "Last updated: February 2026"}
        </p>
        <div className="prose prose-invert prose-sm max-w-none text-gray-300 space-y-6">
          <p>
            {isEs
              ? "En Genoma AI, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política describe cómo recopilamos, usamos y protegemos su información personal."
              : "At Genoma AI, we take our users' privacy very seriously. This policy describes how we collect, use, and protect your personal information."}
          </p>
          <h2 className="text-xl font-semibold text-white">
            {isEs ? "Información que Recopilamos" : "Information We Collect"}
          </h2>
          <p>
            {isEs
              ? "Recopilamos información que usted nos proporciona directamente, como su nombre, dirección de correo electrónico y número de teléfono cuando se registra en nuestros servicios o se comunica con nosotros."
              : "We collect information you provide directly to us, such as your name, email address, and phone number when you register for our services or contact us."}
          </p>
          <h2 className="text-xl font-semibold text-white">
            {isEs ? "Uso de la Información" : "Use of Information"}
          </h2>
          <p>
            {isEs
              ? "Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, así como para comunicarnos con usted sobre actualizaciones y ofertas."
              : "We use the collected information to provide, maintain, and improve our services, as well as to communicate with you about updates and offers."}
          </p>
          <h2 className="text-xl font-semibold text-white">
            {isEs ? "Contacto" : "Contact"}
          </h2>
          <p>
            {isEs
              ? "Si tiene preguntas sobre esta política de privacidad, contáctenos en info@genomaai.com"
              : "If you have questions about this privacy policy, contact us at info@genomaai.com"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

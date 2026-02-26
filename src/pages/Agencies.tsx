import { useTranslation } from "react-i18next";
import { Check, ArrowRight, Users, Palette, BarChart3, Shield, Headphones, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const agencyFeatures = [
  { icon: Palette, key: "branding" },
  { icon: Users, key: "clients" },
  { icon: BarChart3, key: "revenue" },
  { icon: Shield, key: "support" },
  { icon: Headphones, key: "training" },
  { icon: Rocket, key: "scale" },
];

const agencyFeaturesEn: Record<string, { title: string; desc: string }> = {
  branding: { title: "Your Brand, Everywhere", desc: "Custom logo, domain, and colors. Your clients see only your brand." },
  clients: { title: "Multi-Client Management", desc: "Manage all client accounts from a single dashboard." },
  revenue: { title: "Recurring Revenue", desc: "Set your own pricing and keep the margin. High-profit SaaS model." },
  support: { title: "Dedicated Support", desc: "Priority support channel exclusively for agency partners." },
  training: { title: "Training & Resources", desc: "Complete onboarding materials and sales training for your team." },
  scale: { title: "Scale Without Limits", desc: "Start with 5 clients, grow to unlimited. No technical barriers." },
};

const agencyFeaturesEs: Record<string, { title: string; desc: string }> = {
  branding: { title: "Tu Marca, En Todos Lados", desc: "Logo, dominio y colores personalizados. Tus clientes solo ven tu marca." },
  clients: { title: "Gestión Multi-Cliente", desc: "Administra todas las cuentas de clientes desde un solo panel." },
  revenue: { title: "Ingresos Recurrentes", desc: "Establece tus propios precios y quédate con el margen. Modelo SaaS de alto beneficio." },
  support: { title: "Soporte Dedicado", desc: "Canal de soporte prioritario exclusivo para socios de agencia." },
  training: { title: "Capacitación y Recursos", desc: "Materiales de onboarding completos y capacitación de ventas para tu equipo." },
  scale: { title: "Escala Sin Límites", desc: "Comienza con 5 clientes, crece sin límite. Sin barreras técnicas." },
};

const Agencies = () => {
  const { t, i18n } = useTranslation(["homepage", "common"]);
  const features = i18n.language === "es" ? agencyFeaturesEs : agencyFeaturesEn;
  const agencyPlansFeatures = t("homepage:pricing.plans.agency.features", { returnObjects: true }) as string[];
  const agencyProFeatures = t("homepage:pricing.plans.agencyPro.features", { returnObjects: true }) as string[];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            WHITE LABEL
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {i18n.language === "es"
              ? "Lanza Tu Propia Agencia de IA"
              : "Launch Your Own AI Agency"}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            {i18n.language === "es"
              ? "Revende agentes de IA conversacional bajo tu propia marca. Sin desarrollo, sin complicaciones. Solo configura, personaliza y vende."
              : "Resell conversational AI agents under your own brand. No development, no hassle. Just configure, customize, and sell."}
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all group"
          >
            {i18n.language === "es" ? "Ver Planes de Agencia" : "See Agency Plans"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Agency Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencyFeatures.map(({ icon: Icon, key }) => (
              <div key={key} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-purple-500/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{features[key].title}</h3>
                <p className="text-gray-400 text-sm">{features[key].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Pricing */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {i18n.language === "es" ? "Planes para Agencias" : "Agency Plans"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Agency */}
            <div className="p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/5 to-transparent">
              <h3 className="text-xl font-bold text-white mb-1">{t("homepage:pricing.plans.agency.name")}</h3>
              <p className="text-gray-400 text-sm mb-4">{t("homepage:pricing.plans.agency.description")}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$197</span>
                <span className="text-gray-400 text-sm">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                {agencyPlansFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/17862337574?text=I%20want%20the%20Agency%20plan"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 text-sm font-semibold border border-purple-500/30 text-purple-400 rounded-xl hover:bg-purple-500/10 transition-all"
              >
                {t("homepage:pricing.cta")}
              </a>
            </div>

            {/* Agency Pro */}
            <div className="relative p-8 rounded-2xl border border-purple-500/40 bg-gradient-to-b from-purple-500/10 to-transparent shadow-xl shadow-purple-500/5">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                BEST VALUE
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{t("homepage:pricing.plans.agencyPro.name")}</h3>
              <p className="text-gray-400 text-sm mb-4">{t("homepage:pricing.plans.agencyPro.description")}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$497</span>
                <span className="text-gray-400 text-sm">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                {agencyProFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/17862337574?text=I%20want%20the%20Agency%20Pro%20plan"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 text-sm font-semibold bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                {t("homepage:pricing.cta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {i18n.language === "es"
              ? "¿Listo para Lanzar tu Agencia de IA?"
              : "Ready to Launch Your AI Agency?"}
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            {i18n.language === "es"
              ? "Agenda una demo personalizada y descubre cómo puedes generar ingresos recurrentes con agentes de IA."
              : "Schedule a personalized demo and discover how you can generate recurring revenue with AI agents."}
          </p>
          <a
            href="https://wa.me/17862337574?text=I%20want%20a%20demo%20for%20the%20agency%20program"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all group"
          >
            {i18n.language === "es" ? "Agenda Demo Ahora" : "Schedule Demo Now"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Agencies;

import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContentFAQSection from '../../components/ContentFAQSection';
import CTABanner from '../../components/CTABanner';
import RelatedContent from '../../components/RelatedContent';
import { getComparacionBySlug, comparaciones } from '../../data/comparaciones';

const genomaFeatures = [
  "Agentes IA conversacionales avanzados",
  "Integración nativa con WhatsApp Business API",
  "CRM incluido en todos los planes",
  "Integración con GoHighLevel",
  "Soporte en español 24/7",
  "Onboarding personalizado",
  "Marca blanca para agencias",
  "Pre-rendering SEO incluido",
];

export default function CompararPage() {
  const { slug } = useParams<{ slug: string }>();
  const comp = slug ? getComparacionBySlug(slug) : undefined;

  if (!comp) return <Navigate to="/comparar" replace />;

  const otherComps = comparaciones
    .filter(c => c.slug !== comp.slug)
    .slice(0, 3)
    .map(c => ({ title: c.title, path: `/comparar/${c.slug}`, description: c.description }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": comp.title,
    "description": comp.description,
    "datePublished": comp.publishedDate,
    "dateModified": comp.modifiedDate,
    "author": { "@type": "Organization", "name": "Genoma AI" }
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <SEOHead
        title={comp.title}
        description={comp.description}
        url={`https://genomai.ai/comparar/${comp.slug}`}
        type="article"
        publishedDate={comp.publishedDate}
        modifiedDate={comp.modifiedDate}
        schema={schema}
        faqItems={comp.faqItems}
      />
      <Breadcrumbs items={[
        { label: 'Inicio', path: '/' },
        { label: 'Comparativas', path: '/comparar' },
        { label: `Genoma AI vs ${comp.competitor}` }
      ]} />

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <header className="pt-6 pb-10">
          <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wide mb-4">
            Comparativa
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {comp.title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">{comp.description}</p>
        </header>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Comparación de Funcionalidades</h2>
          <div className="bg-[#0d1f3c] border border-cyan-500/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-[#060e1a] p-4 border-b border-white/5">
              <span className="text-gray-400 text-sm font-medium">Funcionalidad</span>
              <span className="text-cyan-400 text-sm font-bold text-center">Genoma AI</span>
              <span className="text-gray-400 text-sm font-medium text-center">{comp.competitor}</span>
            </div>
            {genomaFeatures.map((feature, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
                <span className="text-gray-300 text-sm">{feature}</span>
                <div className="flex justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex justify-center">
                  {i < 4 ? (
                    <XCircle className="w-5 h-5 text-red-400/60" />
                  ) : (
                    <span className="text-gray-500 text-xs">Parcial</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12 bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">Veredicto Final</h2>
          <p className="text-gray-400 leading-relaxed">
            Genoma AI es la opción superior para empresas latinoamericanas que necesitan automatización conversacional avanzada, especialmente si usan WhatsApp como canal principal de ventas. Con soporte en español, integración con GoHighLevel y precios accesibles desde $97/mes, ofrece una propuesta de valor difícil de superar frente a {comp.competitor}.
          </p>
        </section>

        <CTABanner
          headline={`¿Convencido? Prueba Genoma AI hoy`}
          subtext={`Configura tu agente IA en menos de 24 horas. Sin código. Sin tarjeta de crédito para empezar.`}
          ctaText="Ver Planes y Precios"
          ctaLink="/pricing"
        />

        {comp.faqItems.length > 0 && (
          <ContentFAQSection items={comp.faqItems} />
        )}

        {otherComps.length > 0 && (
          <RelatedContent title="Otras Comparativas" items={otherComps} />
        )}

        <div className="flex items-center pt-8 border-t border-white/5 mt-8">
          <Link to="/comparar" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Ver todas las comparativas
          </Link>
        </div>
      </div>
    </div>
  );
}

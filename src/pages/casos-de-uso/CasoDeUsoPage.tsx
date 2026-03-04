import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContentFAQSection from '../../components/ContentFAQSection';
import CTABanner from '../../components/CTABanner';
import RelatedContent from '../../components/RelatedContent';
import { getCasoBySlug, casosDeUso } from '../../data/casos-de-uso';

export default function CasoDeUsoPage() {
  const { slug } = useParams<{ slug: string }>();
  const caso = slug ? getCasoBySlug(slug) : undefined;

  if (!caso) return <Navigate to="/casos-de-uso" replace />;

  const otherCasos = casosDeUso
    .filter(c => c.slug !== caso.slug)
    .slice(0, 3)
    .map(c => ({ title: c.title, path: `/casos-de-uso/${c.slug}`, description: c.heroSubtext }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": caso.title,
    "description": caso.description,
    "step": caso.steps.map((step, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "text": step
    }))
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <SEOHead
        title={caso.title}
        description={caso.description}
        url={`https://genomai.ai/casos-de-uso/${caso.slug}`}
        schema={schema}
        faqItems={caso.faqItems}
      />
      <Breadcrumbs items={[
        { label: 'Inicio', path: '/' },
        { label: 'Casos de Uso', path: '/casos-de-uso' },
        { label: caso.heroHeadline }
      ]} />

      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* Hero */}
        <header className="pt-6 pb-12 text-center">
          <div className="text-5xl mb-4">{caso.icon}</div>
          <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wide mb-4">
            Caso de Uso
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {caso.heroHeadline}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {caso.heroSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              to="/pricing"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Implementar Ahora
            </Link>
            <Link
              to="/use-cases"
              className="px-6 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/5 transition-all"
            >
              Ver Más Casos de Uso
            </Link>
          </div>
        </header>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">¿Cómo Funciona?</h2>
          <div className="space-y-3">
            {caso.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#0d1f3c] border border-cyan-500/10 rounded-xl p-4">
                <div className="w-8 h-8 bg-cyan-500/10 text-cyan-400 text-sm font-bold rounded-lg flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <span className="text-gray-300 text-sm leading-relaxed pt-1">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Resultados que Puedes Esperar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caso.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#0d1f3c] border border-emerald-500/10 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <CTABanner
          headline="¿Listo para implementarlo en tu negocio?"
          subtext="Configura este caso de uso en menos de 24 horas. Sin código. Sin complicaciones."
          ctaText="Ver Planes y Precios"
          ctaLink="/pricing"
        />

        {caso.faqItems.length > 0 && (
          <ContentFAQSection items={caso.faqItems} />
        )}

        {otherCasos.length > 0 && (
          <RelatedContent title="Otros Casos de Uso" items={otherCasos} />
        )}

        <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-8">
          <Link to="/casos-de-uso" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Ver todos los casos de uso
          </Link>
          <Link to="/pricing" className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors text-sm font-medium">
            Ver Precios <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

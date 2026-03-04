import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContentFAQSection from '../../components/ContentFAQSection';
import CTABanner from '../../components/CTABanner';
import RelatedContent from '../../components/RelatedContent';
import { getIndustriaBySlug, industrias } from '../../data/industrias';

export default function IndustriaPage() {
  const { slug } = useParams<{ slug: string }>();
  const industria = slug ? getIndustriaBySlug(slug) : undefined;

  if (!industria) return <Navigate to="/industrias" replace />;

  const otherIndustrias = industrias
    .filter(i => i.slug !== industria.slug)
    .slice(0, 3)
    .map(i => ({ title: i.title, path: `/industrias/${i.slug}`, description: i.description }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": industria.title,
    "description": industria.description,
    "url": `https://genomai.ai/industrias/${industria.slug}`
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <SEOHead
        title={industria.title}
        description={industria.description}
        url={`https://genomai.ai/industrias/${industria.slug}`}
        schema={schema}
        faqItems={industria.faqItems}
      />
      <Breadcrumbs items={[
        { label: 'Inicio', path: '/' },
        { label: 'Industrias', path: '/industrias' },
        { label: industria.title }
      ]} />

      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* Hero */}
        <header className="pt-6 pb-12 text-center">
          <div className="text-5xl mb-4">{industria.icon}</div>
          <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wide mb-4">
            Solución por Industria
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {industria.heroHeadline}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {industria.heroSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              to="/pricing"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Ver Planes y Precios
            </Link>
            <Link
              to="/use-cases"
              className="px-6 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/5 transition-all"
            >
              Ver Casos de Uso
            </Link>
          </div>
        </header>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Beneficios Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industria.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#0d1f3c] border border-cyan-500/10 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Casos de Uso Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industria.useCases.map((uc, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#0d1f3c] border border-white/5 rounded-xl p-4">
                <span className="w-7 h-7 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-lg flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-300 text-sm">{uc}</span>
              </div>
            ))}
          </div>
        </section>

        <CTABanner
          headline={`Implementa IA en tu ${industria.title.split(' ').slice(-2).join(' ')} hoy`}
          subtext="Configura tu agente en menos de 24 horas. Sin código. Sin tarjeta de crédito."
          ctaText="Empezar Ahora"
          ctaLink="/pricing"
        />

        {industria.faqItems.length > 0 && (
          <ContentFAQSection items={industria.faqItems} />
        )}

        {otherIndustrias.length > 0 && (
          <RelatedContent title="Otras Industrias" items={otherIndustrias} />
        )}

        <div className="flex items-center pt-8 border-t border-white/5 mt-8">
          <Link to="/industrias" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Ver todas las industrias
          </Link>
        </div>
      </div>
    </div>
  );
}

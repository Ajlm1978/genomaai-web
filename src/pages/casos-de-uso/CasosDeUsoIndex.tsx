import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { casosDeUso } from '../../data/casos-de-uso';

export default function CasosDeUsoIndex() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <SEOHead
        title="Casos de Uso de Agentes IA: Automatiza tu Negocio con Genoma AI"
        description="Descubre cómo usar agentes de IA para automatizar ventas, atención al cliente, agendamiento y más. Casos de uso reales con resultados medibles."
        url="https://genomai.ai/casos-de-uso"
      />
      <Breadcrumbs items={[
        { label: 'Inicio', path: '/' },
        { label: 'Casos de Uso' }
      ]} />

      <section className="pt-8 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Casos de Uso</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ¿Qué Puede Hacer <span className="text-cyan-400">tu Agente IA?</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Desde recepcionistas virtuales hasta reactivación de bases de datos. Descubre todos los casos de uso que puedes implementar hoy.
        </p>
      </section>

      <section className="px-4 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {casosDeUso.map(caso => (
            <Link
              key={caso.slug}
              to={`/casos-de-uso/${caso.slug}`}
              className="group bg-[#0d1f3c] border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{caso.icon}</div>
              <h2 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                {caso.heroHeadline}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                {caso.heroSubtext}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {caso.benefits.slice(0, 2).map((b, i) => (
                  <span key={i} className="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded-lg line-clamp-1">
                    {b.length > 35 ? b.substring(0, 35) + '...' : b}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm text-cyan-400 font-medium">
                Ver caso de uso <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

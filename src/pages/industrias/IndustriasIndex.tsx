import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { industrias } from '../../data/industrias';

export default function IndustriasIndex() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <SEOHead
        title="Agentes IA por Industria: Soluciones Específicas para tu Sector"
        description="Descubre cómo los agentes de IA de Genoma AI se adaptan a tu industria. Soluciones para agencias de marketing, clínicas, inmobiliarias y profesionales independientes."
        url="https://genomai.ai/industrias"
      />
      <Breadcrumbs items={[
        { label: 'Inicio', path: '/' },
        { label: 'Industrias' }
      ]} />

      <section className="pt-8 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Por Industria</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          IA para <span className="text-cyan-400">Tu Industria</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Soluciones de agentes IA adaptadas a las necesidades específicas de cada sector. Mismo poder, diferente enfoque.
        </p>
      </section>

      <section className="px-4 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industrias.map(ind => (
            <Link
              key={ind.slug}
              to={`/industrias/${ind.slug}`}
              className="group bg-[#0d1f3c] border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {ind.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                    {ind.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {ind.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ind.useCases.slice(0, 3).map((uc, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-lg">
                        {uc}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-cyan-400 font-medium">
                    Ver solución <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Scale } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { comparaciones } from '../../data/comparaciones';

export default function CompararIndex() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <SEOHead
        title="Comparativas de Agentes IA: Genoma AI vs Competidores"
        description="Comparaciones detalladas de Genoma AI con otras plataformas de automatización y chatbots. Descubre por qué Genoma AI es la mejor opción para tu negocio."
        url="https://genomai.ai/comparar"
      />
      <Breadcrumbs items={[
        { label: 'Inicio', path: '/' },
        { label: 'Comparativas' }
      ]} />

      <section className="pt-8 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Comparativas</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Genoma AI vs <span className="text-cyan-400">Competidores</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Comparaciones honestas y detalladas para que tomes la mejor decisión para tu negocio.
        </p>
      </section>

      <section className="px-4 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {comparaciones.map(comp => (
            <Link
              key={comp.slug}
              to={`/comparar/${comp.slug}`}
              className="group bg-[#0d1f3c] border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                  <Scale className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Genoma AI vs</span>
                  <p className="text-white font-bold">{comp.competitor}</p>
                </div>
              </div>
              <h2 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                {comp.title}
              </h2>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
                {comp.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-cyan-400 font-medium">
                Ver comparativa <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

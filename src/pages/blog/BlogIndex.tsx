import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { blogPosts } from '../../data/blog-posts';

export default function BlogIndex() {
  const pillarPosts = blogPosts.filter(p => p.isPillar);
  const regularPosts = blogPosts.filter(p => !p.isPillar);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <SEOHead
        title="Blog de Agentes IA y Automatización | Genoma AI"
        description="Guías, comparativas y casos de uso sobre agentes de inteligencia artificial para empresas. Aprende a automatizar ventas, atención al cliente y procesos con IA."
        url="https://genomai.ai/blog"
      />
      <Breadcrumbs items={[
        { label: 'Inicio', path: '/' },
        { label: 'Blog' }
      ]} />

      {/* Hero */}
      <section className="pt-8 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Blog</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Aprende sobre <span className="text-cyan-400">Agentes IA</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Guías prácticas, comparativas y casos de uso reales para automatizar tu negocio con inteligencia artificial.
        </p>
      </section>

      {/* Pillar Posts */}
      {pillarPosts.length > 0 && (
        <section className="px-4 max-w-7xl mx-auto mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Guías Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillarPosts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-[#0d1f3c] border border-cyan-500/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-200"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-cyan-400 font-medium">
                    Leer guía <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="px-4 max-w-7xl mx-auto mb-16">
          <h2 className="text-xl font-semibold text-white mb-6">Artículos Recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {regularPosts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-[#0d1f3c] border border-cyan-500/10 rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                  {post.description}
                </p>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {blogPosts.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p>Próximamente nuevos artículos</p>
        </div>
      )}
    </div>
  );
}

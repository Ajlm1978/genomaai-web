import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContentFAQSection from '../../components/ContentFAQSection';
import CTABanner from '../../components/CTABanner';
import RelatedContent from '../../components/RelatedContent';
import { getPostBySlug, getRelatedPosts, blogPosts } from '../../data/blog-posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post.slug, post.category);
  const allPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);
  const relatedItems = (related.length > 0 ? related : allPosts).map(p => ({
    title: p.title,
    path: `/blog/${p.slug}`,
    description: p.description
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.publishedDate,
    "dateModified": post.modifiedDate,
    "author": { "@type": "Organization", "name": "Genoma AI" },
    "publisher": {
      "@type": "Organization",
      "name": "Genoma AI",
      "logo": { "@type": "ImageObject", "url": "https://genomai.ai/genoma-logo.jpg" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://genomai.ai/blog/${post.slug}` }
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <SEOHead
        title={post.title}
        description={post.description}
        url={`https://genomai.ai/blog/${post.slug}`}
        type="article"
        publishedDate={post.publishedDate}
        modifiedDate={post.modifiedDate}
        schema={schema}
        faqItems={post.faqItems}
      />
      <Breadcrumbs items={[
        { label: 'Inicio', path: '/' },
        { label: 'Blog', path: '/blog' },
        { label: post.title }
      ]} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Header */}
        <header className="pt-6 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wide">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime} de lectura
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.publishedDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Content placeholder */}
        <div className="prose-content text-gray-300 leading-relaxed space-y-6">
          <p className="text-gray-400 italic border-l-2 border-cyan-500/30 pl-4">
            Este artículo está siendo desarrollado con contenido completo. La estructura y metadata SEO están configuradas y listas para indexación.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Introducción</h2>
          <p>
            En el panorama empresarial actual, la automatización con inteligencia artificial ya no es un lujo reservado para grandes corporaciones. Las pequeñas y medianas empresas tienen acceso a herramientas poderosas que pueden transformar cómo operan, venden y atienden a sus clientes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">¿Por qué esto importa para tu negocio?</h2>
          <p>
            La competencia no espera. Mientras tu negocio responde manualmente a consultas, califica leads uno por uno y coordina citas por teléfono, tus competidores que ya adoptaron IA están cerrando más ventas con menos esfuerzo.
          </p>

          <p>
            Con Genoma AI, puedes implementar agentes de inteligencia artificial que trabajan 24/7, responden instantáneamente y aprenden de cada interacción para mejorar continuamente.
          </p>
        </div>

        {/* CTA */}
        <CTABanner
          headline="¿Listo para implementar esto en tu negocio?"
          subtext="Configura tu agente IA en menos de 24 horas. Sin código. Sin complicaciones."
          ctaText="Ver Planes y Precios"
          ctaLink="/pricing"
        />

        {/* FAQ */}
        {post.faqItems.length > 0 && (
          <ContentFAQSection items={post.faqItems} />
        )}

        {/* Related */}
        {relatedItems.length > 0 && (
          <RelatedContent title="Artículos Relacionados" items={relatedItems} />
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-8">
          <Link to="/blog" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al Blog
          </Link>
          <Link to="/pricing" className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors text-sm font-medium">
            Ver Precios <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}

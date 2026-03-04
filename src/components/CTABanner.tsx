import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'primary' | 'secondary' | 'inline';
}

export default function CTABanner({
  headline = "¿Listo para automatizar tu negocio con IA?",
  subtext = "Configura tu agente IA en minutos. Sin código. Sin tarjeta de crédito.",
  ctaText = "Empezar Gratis",
  ctaLink = "/pricing",
  variant = 'primary',
}: CTABannerProps) {
  return (
    <div className={`cta-banner-section rounded-2xl p-8 md:p-12 my-12 text-center ${
      variant === 'primary'
        ? 'bg-gradient-to-br from-[#0d1f3c] to-[#0a1628] border border-cyan-500/20'
        : variant === 'secondary'
        ? 'bg-[#060e1a] border border-white/5'
        : 'bg-transparent border border-cyan-500/10'
    }`}>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{headline}</h3>
      <p className="text-gray-400 mb-6 max-w-xl mx-auto">{subtext}</p>
      <Link
        to={ctaLink}
        className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 hover:scale-105"
      >
        {ctaText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

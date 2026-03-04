import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedItem {
  title: string;
  path: string;
  description?: string;
}

interface RelatedContentProps {
  title?: string;
  items: RelatedItem[];
}

export default function RelatedContent({ title = "Contenido Relacionado", items }: RelatedContentProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="my-12">
      <h2 className="text-xl font-bold text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="group p-5 bg-[#0d1f3c] border border-cyan-500/10 rounded-xl hover:border-cyan-500/30 transition-all duration-200 hover:bg-[#0d1f3c]/80"
          >
            <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{item.description}</p>
            )}
            <span className="inline-flex items-center gap-1 text-xs text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              Leer más <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    ...(item.path && { "item": `https://genomai.ai${item.path}` })
  }));

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": schemaItems
          })}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="breadcrumbs flex items-center gap-1 text-sm text-gray-400 py-3 px-4 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-600" />}
            {item.path ? (
              <Link to={item.path} className="hover:text-cyan-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-300 font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}

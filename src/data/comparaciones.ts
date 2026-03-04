export interface Comparacion {
  slug: string;
  title: string;
  description: string;
  competitor: string;
  publishedDate: string;
  modifiedDate: string;
  faqItems: { question: string; answer: string }[];
}

export const comparaciones: Comparacion[] = [
  {
    slug: "genoma-ai-vs-manychat",
    title: "Genoma AI vs ManyChat: ¿Cuál es Mejor para Automatizar WhatsApp?",
    description: "Comparación detallada entre Genoma AI y ManyChat para automatización de WhatsApp y ventas. Precios, funciones, integraciones y cuál elegir según tu negocio.",
    competitor: "ManyChat",
    publishedDate: "2026-03-10",
    modifiedDate: "2026-03-10",
    faqItems: [
      {
        question: "¿Cuál es la principal diferencia entre Genoma AI y ManyChat?",
        answer: "ManyChat es una herramienta de marketing por mensajería con flujos predefinidos. Genoma AI ofrece agentes IA conversacionales que entienden contexto, responden preguntas abiertas y se integran con CRM y sistemas de ventas."
      },
      {
        question: "¿Genoma AI funciona con WhatsApp Business?",
        answer: "Sí. Genoma AI se integra nativamente con WhatsApp Business API para automatizar conversaciones de ventas y atención al cliente."
      }
    ]
  },
  {
    slug: "genoma-ai-vs-tidio",
    title: "Genoma AI vs Tidio: Comparativa de Agentes IA para Empresas",
    description: "Análisis completo de Genoma AI frente a Tidio. Descubre cuál plataforma ofrece mejor automatización, integraciones y precio para tu negocio.",
    competitor: "Tidio",
    publishedDate: "2026-03-17",
    modifiedDate: "2026-03-17",
    faqItems: [
      {
        question: "¿Tidio o Genoma AI para e-commerce?",
        answer: "Tidio está más orientado a soporte en sitios web. Genoma AI es ideal para negocios que quieren automatizar ventas por WhatsApp, calificar leads y agendar citas automáticamente."
      }
    ]
  },
  {
    slug: "genoma-ai-vs-intercom",
    title: "Genoma AI vs Intercom: ¿Cuál Automatiza Mejor el Soporte al Cliente?",
    description: "Comparación entre Genoma AI e Intercom para soporte y ventas automatizadas. Precios, capacidades de IA y ROI para empresas latinoamericanas.",
    competitor: "Intercom",
    publishedDate: "2026-03-24",
    modifiedDate: "2026-03-24",
    faqItems: [
      {
        question: "¿Intercom es demasiado caro para pequeñas empresas?",
        answer: "Intercom puede costar $500-$1000+/mes para equipos pequeños. Genoma AI ofrece capacidades similares o superiores desde $97/mes, con soporte en español y enfoque en el mercado latinoamericano."
      }
    ]
  }
];

export function getComparacionBySlug(slug: string): Comparacion | undefined {
  return comparaciones.find(c => c.slug === slug);
}

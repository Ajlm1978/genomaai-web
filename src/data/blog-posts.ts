export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedDate: string;
  modifiedDate: string;
  readTime: string;
  isPillar?: boolean;
  image?: string;
  faqItems: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "que-son-agentes-ia-como-usarlos-en-tu-negocio",
    title: "Qué Son los Agentes IA y Cómo Usarlos en Tu Negocio en 2026",
    description: "Guía completa sobre agentes de inteligencia artificial para empresas. Qué son, cómo funcionan, diferencias con chatbots y cómo implementarlos para automatizar ventas y atención al cliente.",
    category: "Agentes IA",
    tags: ["agentes ia", "automatizacion", "inteligencia artificial", "pymes"],
    publishedDate: "2026-03-15",
    modifiedDate: "2026-03-15",
    readTime: "15 min",
    isPillar: true,
    image: "/blog/images/que-son-agentes-ia.webp",
    faqItems: [
      {
        question: "¿Qué es un agente de inteligencia artificial?",
        answer: "Un agente de IA es un software autónomo que puede mantener conversaciones naturales, tomar decisiones y ejecutar acciones como agendar citas, calificar leads o responder preguntas frecuentes sin intervención humana."
      },
      {
        question: "¿Cuál es la diferencia entre un chatbot y un agente IA?",
        answer: "Un chatbot sigue flujos predefinidos con respuestas limitadas. Un agente IA entiende contexto, aprende de las conversaciones, se integra con herramientas externas y puede manejar situaciones imprevistas de forma autónoma."
      },
      {
        question: "¿Cuánto cuesta implementar un agente IA en mi negocio?",
        answer: "Con plataformas como Genoma AI, puedes tener un agente IA funcional desde $97/mes. No requiere conocimientos técnicos ni desarrollo personalizado."
      },
      {
        question: "¿Los agentes IA reemplazan a los empleados humanos?",
        answer: "No. Los agentes IA manejan tareas repetitivas (preguntas frecuentes, calificación inicial, agendamiento) para que tu equipo humano se enfoque en interacciones de alto valor como cierres de venta y resolución de problemas complejos."
      }
    ]
  },
  {
    slug: "chatbot-vs-agente-ia-cual-necesita-tu-negocio",
    title: "Chatbot vs Agente IA: ¿Cuál Necesita Tu Negocio en 2026?",
    description: "Comparación detallada entre chatbots tradicionales y agentes de IA conversacional. Descubre cuál es la mejor opción para automatizar ventas y atención al cliente en tu empresa.",
    category: "Comparativas",
    tags: ["chatbot", "agente ia", "comparacion", "automatizacion"],
    publishedDate: "2026-03-22",
    modifiedDate: "2026-03-22",
    readTime: "10 min",
    isPillar: false,
    image: "/blog/images/chatbot-vs-agente-ia.webp",
    faqItems: [
      {
        question: "¿Los chatbots tradicionales siguen siendo útiles en 2026?",
        answer: "Para flujos muy simples y predecibles (menús de opciones, FAQ básicas), los chatbots tradicionales aún funcionan. Pero para ventas, calificación de leads y atención compleja, los agentes IA son significativamente superiores."
      },
      {
        question: "¿Cuánto más caro es un agente IA vs un chatbot?",
        answer: "La diferencia es menor de lo que parece. Plataformas como Genoma AI ofrecen agentes IA desde $97/mes, mientras que soluciones de chatbot empresariales pueden costar $200-500/mes. El ROI del agente IA es considerablemente mayor."
      }
    ]
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getRelatedPosts(slug: string, category: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter(p => p.slug !== slug && p.category === category)
    .slice(0, limit);
}

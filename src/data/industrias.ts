export interface Industria {
  slug: string;
  title: string;
  description: string;
  icon: string;
  heroHeadline: string;
  heroSubtext: string;
  benefits: string[];
  useCases: string[];
  faqItems: { question: string; answer: string }[];
}

export const industrias: Industria[] = [
  {
    slug: "agencias-de-marketing",
    title: "Agentes IA para Agencias de Marketing Digital",
    description: "Automatiza la gestión de leads, reportes y comunicación con clientes para tu agencia de marketing. Ofrece agentes IA como servicio premium a tus clientes.",
    icon: "📊",
    heroHeadline: "Escala tu Agencia con Agentes IA",
    heroSubtext: "Automatiza la calificación de leads, seguimiento de campañas y comunicación con clientes. Ofrece IA como servicio adicional y aumenta tu ticket promedio.",
    benefits: [
      "Califica leads de campañas automáticamente 24/7",
      "Reportes automáticos a clientes por WhatsApp",
      "Agentes de marca blanca para revender a tus clientes",
      "Integración con GoHighLevel y herramientas de marketing",
      "Reduce el tiempo de respuesta a leads de horas a segundos"
    ],
    useCases: [
      "Calificación automática de leads de Facebook Ads",
      "Seguimiento post-campaña por WhatsApp",
      "Agendamiento de reuniones de resultados",
      "Reactivación de leads fríos"
    ],
    faqItems: [
      {
        question: "¿Puedo ofrecer agentes IA como servicio a mis clientes de agencia?",
        answer: "Sí. Con el plan Agency de Genoma AI puedes crear agentes de marca blanca para cada cliente, con su branding y dominio personalizado. Es una nueva línea de ingresos recurrentes para tu agencia."
      },
      {
        question: "¿Se integra con GoHighLevel?",
        answer: "Sí. Genoma AI tiene integración nativa con GoHighLevel para sincronizar contactos, pipelines y automatizaciones."
      }
    ]
  },
  {
    slug: "clinicas-y-salud",
    title: "Agentes IA para Clínicas y Consultorios Médicos",
    description: "Automatiza el agendamiento de citas, recordatorios y atención al paciente en tu clínica. Reduce no-shows y mejora la experiencia del paciente con IA conversacional.",
    icon: "🏥",
    heroHeadline: "Automatiza tu Clínica con IA",
    heroSubtext: "Agenda citas 24/7, envía recordatorios automáticos y reduce no-shows hasta un 60%. Tu recepcionista virtual nunca descansa.",
    benefits: [
      "Agendamiento de citas 24/7 por WhatsApp",
      "Recordatorios automáticos para reducir no-shows",
      "Respuesta a preguntas frecuentes sobre servicios",
      "Seguimiento post-consulta automatizado",
      "Integración con sistemas de gestión de clínicas"
    ],
    useCases: [
      "Recepcionista virtual 24/7",
      "Recordatorios de citas por WhatsApp",
      "Pre-consulta y recopilación de síntomas",
      "Seguimiento post-tratamiento"
    ],
    faqItems: [
      {
        question: "¿Los agentes IA pueden agendar citas en mi sistema actual?",
        answer: "Sí. Genoma AI se integra con calendarios y sistemas de gestión de clínicas para agendar, modificar y cancelar citas directamente desde la conversación de WhatsApp."
      },
      {
        question: "¿Es seguro usar IA para comunicaciones con pacientes?",
        answer: "Genoma AI maneja datos con estándares de seguridad empresarial. Los agentes están configurados para escalar a personal humano cuando la situación lo requiere."
      }
    ]
  },
  {
    slug: "inmobiliarias",
    title: "Agentes IA para Inmobiliarias y Agentes de Bienes Raíces",
    description: "Califica compradores y arrendatarios automáticamente, agenda visitas y da seguimiento a prospectos. Cierra más propiedades con menos tiempo de tu equipo.",
    icon: "🏠",
    heroHeadline: "Vende Más Propiedades con IA",
    heroSubtext: "Califica prospectos automáticamente, agenda visitas y da seguimiento 24/7. Tu agente IA trabaja mientras tú cierras tratos.",
    benefits: [
      "Calificación automática de compradores y arrendatarios",
      "Agendamiento de visitas a propiedades",
      "Seguimiento automático de prospectos",
      "Envío de fichas técnicas y fotos por WhatsApp",
      "Integración con CRM inmobiliario"
    ],
    useCases: [
      "Calificación de leads de portales inmobiliarios",
      "Agendamiento de visitas a propiedades",
      "Seguimiento post-visita",
      "Reactivación de prospectos inactivos"
    ],
    faqItems: [
      {
        question: "¿Puede el agente IA enviar fotos y videos de propiedades?",
        answer: "Sí. El agente puede enviar fichas técnicas, fotos, videos y tours virtuales directamente por WhatsApp durante la conversación."
      }
    ]
  },
  {
    slug: "profesionales-independientes",
    title: "Agentes IA para Profesionales Independientes y Consultores",
    description: "Automatiza tu agenda, califica prospectos y gestiona consultas sin contratar personal. Ideal para coaches, consultores, abogados y profesionales independientes.",
    icon: "💼",
    heroHeadline: "Tu Asistente IA Personal",
    heroSubtext: "Gestiona tu agenda, califica clientes potenciales y responde consultas automáticamente. Enfócate en tu trabajo, no en la administración.",
    benefits: [
      "Agenda reuniones y consultas automáticamente",
      "Califica prospectos antes de tu primera reunión",
      "Responde preguntas frecuentes sobre tus servicios",
      "Envía propuestas y materiales automáticamente",
      "Seguimiento de prospectos sin esfuerzo manual"
    ],
    useCases: [
      "Agendamiento de consultas iniciales",
      "Calificación de prospectos",
      "Envío de propuestas y materiales",
      "Seguimiento post-consulta"
    ],
    faqItems: [
      {
        question: "¿Puedo usar Genoma AI si soy un profesional independiente?",
        answer: "Absolutamente. El plan Starter desde $97/mes es ideal para profesionales independientes. Incluye agente IA, CRM básico y automatizaciones esenciales."
      }
    ]
  }
];

export function getIndustriaBySlug(slug: string): Industria | undefined {
  return industrias.find(i => i.slug === slug);
}

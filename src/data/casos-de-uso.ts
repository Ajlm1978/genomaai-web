export interface CasoDeUso {
  slug: string;
  title: string;
  description: string;
  icon: string;
  heroHeadline: string;
  heroSubtext: string;
  steps: string[];
  benefits: string[];
  faqItems: { question: string; answer: string }[];
}

export const casosDeUso: CasoDeUso[] = [
  {
    slug: "recepcionista-virtual",
    title: "Recepcionista Virtual con IA: Atiende Clientes 24/7 sin Personal",
    description: "Implementa una recepcionista virtual con IA que atiende consultas, agenda citas y califica leads automáticamente. Disponible 24/7 por WhatsApp, sin descansos ni ausencias.",
    icon: "🤖",
    heroHeadline: "Tu Recepcionista Virtual Nunca Descansa",
    heroSubtext: "Atiende consultas, agenda citas y califica leads automáticamente. 24/7, sin personal adicional.",
    steps: [
      "El cliente escribe por WhatsApp fuera de horario",
      "El agente IA saluda y entiende la consulta",
      "Responde preguntas frecuentes o agenda una cita",
      "Notifica al equipo humano si requiere atención especial",
      "El cliente queda satisfecho sin esperar"
    ],
    benefits: [
      "Disponibilidad 24/7 sin costo adicional de personal",
      "Tiempo de respuesta instantáneo (menos de 3 segundos)",
      "Consistencia en la atención — siempre el mismo nivel de calidad",
      "Escalada inteligente a humanos cuando es necesario",
      "Registro automático de todas las interacciones en CRM"
    ],
    faqItems: [
      {
        question: "¿Puede la recepcionista virtual agendar citas en mi calendario?",
        answer: "Sí. Se integra con Google Calendar, Calendly y otros sistemas de agendamiento para reservar citas directamente desde la conversación."
      },
      {
        question: "¿Qué pasa si el cliente hace una pregunta que el agente no sabe responder?",
        answer: "El agente está configurado para escalar a un humano cuando no puede resolver la consulta, notificando al equipo con el contexto completo de la conversación."
      },
      {
        question: "¿Cuánto tiempo tarda en configurarse una recepcionista virtual?",
        answer: "Con Genoma AI, puedes tener tu recepcionista virtual funcionando en menos de 24 horas. Solo necesitas proporcionar información sobre tu negocio y servicios."
      }
    ]
  },
  {
    slug: "calificacion-de-leads",
    title: "Calificación Automática de Leads con IA: Cierra Más con Menos Esfuerzo",
    description: "Automatiza la calificación de prospectos con IA conversacional. Filtra leads fríos, identifica compradores listos y entrega a tu equipo de ventas solo los más calificados.",
    icon: "🎯",
    heroHeadline: "Solo Habla con Leads Calificados",
    heroSubtext: "El agente IA filtra, califica y prioriza tus prospectos automáticamente. Tu equipo de ventas solo recibe leads listos para cerrar.",
    steps: [
      "El lead llega desde Facebook Ads, web o WhatsApp",
      "El agente IA inicia conversación y hace preguntas de calificación",
      "Evalúa presupuesto, necesidad y urgencia",
      "Clasifica el lead como frío, tibio o caliente",
      "Notifica al vendedor con el resumen de calificación"
    ],
    benefits: [
      "Reduce el tiempo de calificación de 30 min a 2 min por lead",
      "Tu equipo de ventas se enfoca en leads listos para comprar",
      "Calificación consistente — sin sesgos ni olvidos",
      "Funciona con cualquier volumen de leads",
      "Integración con CRM para seguimiento automático"
    ],
    faqItems: [
      {
        question: "¿Qué preguntas hace el agente para calificar leads?",
        answer: "Puedes personalizar completamente las preguntas de calificación según tu proceso de ventas: presupuesto, timeline, necesidad específica, autoridad de decisión, etc."
      },
      {
        question: "¿Funciona con leads de Facebook Ads?",
        answer: "Sí. Puedes conectar tus campañas de Facebook Ads para que los leads entren directamente al flujo de calificación del agente IA por WhatsApp."
      }
    ]
  },
  {
    slug: "agendamiento-automatico",
    title: "Agendamiento Automático de Citas con IA: Sin Llamadas, Sin Emails",
    description: "Automatiza el agendamiento de reuniones, demos y consultas con IA conversacional por WhatsApp. Reduce no-shows con recordatorios automáticos.",
    icon: "📅",
    heroHeadline: "Agenda Citas sin Intervención Humana",
    heroSubtext: "El agente IA gestiona tu calendario, agenda reuniones y envía recordatorios automáticamente. Cero llamadas telefónicas para coordinar.",
    steps: [
      "El prospecto solicita una reunión por WhatsApp",
      "El agente verifica disponibilidad en tiempo real",
      "Propone horarios disponibles y confirma la cita",
      "Envía confirmación con detalles y link de videollamada",
      "Envía recordatorio 24h y 1h antes de la cita"
    ],
    benefits: [
      "Elimina el ping-pong de emails para coordinar reuniones",
      "Reduce no-shows hasta un 60% con recordatorios automáticos",
      "Disponible para agendar 24/7",
      "Sincronización automática con Google Calendar",
      "Reagendamiento y cancelaciones sin intervención humana"
    ],
    faqItems: [
      {
        question: "¿Se integra con Google Calendar y Outlook?",
        answer: "Sí. Genoma AI se integra con Google Calendar, Outlook y Calendly para verificar disponibilidad y crear eventos automáticamente."
      },
      {
        question: "¿Puede enviar links de Zoom o Google Meet automáticamente?",
        answer: "Sí. Al confirmar la cita, el agente puede generar y enviar automáticamente el link de videollamada correspondiente."
      }
    ]
  },
  {
    slug: "atencion-al-cliente-24-7",
    title: "Atención al Cliente 24/7 con IA: Resuelve Dudas sin Esperas",
    description: "Implementa atención al cliente automatizada con IA que resuelve dudas, gestiona reclamos y escala a humanos cuando es necesario. Sin tiempos de espera.",
    icon: "💬",
    heroHeadline: "Soporte al Cliente que Nunca Duerme",
    heroSubtext: "Resuelve el 80% de las consultas automáticamente. El 20% restante llega a tu equipo con contexto completo.",
    steps: [
      "Cliente envía consulta o reclamo por WhatsApp",
      "El agente IA identifica el tipo de consulta",
      "Resuelve automáticamente si está en la base de conocimiento",
      "Escala a humano con contexto si requiere atención especial",
      "Registra la interacción y actualiza el CRM"
    ],
    benefits: [
      "Resuelve el 80% de consultas sin intervención humana",
      "Tiempo de respuesta instantáneo a cualquier hora",
      "Reduce carga de trabajo del equipo de soporte",
      "Historial completo de cada cliente en CRM",
      "Métricas de satisfacción y resolución en tiempo real"
    ],
    faqItems: [
      {
        question: "¿Cómo sabe el agente qué responder sobre mi negocio?",
        answer: "Durante la configuración, cargas tu base de conocimiento: preguntas frecuentes, políticas, catálogo de productos, procedimientos. El agente aprende de esta información."
      },
      {
        question: "¿Qué pasa con consultas complejas o reclamos?",
        answer: "El agente identifica situaciones que requieren atención humana y escala automáticamente, enviando al agente humano el historial completo de la conversación."
      }
    ]
  },
  {
    slug: "reactivacion-de-base-de-datos",
    title: "Reactivación de Base de Datos con IA: Convierte Leads Fríos en Clientes",
    description: "Reactiva tu base de datos de leads y clientes inactivos con campañas de IA conversacional por WhatsApp. Recupera oportunidades perdidas automáticamente.",
    icon: "🔄",
    heroHeadline: "Tu Base de Datos Vale Dinero",
    heroSubtext: "Reactiva leads fríos y clientes inactivos con IA conversacional. Convierte contactos olvidados en ventas reales.",
    steps: [
      "Importas tu base de datos de leads o clientes inactivos",
      "El agente IA inicia conversaciones personalizadas por WhatsApp",
      "Identifica quién sigue interesado en tu producto/servicio",
      "Califica y agenda reuniones con los más receptivos",
      "Los leads calientes pasan a tu equipo de ventas"
    ],
    benefits: [
      "Monetiza tu base de datos existente sin costo adicional de adquisición",
      "Conversaciones personalizadas a escala",
      "Identifica oportunidades ocultas en contactos olvidados",
      "ROI inmediato sobre inversión ya realizada en leads",
      "Segmentación automática por nivel de interés"
    ],
    faqItems: [
      {
        question: "¿Cuántos contactos puedo reactivar al mismo tiempo?",
        answer: "Depende de tu plan. Los planes Business y superiores permiten campañas masivas de reactivación. Consulta los límites específicos en la página de precios."
      },
      {
        question: "¿Esto cumple con las regulaciones de WhatsApp?",
        answer: "Sí. Genoma AI opera a través de la API oficial de WhatsApp Business, cumpliendo con todas las políticas de uso de Meta para comunicaciones comerciales."
      }
    ]
  },
  {
    slug: "seguimiento-post-venta",
    title: "Seguimiento Post-Venta Automático con IA: Fideliza sin Esfuerzo",
    description: "Automatiza el seguimiento post-venta con IA conversacional. Aumenta la satisfacción del cliente, genera reseñas positivas y activa referidos automáticamente.",
    icon: "⭐",
    heroHeadline: "Convierte Clientes en Embajadores",
    heroSubtext: "El agente IA hace seguimiento post-venta automático, solicita reseñas y activa programas de referidos. Sin esfuerzo de tu equipo.",
    steps: [
      "Se cierra una venta o se completa un servicio",
      "El agente IA envía mensaje de bienvenida/agradecimiento",
      "Verifica satisfacción a los 3, 7 y 30 días",
      "Solicita reseña en Google si el cliente está satisfecho",
      "Activa programa de referidos para clientes felices"
    ],
    benefits: [
      "Aumenta retención de clientes hasta un 40%",
      "Genera reseñas de Google automáticamente",
      "Activa referidos sin pedirlos manualmente",
      "Detecta clientes insatisfechos antes de que se vayan",
      "Construye relaciones a largo plazo en piloto automático"
    ],
    faqItems: [
      {
        question: "¿Puede el agente solicitar reseñas de Google automáticamente?",
        answer: "Sí. Cuando el cliente expresa satisfacción, el agente puede enviar el link directo a tu perfil de Google Business para dejar una reseña."
      },
      {
        question: "¿Cómo funciona el programa de referidos automatizado?",
        answer: "Puedes configurar el agente para ofrecer incentivos a clientes satisfechos que refieran nuevos clientes, enviando links de seguimiento personalizados."
      }
    ]
  }
];

export function getCasoBySlug(slug: string): CasoDeUso | undefined {
  return casosDeUso.find(c => c.slug === slug);
}

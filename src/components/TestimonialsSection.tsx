
import React from 'react';

const testimonials = [
  {
    quote: "Fenix AI transformed our customer support. Response times dropped by 80% and satisfaction scores hit all-time highs.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    avatar: "👩‍💼"
  },
  {
    quote: "The predictive analytics capabilities helped us increase revenue by 35% in just 6 months. Game-changing technology.",
    author: "Marcus Rodriguez",
    role: "VP Sales",
    company: "Growth Dynamics",
    avatar: "👨‍💼"
  },
  {
    quote: "Implementation was seamless and the ROI was immediate. Our team productivity increased by 60% across the board.",
    author: "Elena Petrov",
    role: "Operations Director",
    company: "Quantum Industries",
    avatar: "👩‍💻"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Trusted by Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300">
            See what our clients say about their Fenix AI experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card group hover:glow-primary transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-2xl mb-4">{testimonial.avatar}</div>
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-white">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-sm gradient-text font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

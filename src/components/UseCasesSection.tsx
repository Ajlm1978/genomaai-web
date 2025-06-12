
import React, { useEffect, useState } from 'react';

const useCases = [
  {
    title: 'HR Automation',
    description: 'Streamline recruitment, onboarding, and employee management with intelligent automation.',
    icon: '👥',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Smart Sales Agents',
    description: 'AI-powered sales assistants that understand your customers and close deals 24/7.',
    icon: '🎯',
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    title: 'Predictive Analytics',
    description: 'Make data-driven decisions with AI that predicts trends and outcomes.',
    icon: '📊',
    gradient: 'from-green-500 to-emerald-400'
  },
  {
    title: 'Customer Support',
    description: 'Intelligent support that resolves issues faster and delights customers.',
    icon: '💬',
    gradient: 'from-orange-500 to-red-400'
  },
  {
    title: 'Finance Operations',
    description: 'Automate financial processes and gain real-time insights into your business.',
    icon: '💰',
    gradient: 'from-indigo-500 to-blue-400'
  },
  {
    title: 'Logistics Optimization',
    description: 'Optimize supply chains and delivery routes with intelligent AI systems.',
    icon: '🚚',
    gradient: 'from-teal-500 to-green-400'
  }
];

const UseCasesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.use-case-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Transform Your Business</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how Fenix AI revolutionizes operations across industries with intelligent automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              data-index={index}
              className={`use-case-card glass-card group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                visibleCards.includes(index) 
                  ? 'animate-fade-in' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

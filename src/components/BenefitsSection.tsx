import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarDays, Target, Wallet, Heart } from 'lucide-react';
import plannerOverview from '@/assets/myhelloplanner-ipads.webp';

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const benefits = [
    {
      icon: CalendarDays,
      title: 'Organización',
      description: 'Calendario Anual, Planner Semanal y Diario.',
    },
    {
      icon: Target,
      title: 'Enfoque',
      description: 'Vision Board Mensual y Control de Hábitos.',
    },
    {
      icon: Wallet,
      title: 'Equilibrio',
      description: 'Control Financiero y Nutricional.',
    },
    {
      icon: Heart,
      title: 'Bienestar',
      description: 'Hoja de Gratitud y Notas libres.',
    },
  ];

  return (
    <section id="beneficios" className="section-padding bg-warm-beige" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            Todo lo que necesitas para una vida en{' '}
            <span className="text-primary italic">equilibrio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explora las herramientas diseñadas para darte claridad, enfoque y paz mental cada día.
          </p>
        </motion.div>

        {/* Image + Benefits Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8 md:mb-0"
          >
            <img
              src={plannerOverview}
              alt="Hello Planner Digital 2026 - Vista general con calendario, planner y notas"
              className="w-72 md:w-80 lg:w-96 rounded-2xl shadow-elevated"
            />
          </motion.div>

          {/* Benefits Grid - around the image on desktop, below on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 md:mt-0 md:absolute md:inset-0 md:grid-cols-2 md:gap-0 md:pointer-events-none">
            {benefits.map((benefit, index) => {
              // Position each card in a corner on desktop
              const positions = [
                'md:self-start md:justify-self-start md:text-right md:pr-8 md:pt-4',
                'md:self-start md:justify-self-end md:text-left md:pl-8 md:pt-4',
                'md:self-end md:justify-self-start md:text-right md:pr-8 md:pb-4',
                'md:self-end md:justify-self-end md:text-left md:pl-8 md:pb-4',
              ];

              const iconAlignment = [
                'md:flex-row-reverse',
                'md:flex-row',
                'md:flex-row-reverse',
                'md:flex-row',
              ];

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className={`flex items-start gap-4 p-5 rounded-2xl bg-card/80 backdrop-blur-sm shadow-soft md:pointer-events-auto md:max-w-[240px] ${positions[index]} ${iconAlignment[index]}`}
                >
                  <div className="w-12 h-12 shrink-0 bg-terracotta-light rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

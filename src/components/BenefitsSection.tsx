import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Feather, Target, Heart } from 'lucide-react';

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const benefits = [
    {
      icon: Feather,
      title: 'Sencilla',
      description:
        'Sin complicaciones ni curvas de aprendizaje. Abre la agenda y empieza a escribir. Así de fácil.',
      color: 'bg-sage-light',
    },
    {
      icon: Target,
      title: 'Eficiente',
      description:
        'Cada sección está pensada para maximizar tu productividad sin abrumarte con opciones innecesarias.',
      color: 'bg-terracotta-light',
    },
    {
      icon: Heart,
      title: 'Bonita',
      description:
        'Porque organizar tu vida también puede ser estéticamente placentero. Diseño que inspira.',
      color: 'bg-accent',
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
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            ¿Por qué Hello Planner?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold">
            Beneficios de la agenda digital{' '}
            <span className="text-primary italic">Hello Planner</span>
          </h2>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="card-elegant group hover:shadow-elevated transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-serif font-semibold mb-4">
                {benefit.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Actualizaciones gratuitas
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Soporte incluido
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Uso ilimitado
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;

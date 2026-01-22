import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const testimonials = [
    {
      name: 'María G.',
      role: 'Emprendedora',
      content:
        'Hello Planner cambió mi forma de organizar mi negocio. Ahora puedo ver todo mi mes de un vistazo y nunca olvido una tarea importante.',
      rating: 5,
    },
    {
      name: 'Laura P.',
      role: 'Estudiante universitaria',
      content:
        '¡Es perfecta para mis estudios! El diseño es tan bonito que me da ganas de planificar cada día. Mis notas han mejorado muchísimo.',
      rating: 5,
    },
    {
      name: 'Carmen S.',
      role: 'Mamá y freelancer',
      content:
        'Entre la casa y el trabajo, necesitaba algo simple pero completo. Hello Planner es exactamente eso. ¡La recomiendo a todas las mamás!',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-warm-beige" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold">
            Lo que dicen nuestras{' '}
            <span className="text-primary italic">planners</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-background rounded-2xl p-8 shadow-[var(--shadow-soft)] relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-terracotta-light rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '2,500+', label: 'Planners felices' },
            { number: '4.9/5', label: 'Valoración media' },
            { number: '100%', label: 'Digital' },
            { number: '24h', label: 'Soporte' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-serif font-semibold text-primary">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

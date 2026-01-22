import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Brain, Zap } from 'lucide-react';

const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="section-padding bg-warm-beige" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Problem */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
            ¿Sientes que el día no tiene{' '}
            <span className="text-primary italic">suficientes horas?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sabemos lo que es tener mil pestañas abiertas en la mente. Las agendas
            tradicionales se quedan cortas y las apps complejas solo añaden ruido.
          </p>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="card-elegant max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wide text-sm">
                La Solución
              </span>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>

            <p className="text-xl md:text-2xl font-serif mb-8">
              Hello Planner no es solo un PDF; es tu nuevo{' '}
              <span className="text-primary font-semibold">espacio de calma mental</span>.
            </p>

            <p className="text-muted-foreground text-lg">
              Simplificamos la planificación para que te enfoques en lo importante.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                {
                  icon: Brain,
                  title: 'Claridad Mental',
                  description: 'Organiza tus pensamientos en un solo lugar',
                },
                {
                  icon: Zap,
                  title: 'Acción Inmediata',
                  description: 'Empieza a planificar desde el primer día',
                },
                {
                  icon: Sparkles,
                  title: 'Diseño Bonito',
                  description: 'Cada página inspira a seguir adelante',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-terracotta-light rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

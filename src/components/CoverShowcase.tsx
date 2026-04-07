import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import mockupPortadas from '@/assets/mockup-portadas.webp';

const CoverShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="portadas" className="section-padding bg-warm-beige" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            Elige la portada que mejor{' '}
            <span className="text-primary italic">conecte contigo</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Desde tonos minimalistas hasta diseños vibrantes. Tu Hello Planner incluye todas
            estas opciones para que personalices tu experiencia al máximo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={mockupPortadas}
            alt="Opciones de portadas del Hello Planner Digital 2026 - diseños minimalistas y vibrantes"
            className="w-full max-w-5xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CoverShowcase;

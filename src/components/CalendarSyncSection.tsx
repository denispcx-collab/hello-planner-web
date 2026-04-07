import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import calendarSync from '@/assets/HP-integracion-calendarios.webp';

const CalendarSyncSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
              Conecta y Sincroniza{' '}
              <span className="text-primary italic">al Instante</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Olvídate de duplicar eventos.{' '}
              <strong className="text-foreground">Hello Planner</strong> se integra de forma
              transparente con tus calendarios digitales favoritos mediante el uso estratégico
              de Apple Shortcuts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con solo pulsar un botón en tu planner, este popup inteligente te permite crear
              eventos directamente en{' '}
              <strong className="text-foreground">Google Calendar</strong>,{' '}
              <strong className="text-foreground">Apple Calendar</strong> y{' '}
              <strong className="text-foreground">Recordatorios</strong>. Todo se mantiene
              actualizado automáticamente en todos tus dispositivos.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={calendarSync}
              alt="Hello Planner integración con calendarios - popup para crear eventos en Google Calendar, Apple Calendar y Recordatorios"
              className="w-full max-w-lg mx-auto md:max-w-none rounded-2xl shadow-elevated"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSyncSection;

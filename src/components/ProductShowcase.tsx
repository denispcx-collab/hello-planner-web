import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen } from 'lucide-react';
import iconShortcuts from '@/assets/icon-shortcuts.webp';
import iconGoogleCalendar from '@/assets/icon-google-calendar.webp';
import iconRecordatorios from '@/assets/recordatorio-app.webp';
import iconAppleCalendar from '@/assets/icon-apple-calendar.webp';

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const integrations = [
    { img: iconShortcuts, name: 'Apple Shortcuts' },
    { img: iconAppleCalendar, name: 'Apple Calendar' },
    { img: iconGoogleCalendar, name: 'Google Calendar' },
    { img: iconRecordatorios, name: 'Recordatorios' },
  ];

  const noteApps = ['Goodnotes', 'Notability', 'Noteshelf', 'Kilonotes'];

  return (
    <section id="producto" className="section-padding" ref={ref}>
      <div className="container-wide max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Integraciones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
            Integraciones que simplifican{' '}
            <span className="text-primary italic">tu vida</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Crea eventos y recordatorios al instante. Hello Planner se conecta perfectamente con Apple Shortcuts, Google Calendar y Recordatorios para que tu única preocupación sea disfrutar del día.
          </p>
        </motion.div>

        {/* Integration icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-8 mb-14"
        >
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-medium">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Note apps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 justify-center mb-5">
            <BookOpen className="w-5 h-5 text-primary" />
            <p className="text-muted-foreground">
              Totalmente compatible con tus apps de notas favoritas
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {noteApps.map((app) => (
              <span
                key={app}
                className="px-5 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium"
              >
                {app}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;

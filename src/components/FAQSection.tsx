import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const faqs = [
    {
      question: '¿Con qué dispositivos es compatible la agenda?',
      answer:
        'Hello Planner es compatible con iPad (GoodNotes, Notability, Noteshelf), tablets Android (Xodo, Noteshelf), y cualquier dispositivo que pueda abrir archivos PDF. También puedes usarla en tu ordenador con Adobe Reader o cualquier lector de PDF.',
    },
    {
      question: '¿Cómo recibo la agenda después de comprarla?',
      answer:
        'Inmediatamente después de completar tu compra, recibirás un email con el enlace de descarga. También podrás acceder a ella desde tu área de cliente. La descarga es instantánea y podrás empezar a usarla en minutos.',
    },
    {
      question: '¿Es una compra única o hay suscripción?',
      answer:
        '¡Es una compra única! Pagas una vez y la agenda es tuya para siempre. Además, incluye actualizaciones gratuitas y acceso a futuras mejoras sin costo adicional.',
    },
    {
      question: '¿Puedo usar la misma agenda en varios dispositivos?',
      answer:
        'Sí, puedes usarla en todos los dispositivos que quieras. Una vez descargada, puedes guardarla en tu nube favorita (iCloud, Google Drive, Dropbox) y acceder desde cualquier dispositivo.',
    },
    {
      question: '¿Qué incluye exactamente la agenda?',
      answer:
        'Incluye vista anual, mensual, semanal y diaria. También encontrarás páginas de objetivos, habit trackers, listas de tareas, sección de notas, y páginas de reflexión. Todo hipervinculado para navegar fácilmente.',
    },
    {
      question: '¿Ofrecen reembolsos?',
      answer:
        'Debido a la naturaleza digital del producto, no ofrecemos reembolsos una vez descargada la agenda. Sin embargo, si tienes cualquier problema técnico, nuestro equipo de soporte estará encantado de ayudarte.',
    },
  ];

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold">
            Preguntas{' '}
            <span className="text-primary italic">frecuentes</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-border/50 py-2"
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:text-primary transition-colors hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            ¿Tienes más preguntas?
          </p>
          <a
            href="mailto:hola@helloplanner.com"
            className="text-primary font-medium hover:underline"
          >
            Escríbenos a hola@helloplanner.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

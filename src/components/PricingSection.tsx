import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles, Download, RefreshCw, Headphones } from 'lucide-react';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const features = [
    'Agenda digital completa (365 días)',
    'Vista anual, mensual, semanal y diaria',
    'Páginas de objetivos y habit tracker',
    'Sección de notas y listas',
    'Hipervínculos para navegación rápida',
    'Compatible con iPad, tablet y móvil',
    'Actualizaciones gratuitas',
    'Soporte por email',
  ];

  const highlights = [
    { icon: Download, text: 'Descarga instantánea' },
    { icon: RefreshCw, text: 'Actualizaciones gratis' },
    { icon: Headphones, text: 'Soporte incluido' },
  ];

  return (
    <section id="precio" className="section-padding bg-warm-beige" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Precio único
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold">
            Invierte en tu{' '}
            <span className="text-primary italic">organización</span>
          </h2>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background rounded-3xl shadow-elevated overflow-hidden max-w-lg mx-auto"
        >
          {/* Badge */}
          <div className="bg-primary text-primary-foreground py-3 px-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium text-sm">Oferta de Lanzamiento</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div className="p-8 md:p-10">
            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-muted-foreground line-through">
                  $18,90 USD
                </span>
                <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                  -50%
                </span>
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl md:text-6xl font-serif font-bold text-foreground">
                  $9,45 USD
                </span>
              </div>
              <p className="text-muted-foreground mt-2">Pago único • Tuya para siempre</p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="https://pay.hotmart.com/W103172121L?bid=1769720396663&sck=landing_hello_planner"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full text-center block text-lg mb-6"
            >
              Quiero mi Hello Planner
            </motion.a>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {highlights.map((highlight) => (
                <div key={highlight.text} className="flex items-center gap-2">
                  <highlight.icon className="w-4 h-4 text-primary" />
                  <span>{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          💳 Pago seguro con Stripe • Acceso inmediato tras la compra
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;

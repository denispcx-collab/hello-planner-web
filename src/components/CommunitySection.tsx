import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Mail, Gift, Sparkles } from 'lucide-react';

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//web.webformscr.com/apps/fc3/build/loader.js';
    script.async = true;
    script.setAttribute('sp-form-id', 'e3d7c88a343959b8863792d762017ced652206dcc53ec37e04d8f0d3c1f77e9a');
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    { icon: Gift, text: 'Descuentos exclusivos' },
    { icon: Sparkles, text: 'Plantillas gratuitas' },
    { icon: Mail, text: 'Tips de organización' },
  ];

  return (
    <section id="comunidad" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card-elegant text-center"
        >
          {/* Header */}
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Únete al Club <span className="text-primary italic">Hello Planner</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Recibe tips de organización, descuentos exclusivos y plantillas gratuitas
            directamente en tu correo. Sé la primera en enterarte de las novedades.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <benefit.icon className="w-5 h-5 text-primary" />
                <span>{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* SendPulse Popup Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              dangerouslySetInnerHTML={undefined}
              ref={(el) => el?.setAttribute('sp-show-form', '252735')}
              className="btn-primary text-lg px-8 py-3"
            >
              Suscribirme a la lista
            </button>
            <p className="text-xs text-muted-foreground mt-4">
              Sin spam. Puedes darte de baja cuando quieras.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Mail, Gift, Sparkles } from 'lucide-react';

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service
    console.log('Newsletter signup:', { name, email });
    setIsSubmitted(true);
  };

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

          {/* Form */}
          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="input-elegant"
                />
                <input
                  type="email"
                  placeholder="Tu mejor correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-elegant"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full text-lg"
              >
                Suscribirme a la lista
              </motion.button>
              <p className="text-xs text-muted-foreground mt-4">
                Sin spam. Puedes darte de baja cuando quieras.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-sage-light rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                ¡Bienvenida al Club!
              </h3>
              <p className="text-muted-foreground">
                Revisa tu correo para confirmar tu suscripción.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;

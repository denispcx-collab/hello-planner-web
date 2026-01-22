import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-planner-mockup.jpg';

const HeroSection = () => {
  const scrollToProduct = () => {
    const element = document.querySelector('#producto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="min-h-screen flex items-center justify-center section-padding pt-32 lg:pt-24"
    >
      <div className="container-wide w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm"
            >
              Agenda Digital Premium
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              Transforma tu caos diario en una{' '}
              <span className="text-primary italic">rutina que ames</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              La agenda digital diseñada para organizar tu vida de forma sencilla,
              eficiente y visualmente bonita. Planificar nunca fue tan satisfactorio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToProduct}
                className="btn-primary text-lg"
              >
                Ver la Agenda Hello Planner
              </motion.button>
              <motion.a
                href="#comunidad"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#comunidad')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary text-lg"
              >
                Unirme al Club
              </motion.a>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              ✨ Disponible para descarga inmediata
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src={heroImage}
                  alt="Mockup de agenda digital Hello Planner abierta en iPad mostrando vista semanal"
                  className="w-full h-auto rounded-2xl shadow-elevated"
                />
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-terracotta-light rounded-full blur-3xl opacity-60 -z-10" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-sage-light rounded-full blur-2xl opacity-60 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

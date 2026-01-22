import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border md:hidden z-40"
    >
      <a
        href="[PONER ENLACE DE PAGO]"
        className="btn-primary w-full text-center block text-lg"
      >
        Obtener mi Agenda
      </a>
    </motion.div>
  );
};

export default StickyMobileCTA;

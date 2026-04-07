import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import carrusel01 from '@/assets/carrusel_01.webp';
import carrusel02 from '@/assets/carrusel_02.webp';
import carrusel03 from '@/assets/carrusel_03.webp';
import carrusel04 from '@/assets/carrusel_04.webp';
import carrusel05 from '@/assets/carrusel_05.webp';
import carrusel06 from '@/assets/carrusel_06.webp';
import carrusel07 from '@/assets/carrusel_07.webp';
import carrusel08 from '@/assets/carrusel_08.webp';
import carrusel09 from '@/assets/carrusel_09.webp';
import carrusel10 from '@/assets/carrusel_10.webp';

const slides = [
  { image: carrusel01, alt: 'Vista mensual del Hello Planner - Marzo 2026' },
  { image: carrusel02, alt: 'Sección de notas con cuadrícula del Hello Planner' },
  { image: carrusel03, alt: 'Vision Board mensual del Hello Planner' },
  { image: carrusel04, alt: 'Vista semanal del Hello Planner con prioridades y tareas' },
  { image: carrusel05, alt: 'Planificación diaria completa del Hello Planner' },
  { image: carrusel06, alt: 'Control de gastos mensual del Hello Planner' },
  { image: carrusel07, alt: 'Habit Tracker mensual del Hello Planner' },
  { image: carrusel08, alt: 'Objetivos mensuales con acciones del Hello Planner' },
  { image: carrusel09, alt: 'Secciones personalizables del Hello Planner' },
  { image: carrusel10, alt: 'Plan de entrenamiento del Hello Planner' },
];

const AUTOPLAY_INTERVAL = 4000;

const ProductSlider = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetAutoplay = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);
  }, []);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, resetAutoplay]);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="detalles" className="section-padding bg-warm-beige" ref={sectionRef}>
      <div className="container-wide mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wide text-primary">
            Conoce tu planner
          </span>
          <h2 className="text-3xl font-serif font-semibold md:text-4xl lg:text-5xl">
            Diseñado para cada aspecto de{' '}
            <span className="italic text-primary">tu día</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explora cada rincón de tu Hello Planner. Un espacio donde la elegancia del diseño digital se encuentra con la practicidad, permitiéndote organizar tus metas, hábitos y finanzas con una fluidez que se adapta a tu ritmo de vida.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Fade carousel container */}
          <div className="relative mx-auto w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={slides[currentIndex].image}
                alt={slides[currentIndex].alt}
                custom={direction}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition-colors hover:bg-accent md:-translate-x-6"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition-colors hover:bg-accent md:translate-x-6"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSlider;

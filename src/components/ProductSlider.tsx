import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import mockupPortadas from '@/assets/mockup-portadas.webp';
import mockupDaily from '@/assets/mockup-daily.webp';
import mockupAgendar from '@/assets/mockup-agendar.webp';
import mockupMonthly from '@/assets/mockup-monthly.webp';
import mockupMotivation from '@/assets/mockup-motivation.webp';

const slides = [
  {
    image: mockupDaily,
    title: 'Un lienzo para tus ideas.',
    copy: 'Organiza tus horas, prioridades, comidas y hasta tu hidratación en un solo lugar.',
    alt: 'Vista diaria del Hello Planner Digital con planificación completa',
  },
  {
    image: mockupAgendar,
    title: 'Conexión total.',
    copy: 'Toca cualquier fecha para añadir eventos a tu calendario de Google o Apple al instante. ¡Productividad real!',
    alt: 'Integración con calendarios desde Hello Planner',
  },
  {
    image: mockupMonthly,
    title: 'El panorama completo.',
    copy: 'Planifica tus objetivos del mes y visualiza tus semanas con total claridad.',
    alt: 'Vista mensual del Hello Planner Digital 2026',
  },
  {
    image: mockupMotivation,
    title: 'Mucho más que una agenda.',
    copy: 'Espacios para afirmaciones, notas de gratitud y seguimiento de hábitos para cuidar de ti.',
    alt: 'Sección de motivación y bienestar del Hello Planner',
  },
];

const ProductSlider = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={index} className="min-w-0 flex-[0_0_100%] px-4">
                  <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
                    <div className="flex w-full justify-center md:w-1/2">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full max-w-sm rounded-2xl object-contain"
                      />
                    </div>

                    <div className="w-full text-center md:w-1/2 md:text-left">
                      <h3 className="mb-4 text-2xl font-serif font-semibold md:text-3xl">
                        {slide.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        {slide.copy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition-colors hover:bg-accent disabled:opacity-30 md:-translate-x-6"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition-colors hover:bg-accent disabled:opacity-30 md:translate-x-6"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'w-8 bg-primary' : 'bg-primary/30'
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

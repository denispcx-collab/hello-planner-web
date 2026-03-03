import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MousePointer, Palette, Smartphone } from 'lucide-react';

import plannerMonthly from '@/assets/planner-monthly.jpg';
import plannerDaily from '@/assets/planner-daily.jpg';
import plannerNotes from '@/assets/planner-notes.jpg';

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: plannerMonthly,
      alt: 'Vista mensual de la agenda digital Hello Planner',
      label: 'Vista Mensual',
    },
    {
      src: plannerDaily,
      alt: 'Vista diaria de la agenda digital Hello Planner',
      label: 'Vista Diaria',
    },
    {
      src: plannerNotes,
      alt: 'Sección de notas de la agenda digital Hello Planner',
      label: 'Notas & Listas',
    },
  ];

  const features = [
    {
      icon: MousePointer,
      title: 'Navegación Intuitiva',
      description: 'Muévete entre meses y días con un solo clic.',
    },
    {
      icon: Palette,
      title: 'Estética Motivadora',
      description: 'Un diseño limpio que te invita a escribir cada día.',
    },
    {
      icon: Smartphone,
      title: '100% Digital',
      description: 'Llévala contigo en tu tablet o móvil sin peso extra.',
    },
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="producto" className="section-padding" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Tu Nueva Agenda
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold">
            Diseñada para ser{' '}
            <span className="text-primary italic">utilizada</span>, no solo guardada
          </h2>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-elevated bg-card">
              <motion.img
                key={activeImage}
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    index === activeImage
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-terracotta-light rounded-2xl flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <a
            href="https://pay.hotmart.com/W103172121L?bid=1769720396663&sck=landing_hello_planner"
            className="btn-primary inline-block text-lg"
          >
            Quiero organizarme ahora
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Descarga instantánea • Compatible con iPad, tablet y móvil
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;

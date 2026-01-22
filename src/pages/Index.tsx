import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import ProductShowcase from '@/components/ProductShowcase';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CommunitySection from '@/components/CommunitySection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <ProductShowcase />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CommunitySection />
      <AboutSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;

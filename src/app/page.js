import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Industries from '@/components/Industries';
import Solutions from '@/components/Solutions';
import CaseStudies from '@/components/CaseStudies';
import StatsCounter from '@/components/StatsCounter';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <Industries />
      <Solutions />
      <CaseStudies />
      <StatsCounter />
      <Testimonials />
      <ContactForm />
      <FloatingActionButton />
      <Footer />
    </div>
  );
}

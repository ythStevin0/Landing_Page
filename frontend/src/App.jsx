import './shared/styles/globals.css';

import Navbar           from './shared/components/Navbar';
import Footer           from './shared/components/Footer';
import WhatsAppButton   from './shared/components/WhatsAppButton';

import HeroSection      from './features/hero/HeroSection';
import AboutSection     from './features/about/AboutSection';
import ProjectsSection  from './features/projects/ProjectsSection';
import ServicesSection  from './features/services/ServicesSection';
import WhyUsSection     from './features/whyus/WhyUsSection';
import FaqSection       from './features/faq/FaqSection';
import ContactSection   from './features/contact/ContactSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <WhyUsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

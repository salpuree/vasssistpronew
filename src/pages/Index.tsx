import { ThemeProvider } from '../components/ThemeProvider'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { ServicesSection } from '../components/ServicesSection'
import { IndustriesSection } from '../components/IndustriesSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { ContactSection } from '../components/ContactSection'
import { FloatingChat } from '../components/FloatingChat'
import { Footer } from '../components/Footer'

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <IndustriesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingChat />
      </div>
    </ThemeProvider>
  );
};

export default Index;
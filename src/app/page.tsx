import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import AboutUs from '@/components/ui/AboutUs';
import Services from '@/components/ui/Services';
import TargetAudience from '@/components/ui/TargetAudience';
import Process from '@/components/ui/Process';
import Portfolio from '@/components/ui/Portfolio';
import BlogSection from '@/components/ui/BlogSection';
import FAQ from '@/components/ui/FAQ';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <TargetAudience />
      <Process />
      <Portfolio />
      <AboutUs />
      <BlogSection />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

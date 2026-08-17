import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import Services from '@/components/ui/Services';
import TargetAudience from '@/components/ui/TargetAudience';
import Process from '@/components/ui/Process';
import Portfolio from '@/components/ui/Portfolio';
import FAQ from '@/components/ui/FAQ';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <TargetAudience />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

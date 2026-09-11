import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Shift from '@/components/Shift';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Addons from '@/components/Addons';
import FAQ from '@/components/FAQ';
import About from '@/components/About';
import Contact from '@/components/Contact';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <main style={{ background: '#eef1f5', minHeight: '100vh' }}>
      <StructuredData />
      <Navbar />
      <div className="page-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px' }}>
        <Hero />
        <Shift />
        <Projects />
        <Process />
        <Addons />
        <FAQ />
        <About />
        <Contact />
      </div>
    </main>
  );
}
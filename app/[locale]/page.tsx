import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Templates from "@/components/Templates";
import Process from "@/components/Process";
import AfterSale from "@/components/AfterSale";
import Addons from "@/components/Addons";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ background: "#eef1f5", minHeight: "100vh" }}>
      <Navbar />
      <div className="page-container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>
        <Hero />
        <Projects />
        <Templates />
        <Process />
        <AfterSale />
        <Addons />
        <FAQ />
        <About />
        <Contact />
      </div>
    </main>
  );
}
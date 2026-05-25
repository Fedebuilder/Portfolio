import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ background: "#eef1f5", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <Navigation />
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

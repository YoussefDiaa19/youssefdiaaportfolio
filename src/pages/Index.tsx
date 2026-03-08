import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollProgress />
      <Hero />
      <About />
      <Education />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;

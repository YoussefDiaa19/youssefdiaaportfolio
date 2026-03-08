import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
              <h3 className="text-3xl md:text-5xl font-light text-architectural">
                Let's Connect
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <a
                href="mailto:youssefdiaa19@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Mail size={18} />
                <span>youssefdiaa19@gmail.com</span>
              </a>
              <a
                href="tel:+201013277229"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Phone size={18} />
                <span>+20 101 327 7229</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <span>New Cairo, Egypt</span>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
              >
                <Github size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
              >
                <Linkedin size={18} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;

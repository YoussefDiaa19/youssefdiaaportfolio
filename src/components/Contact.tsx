import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">
                  GET IN TOUCH
                </h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Let's Connect
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                    <a
                      href="mailto:youssefdiaa19@gmail.com"
                      className="text-xl hover:text-muted-foreground transition-colors duration-300"
                    >
                      youssefdiaa19@gmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">PHONE</h4>
                    <a
                      href="tel:+201013277229"
                      className="text-xl hover:text-muted-foreground transition-colors duration-300"
                    >
                      +20 101 327 7229
                    </a>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">LOCATION</h4>
                    <p className="text-xl">New Cairo, Cairo, Egypt</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-6">FIND ME ON</h4>
                  <div className="space-y-4">
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      GitHub
                    </a>
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="pt-12 border-t border-border">
                  <p className="text-muted-foreground">
                    I'm always open to discussing new projects, collaborations, or
                    opportunities. Feel free to reach out!
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;

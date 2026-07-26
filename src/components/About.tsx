import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Who I Am
                </h3>

                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Senior Computer Science student at MIU with strong full-stack
                    development skills and a keen eye for UI/UX. Creative, collaborative,
                    and comfortable working in teams to turn ideas into real products.
                    I care about how things work and how they feel and I'm always looking
                    to build something people actually want to use.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-6">
                    QUICK FACTS
                  </h4>
                  <div className="space-y-6">
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">University</h5>
                      <p className="text-muted-foreground">
                        Misr International University — Computer Science
                      </p>
                    </div>
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">Year</h5>
                      <p className="text-muted-foreground">Senior Year</p>
                    </div>
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">Languages</h5>
                      <p className="text-muted-foreground">Arabic, English</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-minimal text-muted-foreground mb-2">
                        INTERESTS
                      </h4>
                      <p className="text-xl">Tennis Player & Coach</p>
                    </div>
                    <div>
                      <h4 className="text-minimal text-muted-foreground mb-2">
                        LOCATION
                      </h4>
                      <p className="text-xl">New Cairo, Egypt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;

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
                    Senior Computer Science student at MIU with hands-on experience building full-stack web applications, cross-platform mobile apps, and intuitive user interfaces. Proven ability to take products from initial wireframes to live deployment—including a mobile platform serving 7,600+ active users. Fast learner who thrives in collaborative teams and focuses on clean architecture and real-world usability.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-6">
                    QUICK FACTS
                  </h4>
                  <div className="space-y-6">
                    <div className="border-l-2 border-foreground pl-6 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white p-1 border border-border shadow-sm shrink-0 mt-0.5 overflow-hidden flex items-center justify-center">
                        <img
                          src="/images/logos/miu.png"
                          alt="MIU Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h5 className="text-lg font-medium mb-1">University</h5>
                        <p className="text-muted-foreground text-sm">
                          Misr International University — Computer Science (Software Development Major)
                        </p>
                      </div>
                    </div>
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">Year</h5>
                      <p className="text-muted-foreground">Senior Year (Fourth Year)</p>
                    </div>
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">Languages</h5>
                      <p className="text-muted-foreground">Arabic (Native), English (Professional)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-minimal text-muted-foreground mb-2">
                        INTERESTS
                      </h4>
                      <p className="text-xl">Tennis</p>
                    </div>
                    <div>
                      <h4 className="text-minimal text-muted-foreground mb-2">
                        LOCATION
                      </h4>
                      <p className="text-xl">Cairo, Egypt</p>
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

import AnimatedSection from "./AnimatedSection";

const Education = () => {
  return (
    <section id="education" className="py-32 bg-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-20">
              <h2 className="text-minimal text-muted-foreground mb-4">EDUCATION</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Academic Background
              </h3>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            <AnimatedSection>
              <div className="group">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex items-center gap-4 sm:flex-col sm:items-start shrink-0">
                    <span className="text-minimal text-muted-foreground font-medium">
                      01
                    </span>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-2 border border-border shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src="/images/logos/miu.png"
                        alt="Misr International University Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-light mb-2 text-architectural">
                      Bachelor in Computer Science
                    </h4>
                    <p className="text-minimal text-muted-foreground mb-2">
                      MISR INTERNATIONAL UNIVERSITY · 2023 – PRESENT
                    </p>
                    <p className="text-minimal text-muted-foreground mb-4">
                      FOURTH YEAR · MAJORING IN SOFTWARE DEVELOPMENT
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground/80">Relevant Coursework:</span>{" "}
                      Mobile Device Programming, Software Engineering, Principles of
                      Software Architecture, Principles of Software Design, Software
                      Validation and Testing, Software Quality Assurance and Evolution,
                      Software Project Management, Web Development, Human-Computer
                      Interaction, Algorithms, Data Structures, OOP, Databases
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

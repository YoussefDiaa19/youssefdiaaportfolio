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
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium mt-1">
                    01
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-2 text-architectural">
                      BSc in Computer Science
                    </h4>
                    <p className="text-minimal text-muted-foreground mb-2">
                      MISR INTERNATIONAL UNIVERSITY · 2023 – PRESENT
                    </p>
                    <p className="text-minimal text-muted-foreground mb-4">
                      THIRD YEAR
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Relevant Coursework: Web Development, Algorithms, Data Structures,
                      Object-Oriented Programming, Database Systems, Problem Solving,
                      Software Engineering, Human-Computer Interaction
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium mt-1">
                    02
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-2 text-architectural">
                      Summer Internship — Digital Solutions (UI/UX)
                    </h4>
                    <p className="text-minimal text-muted-foreground mb-4">
                      EL ARABI GROUP
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Interned in the Digital Solutions team with a focus on UI/UX design,
                      contributing to user interface research, wireframing, and design
                      improvements for digital products.
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

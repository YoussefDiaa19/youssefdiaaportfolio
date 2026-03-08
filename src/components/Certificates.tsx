import AnimatedSection from "./AnimatedSection";

const Certificates = () => {
  return (
    <section id="certificates" className="py-32 bg-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-20">
              <h2 className="text-minimal text-muted-foreground mb-4">
                CERTIFICATES & AWARDS
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Certifications & Awards
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            <AnimatedSection>
              <div className="group border-l-2 border-foreground pl-6">
                <p className="text-minimal text-muted-foreground mb-2">
                  GOOGLE · COURSERA — COMPLETED
                </p>
                <h4 className="text-2xl font-light mb-4 text-architectural">
                  Foundations of User Experience (UX) Design
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Course 1 of 7 in the Google UX Design Professional Certificate.
                  Covers the basics of UX design, including user-centered design,
                  design sprints, and the role of a UX designer.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group border-l-2 border-foreground pl-6">
                <p className="text-minimal text-muted-foreground mb-2">
                  GOOGLE · COURSERA — IN PROGRESS
                </p>
                <h4 className="text-2xl font-light mb-4 text-architectural">
                  Start the UX Design Process: Empathize, Define, and Ideate
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Course 2 of 7 in the Google UX Design Professional Certificate.
                  Focuses on empathizing with users, defining pain points, and
                  ideating design solutions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group border-l-2 border-primary pl-6">
                <p className="text-minimal text-muted-foreground mb-2">
                  🏆 AWARD — FIRST YEAR
                </p>
                <h4 className="text-2xl font-light mb-4 text-architectural">
                  Best Project — Problem Solving Course
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Awarded for the Car Rental Management System, recognized as the
                  best project in the Problem Solving course.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group border-l-2 border-primary pl-6">
                <p className="text-minimal text-muted-foreground mb-2">
                  🏆 AWARD — FIRST YEAR
                </p>
                <h4 className="text-2xl font-light mb-4 text-architectural">
                  Best Project — Digital Logic Design Course
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Awarded for the Calculator project, recognized as the best project
                  in the Digital Logic Design course.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

const Education = () => {
  return (
    <section id="education" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">EDUCATION</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Academic Background
            </h3>
          </div>

          <div className="space-y-16">
            <div className="group">
              <div className="flex items-start space-x-6">
                <span className="text-minimal text-muted-foreground font-medium mt-1">
                  01
                </span>
                <div>
                  <h4 className="text-2xl font-light mb-2 text-architectural">
                    BSc in Computer Science
                  </h4>
                  <p className="text-minimal text-muted-foreground mb-4">
                    SPECIALIZATION IN SOFTWARE ENGINEERING
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Details from CV coming soon — upload your CV and I'll fill
                    this in with your university, GPA, coursework, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

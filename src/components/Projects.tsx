const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">
              PROJECTS
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              What I've Built
            </h3>
          </div>

          <div className="space-y-24">
            <div className="group">
              <div className="relative overflow-hidden bg-muted rounded-sm">
                <div className="h-[40vh] flex items-center justify-center">
                  <p className="text-muted-foreground text-lg">
                    Project screenshots coming soon
                  </p>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-2xl font-light text-architectural mb-2">
                    YOUR PROJECT
                  </h4>
                  <p className="text-minimal text-muted-foreground">
                    TECH STACK HERE
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Upload your CV and I'll add your real projects with
                    descriptions, tech stacks, and links.
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

export default Projects;

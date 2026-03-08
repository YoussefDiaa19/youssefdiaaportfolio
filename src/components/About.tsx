const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Who I Am
              </h3>

              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Youssef Diaa, a Computer Science student specializing in
                  Software Engineering. I'm passionate about building clean,
                  efficient software solutions and continuously learning new
                  technologies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'll be adding more details from my CV soon — stay tuned!
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">
                  SKILLS
                </h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-2">
                      Software Engineering
                    </h5>
                    <p className="text-muted-foreground">
                      Designing and building scalable, maintainable applications
                    </p>
                  </div>
                  <div className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-2">
                      Problem Solving
                    </h5>
                    <p className="text-muted-foreground">
                      Tackling complex challenges with clean, efficient
                      solutions
                    </p>
                  </div>
                  <div className="border-l-2 border-foreground pl-6">
                    <h5 className="text-lg font-medium mb-2">
                      Continuous Learning
                    </h5>
                    <p className="text-muted-foreground">
                      Always exploring new frameworks, tools, and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

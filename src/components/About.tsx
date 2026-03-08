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
                    I am a third-year Computer Science student at Misr International
                    University with a strong passion for technology and problem-solving.
                    I thrive in environments that challenge me to think critically and
                    creatively, whether it's through coding, designing algorithms, or
                    working collaboratively on innovative projects.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I specialize in Software Engineering, with experience spanning
                    full-stack web development, UI/UX design, and building efficient
                    software solutions. I'm always exploring new frameworks, tools,
                    and best practices.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-6">
                    TECHNICAL SKILLS
                  </h4>
                  <div className="space-y-6">
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">
                        Programming Languages
                      </h5>
                      <p className="text-muted-foreground">
                        C++, Java, Python, JavaScript, PHP, SQL, HTML, CSS
                      </p>
                    </div>
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">
                        Frameworks & Tools
                      </h5>
                      <p className="text-muted-foreground">
                        Node.js, Express, Flask, MongoDB, Git, SFML
                      </p>
                    </div>
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">
                        Software & Design
                      </h5>
                      <p className="text-muted-foreground">
                        Microsoft Office Suite, Photoshop, Video Editing
                      </p>
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

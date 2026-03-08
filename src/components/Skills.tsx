import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    ],
  },
  {
    title: "Design & Software",
    skills: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
      { name: "Microsoft Office", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "Video Editing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Documentation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/readthedocs/readthedocs-original.svg" },
      { name: "Problem Solving", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original.svg" },
      { name: "Team Collaboration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-minimal text-muted-foreground mb-4">SKILLS</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural mb-16">
              Technical Skills
            </h3>
          </AnimatedSection>

          <div className="space-y-16">
            {skillCategories.map((category, catIndex) => (
              <AnimatedSection key={catIndex}>
                <h4 className="text-minimal text-muted-foreground mb-8">
                  {category.title.toUpperCase()}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm hover:border-foreground/30 hover:bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center text-foreground font-semibold text-sm">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

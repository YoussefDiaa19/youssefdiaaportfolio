import AnimatedSection from "./AnimatedSection";
import {
  Globe,
  Layout,
  Network,
  ShieldCheck,
  Layers,
  Blocks,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon?: string;
  customIcon?: React.ReactNode;
  iconClassName?: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "React Router",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Material-UI (MUI)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "React Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "react-i18next",
        customIcon: <Globe className="w-8 h-8 text-primary" />,
      },
      {
        name: "Axios",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
      },
      {
        name: "Responsive UI/UX",
        customIcon: <Layout className="w-8 h-8 text-primary" />,
      },
    ],
  },
  {
    title: "BACKEND & ARCHITECTURE",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Prisma ORM",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      {
        name: "RESTful APIs",
        customIcon: <Network className="w-8 h-8 text-primary" />,
      },
      {
        name: "JWT & OAuth Authentication",
        customIcon: <ShieldCheck className="w-8 h-8 text-primary" />,
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        iconClassName: "brightness-0 invert",
      },
      {
        name: "SOLID Principles",
        customIcon: <Layers className="w-8 h-8 text-primary" />,
      },
      {
        name: "Design Patterns (Factory, Observer, Repository, Service Layer)",
        customIcon: <Blocks className="w-8 h-8 text-primary" />,
      },
    ],
  },
  {
    title: "MOBILE & CROSS-PLATFORM",
    skills: [
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Dart",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Capacitor (iOS & Android Deployment)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/capacitor/capacitor-original.svg",
      },
    ],
  },
  {
    title: "DATABASES & CLOUD SERVICES",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Supabase (Auth, Realtime, Storage)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL/SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase (Cloud Messaging)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Cloudflare R2",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      },
    ],
  },
  {
    title: "PROGRAMMING LANGUAGES",
    skills: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Dart",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "TOOLS & DESIGN",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        iconClassName: "brightness-0 invert",
      },
      {
        name: "Figma (Wireframing & Prototyping)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "OpenCV",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      },
      {
        name: "Microsoft Office Suite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      },
      {
        name: "Adobe Photoshop",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
      },
      {
        name: "Video Editing",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-background">
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
                  {category.title}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative flex flex-col items-center justify-center text-center gap-3 p-5 rounded-xl border border-border bg-background/50 backdrop-blur-sm hover:border-foreground/30 hover:bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-h-[120px]"
                    >
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className={`w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 ${
                            skill.iconClassName || ""
                          }`}
                        />
                      ) : skill.customIcon ? (
                        <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          {skill.customIcon}
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center text-foreground font-semibold text-sm">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                      <span className="text-xs sm:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors leading-snug">
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

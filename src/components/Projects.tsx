import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  badge?: string;
  logo?: string;
  link?: {
    label: string;
    url: string;
    type: "app" | "github";
  };
  bullets?: string[];
  description?: string;
  tools: string;
  hasPreview?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "01",
    title: "Shoflak Klba App",
    badge: "IN PRODUCTION WITH 7,600+ USERS – APP STORE & PLAY STORE",
    logo: "/images/logos/shoflak-klba.png",
    link: {
      label: "App Link",
      url: "https://shoflakklba.app/",
      type: "app",
    },
    bullets: [
      "Built and scaled a cross-platform iOS & Android pet-matching and community app solo from zero to 7,600+ active users (4.5k+ iOS, 3k+ Android) in 3 months.",
      "Architected the full-stack backend and media pipeline using Supabase (PostgreSQL, Realtime, Auth) and Cloudflare R2, supporting real-time chat, user reporting, and Google/Apple OAuth.",
      "Engineered a comprehensive admin dashboard for content moderation, user management, and in-app promotional banner/pop-up ad placements, paired with Firebase Cloud Messaging push notifications.",
      "Designed a mobile-first, bilingual (Arabic & English) UI/UX in Figma with Dark Mode support and deployed the companion product landing page.",
    ],
    tools:
      "React, TypeScript, Tailwind CSS, Capacitor, Supabase (PostgreSQL, Realtime, Auth), Firebase (Cloud Messaging), Figma, Cloudflare R2 (Storage)",
    hasPreview: true,
  },
  {
    id: "02",
    title: "SwapIt",
    link: {
      label: "GitHub",
      url: "https://github.com/YoussefDiaa19/Swap-It",
      type: "github",
    },
    bullets: [
      "Developed a peer-to-peer mobile trading application enabling users to list items and exchange products directly with other users.",
      "Implemented real-time in-app chat functionality allowing users to negotiate and coordinate item swaps seamlessly.",
    ],
    tools: "Flutter, Dart, Supabase",
  },
  {
    id: "03",
    title: "Course Management System",
    link: {
      label: "GitHub",
      url: "https://github.com/nouramr52/CourseManagementSystem",
      type: "github",
    },
    bullets: [
      "Developed a full-stack academic administration platform supporting course creation, student enrollment, instructor dashboards, file uploads (Multer), and role-based access control (Student, Instructor, Admin) with JWT and Supabase OAuth.",
      "Architected a clean, maintainable backend adhering to SOLID principles using Factory, Observer, Repository, Service Layer, and Middleware Factory patterns with DTO validation and centralized error handling.",
    ],
    tools:
      "React, Vite, React Router, Axios, Node.js, Express, Prisma ORM, PostgreSQL, Supabase, JWT",
  },
  {
    id: "04",
    title: "Schedule Timetable Management System",
    link: {
      label: "GitHub",
      url: "https://github.com/YoussefDiaa19/TimeTableManagementSystem",
      type: "github",
    },
    description:
      "Built a web-based scheduling platform enabling administrators to create and organize academic class schedules with automated conflict detection, room allocation, and dynamic timetable generation.",
    tools: "PHP, HTML, CSS, JavaScript, SQL",
  },
  {
    id: "05",
    title: "Dino Game with Eye Tracking",
    link: {
      label: "GitHub",
      url: "https://github.com/YoussefDiaa19/dinoJumpingGame",
      type: "github",
    },
    description:
      "Recreated the classic Chrome runner game with hands-free accessibility controls, replacing keyboard input with real-time blink detection via computer vision.",
    tools: "Python, Flask, OpenCV, HTML, CSS, JavaScript",
  },
  {
    id: "06",
    title: "Restaurant Website",
    link: {
      label: "GitHub",
      url: "https://github.com/ammarelghamry16/The-Restaurant-Website",
      type: "github",
    },
    description:
      "Developed a responsive full-stack web application with separate customer and admin interfaces, featuring interactive menu management, real-time table reservations, user authentication, and an admin dashboard.",
    tools: "HTML, CSS, JavaScript, Node.js, Express, MongoDB",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-20">
              <h2 className="text-minimal text-muted-foreground mb-4">
                PROJECTS
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                What I've Built
              </h3>
            </div>
          </AnimatedSection>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id}>
                <div className="group">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-minimal text-muted-foreground font-medium">
                          {project.id}
                        </span>
                      </div>
                      {project.logo && (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white p-2 border border-border shadow-lg overflow-hidden flex items-center justify-center mb-4 hover:scale-105 transition-transform duration-300">
                          <img
                            src={project.logo}
                            alt={`${project.title} icon`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <h4 className="text-2xl font-light text-architectural mb-2">
                        {project.title}
                      </h4>
                      {project.badge && (
                        <p className="text-minimal text-primary font-medium mb-3">
                          {project.badge}
                        </p>
                      )}
                      {project.link && (
                        <div className="mt-2 mb-4">
                          <a
                            href={project.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium border border-border rounded-full text-foreground/80 hover:text-foreground hover:border-foreground/60 transition-all duration-300"
                          >
                            {project.link.type === "github" ? (
                              <Github size={14} />
                            ) : (
                              <ExternalLink size={14} />
                            )}
                            <span>{project.link.label}</span>
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      {project.bullets ? (
                        <ul className="text-muted-foreground leading-relaxed mb-4 space-y-2 list-none">
                          {project.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="text-foreground/60 select-none">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {project.description}
                        </p>
                      )}

                      <p className="text-minimal text-muted-foreground mb-6">
                        TOOLS: {project.tools}
                      </p>

                      {project.hasPreview && (
                        <div className="rounded-lg border border-border overflow-hidden shadow-lg mt-6">
                          <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-border">
                            <div className="flex items-center gap-1.5">
                              <div className="w-3 h-3 rounded-full bg-red-400" />
                              <div className="w-3 h-3 rounded-full bg-yellow-400" />
                              <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 mx-3">
                              <a
                                href="https://shoflakklba.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 bg-background/60 hover:bg-background/90 rounded-md px-3 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <span>App Link</span>
                                <ExternalLink size={12} />
                              </a>
                            </div>
                          </div>
                          <div className="h-[350px] overflow-hidden">
                            <iframe
                              src="https://shoflakklba.app/"
                              title="Shoflak Klba Landing Page"
                              className="w-full h-full border-0"
                              loading="lazy"
                              sandbox="allow-scripts allow-same-origin"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {index < projects.length - 1 && (
                    <div className="border-b border-border mt-16" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

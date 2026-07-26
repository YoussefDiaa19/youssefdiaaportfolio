import AnimatedSection from "./AnimatedSection";

const universityProjects = [
  {
    title: "Schedule Timetable Management System",
    year: "Third Year",
    course: "Software Engineering Course",
    description:
      "Developed a schedule and timetable management system as part of the Software Engineering course. The platform allows administrators to create, manage, and organize class schedules efficiently, with features for conflict detection, room allocation, and dynamic timetable generation.",
    tools: "PHP, HTML, CSS, JavaScript, SQL",
  },
  {
    title: "Blink Jump — Dino Game with Eye Tracking",
    year: "Third Year",
    course: "Human-Computer Interaction Course",
    description:
      "Recreated the classic Chrome dinosaur jumping game with a twist — instead of pressing the spacebar, players control the jump by blinking. Used a Python backend with OpenCV and a blink-detection library to track eye movements through the webcam in real time. The frontend, built with HTML, CSS, and JavaScript, features selectable characters and adjustable difficulty levels. Flask was used to bridge the Python backend with the web interface.",
    tools: "Python, Flask, OpenCV, HTML, CSS, JavaScript",
  },
  {
    title: "Restaurant Website",
    year: "Second Year",
    course: "Web Development Course",
    description:
      "Developed a full-stack website in a group of 5 colleagues. The platform features a responsive design with separate interfaces for customers and administrators, including an interactive menu management system, real-time reservation handling, account management, and a comprehensive admin dashboard.",
    tools: "HTML, CSS, JavaScript, Node.js, Express, MongoDB",
  },
  {
    title: "Hangman Game",
    year: "Second Year",
    course: "Data Structures Course",
    description:
      "Developed a classic Hangman game using C++ in a group of 5 colleagues, focusing on efficient data structures for word selection and gameplay logic. Designed and implemented a graphical user interface using SFML to enhance interactivity and user experience.",
    tools: "C++, SFML",
  },
  {
    title: "Library Management System",
    year: "Second Year",
    course: "Object-Oriented Programming Course",
    description:
      "Built a Library Management System in a team of 5 colleagues to manage book inventory, user accounts, and borrowing records. Included functionalities for the admin to add, update, and remove books, as well as manage borrowers and track book availability.",
    tools: "Java",
  },
  {
    title: "Car Rental Management System",
    year: "First Year",
    course: "Problem Solving Course",
    award: "Winner of Best Project",
    description:
      "Developed a Car Rental Management System in a group of 4 colleagues to manage customer bookings, vehicle availability, and rental transactions. Implemented features such as a user-friendly interface for adding, removing, and updating cars.",
    tools: "C++",
  },
  {
    title: "Calculator",
    year: "First Year",
    course: "Digital Logic Design Course",
    award: "Winner of Best Project",
    description:
      "Created a Calculator in a group of 5 colleagues, designing the entire logic using gates and built a hardware model to perform basic operations.",
    tools: "Digital Logic Gates, Hardware",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-background">
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

          {/* Personal Projects */}
          <div className="mb-24">
            <AnimatedSection>
              <h4 className="text-minimal text-muted-foreground mb-12 tracking-widest">
                PERSONAL PROJECTS
              </h4>
            </AnimatedSection>

            <AnimatedSection>
              <div className="group">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-minimal text-muted-foreground font-medium">
                        01
                      </span>
                    </div>
                    <h4 className="text-2xl font-light text-architectural mb-2">
                      Shoflak Klba App
                    </h4>
                    <p className="text-minimal text-muted-foreground mb-2">
                      IN PRODUCTION –  APP STORE & PLAY STORE
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <ul className="text-muted-foreground leading-relaxed mb-4 space-y-2 list-none">
                      <li>- Developed a full-stack platform to facilitate pet breeding connections and community engagement, featuring distinct interfaces for pet owners and administrators.</li>
                      <li>- Implemented robust CRUD functionality for pet listings, a real-time messaging system with user-driven content reporting, and secure social authentication (Google & Apple).</li>
                      <li>- Enhanced user experience with Dark Mode support and multi-language localization (English & Arabic).</li>
                      <li>- Includes a comprehensive admin dashboard for listing moderation, user management, and support inquiry handling, alongside push notifications powered by Firebase.</li>
                      <li>- Designed and deployed a dedicated landing page for the app.</li>
                      <li>- Designed the entire UI/UX using Figma, focusing on a mobile-first, user-friendly experience.</li>
                    </ul>
                    <p className="text-minimal text-muted-foreground mb-6">
                      TOOLS: React, TypeScript, Tailwind CSS, Capacitor, Supabase
                      (PostgreSQL, Realtime, Auth), Firebase (Cloud Messaging), CloudFlare R2 (Storage), Figma
                    </p>

                    {/* Embedded Landing Page Preview */}
                    <div className="rounded-lg border border-border overflow-hidden shadow-lg">
                      <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 mx-3">
                          <div className="bg-background/60 rounded-md px-3 py-1 text-xs text-muted-foreground truncate">
                            shoflakklba.app
                          </div>
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
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* University Projects */}
          <div>
            <AnimatedSection>
              <h4 className="text-minimal text-muted-foreground mb-12 tracking-widest">
                UNIVERSITY PROJECTS
              </h4>
            </AnimatedSection>

            <div className="space-y-20">
              {universityProjects.map((project, index) => (
                <AnimatedSection key={index}>
                  <div className="group">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-minimal text-muted-foreground font-medium">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h4 className="text-2xl font-light text-architectural mb-2">
                          {project.title}
                        </h4>
                        <p className="text-minimal text-muted-foreground mb-1">
                          {project.course.toUpperCase()}
                        </p>
                        <p className="text-minimal text-muted-foreground mb-2">
                          {project.year.toUpperCase()}
                        </p>
                        {project.award && (
                          <p className="text-sm font-medium text-foreground">
                            {project.award}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <p className="text-minimal text-muted-foreground">
                          TOOLS: {project.tools}
                        </p>
                      </div>
                    </div>
                    {index < universityProjects.length - 1 && (
                      <div className="border-b border-border mt-12" />
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

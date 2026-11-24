import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center select-none">
      {/* Outer subtle pill container with backdrop blur */}
      <div className="relative py-4 px-2 rounded-full bg-background/40 backdrop-blur-md border border-border/50 shadow-sm flex flex-col items-center">
        {/* Track line background */}
        <div className="relative w-[3px] h-64 bg-muted/70 rounded-full overflow-hidden">
          {/* Spring-animated fill bar */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary origin-top rounded-full"
            style={{
              height: "100%",
              scaleY: smoothProgress,
            }}
          />
        </div>

        {/* Section Dots */}
        <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 w-full flex flex-col justify-between items-center pointer-events-auto">
          {sections.map((section, idx) => {
            const isActive = activeSection === section.id;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={section.id}
                className="relative flex items-center justify-center cursor-pointer group py-1"
                onClick={() => scrollTo(section.id)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Floating Tooltip Label */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-7 px-2.5 py-1 rounded-md text-xs font-medium bg-popover text-popover-foreground border border-border shadow-md whitespace-nowrap pointer-events-none"
                  >
                    {section.label}
                  </motion.div>
                )}

                {/* Dot */}
                <div
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-3 h-3 bg-primary ring-4 ring-primary/20 shadow-sm scale-110"
                      : "w-1.5 h-1.5 bg-muted-foreground/40 group-hover:bg-foreground group-hover:scale-125"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["about", "education", "certificates", "projects", "contact"];

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);

      // Determine active section
      let current = -1;
      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) current = i;
        }
      });
      setActiveIndex(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-0">
      {/* Track */}
      <div className="relative w-px h-48 bg-border rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-foreground rounded-full origin-top"
          style={{ height: `${progress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      {/* Dots */}
      <div className="absolute inset-0 flex flex-col justify-between items-center py-0">
        {sections.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
              i <= activeIndex
                ? "bg-foreground border-foreground scale-110"
                : "bg-background border-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollProgress;

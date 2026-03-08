import { useEffect, useState } from "react";

const sections = ["about", "education", "projects", "certificates", "contact"];

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center">
      {/* Track line */}
      <div className="relative w-[2px] h-56 bg-border/40 rounded-full">
        {/* Filled progress */}
        <div
          className="absolute top-0 left-0 w-full bg-foreground rounded-full transition-all duration-200"
          style={{ height: `${progress * 100}%` }}
        />
        {/* Dots on the track */}
        {sections.map((_, i) => {
          const dotPos = (i / (sections.length - 1)) * 100;
          return (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${dotPos}%`, transform: `translate(-50%, -50%)` }}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  i <= activeIndex
                    ? "w-2.5 h-2.5 bg-foreground shadow-[0_0_8px_hsl(var(--foreground)/0.3)]"
                    : "w-1.5 h-1.5 bg-muted-foreground/40"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollProgress;

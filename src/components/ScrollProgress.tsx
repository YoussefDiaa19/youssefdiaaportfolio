import { useEffect, useState } from "react";

const sections = ["about", "education", "projects", "certificates", "contact"];
const labels = ["About", "Edu", "Work", "Certs", "Contact"];

const ScrollProgress = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
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

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4">
      {sections.map((id, i) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          className="flex items-center gap-3 group"
        >
          <span
            className={`text-[10px] uppercase tracking-widest transition-all duration-300 ${
              i === activeIndex
                ? "opacity-100 text-foreground translate-x-0"
                : "opacity-0 group-hover:opacity-70 translate-x-2 group-hover:translate-x-0 text-muted-foreground"
            }`}
          >
            {labels[i]}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-3 h-3 bg-foreground"
                : i <= activeIndex
                ? "w-2 h-2 bg-foreground/40"
                : "w-2 h-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default ScrollProgress;

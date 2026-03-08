import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty("--glow-x", `${e.clientX}px`);
        glowRef.current.style.setProperty("--glow-y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={glowRef} className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-transform duration-100 ease-out"
        style={{
          opacity: isDark ? 0.3 : 0.5,
          background: isDark
            ? "radial-gradient(circle, hsl(210 80% 55% / 0.5), hsl(210 80% 55% / 0) 70%)"
            : "radial-gradient(circle, hsl(210 70% 40% / 0.6), hsl(210 70% 40% / 0) 70%)",
          left: "var(--glow-x, 50%)",
          top: "var(--glow-y, 50%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px]"
        style={{
          opacity: isDark ? 0.15 : 0.3,
          background: isDark
            ? "radial-gradient(circle, hsl(200 70% 60% / 0.6), transparent 70%)"
            : "radial-gradient(circle, hsl(210 60% 35% / 0.7), transparent 70%)",
          left: "var(--glow-x, 50%)",
          top: "var(--glow-y, 50%)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default MouseGlow;

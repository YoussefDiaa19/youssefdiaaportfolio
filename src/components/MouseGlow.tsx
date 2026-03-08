import { useEffect, useRef } from "react";

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

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
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] transition-transform duration-100 ease-out"
        style={{
          background: "radial-gradient(circle, hsl(210 80% 55% / 0.5), hsl(210 80% 55% / 0) 70%)",
          left: "var(--glow-x, 50%)",
          top: "var(--glow-y, 50%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Secondary ambient glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
        style={{
          background: "radial-gradient(circle, hsl(200 70% 60% / 0.6), transparent 70%)",
          left: "var(--glow-x, 50%)",
          top: "var(--glow-y, 50%)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default MouseGlow;

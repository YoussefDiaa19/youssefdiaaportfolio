import { useTheme } from "./ThemeProvider";
import MouseGlow from "./MouseGlow";
import { Linkedin, Github } from "lucide-react";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: isDark ? "hsl(220, 20%, 8%)" : "hsl(220, 20%, 95%)"
      }}>
      
      <MouseGlow />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          opacity: isDark ? 0.03 : 0.15,
          backgroundImage: isDark ?
          "linear-gradient(hsl(210 50% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 50% 60%) 1px, transparent 1px)" :
          "linear-gradient(hsl(210 30% 70%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 30% 70%) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      

      {/* Mouse glow pass-through layer */}
      <div className="absolute inset-0 z-[1] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1
          className="font-black mb-8 reveal uppercase tracking-tight"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13vw", lineHeight: 0.85 }}>
          
          <span className={`block ${isDark ? "text-white" : "text-foreground"}`}>YOUSSEF</span>
          <span
            className="block"
            style={{
              color: "transparent",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: isDark ? "hsl(210, 70%, 60%)" : "hsl(210, 60%, 50%)"
            }}>DIAA


          </span>
        </h1>
        <p className={`text-xl md:text-2xl font-light tracking-wide max-w-none mx-auto reveal-delayed whitespace-nowrap ${isDark ? "text-white/70" : "text-foreground/60"}`}>
          Computer Science Student · Full Stack Developer · UI/UX Designer
        </p>
        <div className="flex items-center justify-center gap-5 mt-6 reveal-delayed">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className={`w-px h-16 ${isDark ? "bg-white/20" : "bg-foreground/20"}`} />
        <div className={`text-minimal mt-4 rotate-90 origin-center ${isDark ? "text-white/40" : "text-foreground/40"}`}>
          SCROLL
        </div>
      </div>
    </section>);

};

export default Hero;
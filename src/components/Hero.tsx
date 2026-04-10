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
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: isDark ? "hsl(210, 70%, 60%)" : "hsl(210, 60%, 50%)"
            }}>DIAA


          </span>
        </h1>
        <p className={`text-xl md:text-2xl font-light tracking-wide max-w-none mx-auto reveal-delayed whitespace-nowrap ${isDark ? "text-white/70" : "text-foreground/60"}`}>
          Computer Science Student · Full Stack Developer · UI/UX Designer
        </p>
        <div className="flex items-center justify-center gap-6 mt-8 reveal-delayed">
          <a
            href="https://www.linkedin.com/in/youssefdiaa19/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-2.5 border rounded-full transition-all duration-300 ${
              isDark 
                ? "border-white/30 text-white/70 hover:text-white hover:border-white" 
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/YoussefDiaa19"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-2.5 border rounded-full transition-all duration-300 ${
              isDark 
                ? "border-white/30 text-white/70 hover:text-white hover:border-white" 
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
          >
            <Github size={18} />
            <span className="text-sm font-medium">GitHub</span>
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
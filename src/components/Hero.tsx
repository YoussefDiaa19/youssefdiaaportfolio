import { useTheme } from "./ThemeProvider";
import MouseGlow from "./MouseGlow";
import { Linkedin, Github, ArrowDown, Download, Users, GraduationCap, Layers } from "lucide-react";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 py-24"
      style={{
        backgroundColor: isDark ? "hsl(220, 20%, 8%)" : "hsl(220, 20%, 95%)",
      }}
    >
      <MouseGlow />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: isDark ? 0.03 : 0.15,
          backgroundImage: isDark
            ? "linear-gradient(hsl(210 50% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 50% 60%) 1px, transparent 1px)"
            : "linear-gradient(hsl(210 30% 70%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 30% 70%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mouse glow pass-through layer */}
      <div className="absolute inset-0 z-[1] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-12">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs md:text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for New Opportunities</span>
        </div>

        {/* Elegant Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4">
          Youssef Diaa
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-primary tracking-wide mb-5">
          Full-Stack, Mobile & UI/UX Developer
        </p>

        {/* Pitch */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light mb-8">
          Crafting scalable web platforms, cross-platform mobile apps, and intuitive user experiences with clean architecture and real-world usability.
        </p>

        {/* Quick Highlights / Stats */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm text-xs sm:text-sm text-foreground/80 shadow-sm">
            <Users size={15} className="text-primary" />
            <span className="font-medium">7,600+ Users in Production</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm text-xs sm:text-sm text-foreground/80 shadow-sm">
            <GraduationCap size={15} className="text-primary" />
            <span className="font-medium">Software Dev Major @ MIU</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm text-xs sm:text-sm text-foreground/80 shadow-sm">
            <Layers size={15} className="text-primary" />
            <span className="font-medium">Web, Mobile & UI/UX</span>
          </div>
        </div>

        {/* Main Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "#projects")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowDown size={16} />
          </a>
          <a
            href="/Youssef%20Diaa%20CV.pdf"
            download="Youssef Diaa CV.pdf"
            className={`inline-flex items-center gap-2 px-6 py-3 border rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
              isDark
                ? "border-white/20 text-white/90 hover:border-white hover:text-white bg-white/5"
                : "border-border text-foreground/90 hover:border-foreground bg-background/50"
            }`}
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/youssefdiaa19/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-medium transition-all duration-300 ${
              isDark
                ? "border-white/20 text-white/70 hover:text-white hover:border-white bg-white/5"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground bg-background/30"
            }`}
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/YoussefDiaa19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-medium transition-all duration-300 ${
              isDark
                ? "border-white/20 text-white/70 hover:text-white hover:border-white bg-white/5"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground bg-background/30"
            }`}
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, "#about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <div className={`w-px h-10 ${isDark ? "bg-white/20" : "bg-foreground/20"} group-hover:h-12 transition-all duration-300`} />
          <span className="text-[10px] tracking-widest uppercase">SCROLL</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

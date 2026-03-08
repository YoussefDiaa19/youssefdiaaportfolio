const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[hsl(220,20%,8%)]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(210 50% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 50% 60%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mouse glow pass-through layer */}
      <div className="absolute inset-0 z-[1] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1
          className="font-black mb-8 reveal uppercase tracking-tight"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13vw", lineHeight: 0.85 }}
        >
          <span className="text-white block">YOUSSEF</span>
          <span
            className="block"
            style={{
              color: "transparent",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "hsl(210, 70%, 60%)",
            }}
          >
            DIAA
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-2xl mx-auto reveal-delayed">
          Computer Science Student · Full Stack Software Engineer
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/20" />
        <div className="text-minimal text-white/40 mt-4 rotate-90 origin-center">
          SCROLL
        </div>
      </div>
    </section>
  );
};

export default Hero;

import MouseGlow from "@/components/MouseGlow";

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

      <MouseGlow />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white text-architectural mb-8 reveal tracking-[-0.04em]">
          YOUSSEF
          <br />
          DIAA
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

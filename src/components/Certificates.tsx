const Certificates = () => {
  return (
    <section id="certificates" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">
              CERTIFICATES
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Certifications & Awards
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            <div className="group border-l-2 border-foreground pl-6">
              <p className="text-minimal text-muted-foreground mb-2">
                PLACEHOLDER
              </p>
              <h4 className="text-2xl font-light mb-4 text-architectural">
                Your Certificate Here
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Upload your CV and I'll populate this section with your actual
                certificates and achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

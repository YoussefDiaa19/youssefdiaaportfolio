import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

interface CertificateItem {
  id: string;
  issuer: string;
  title: string;
  description: string;
  link: string;
}

const certificates: CertificateItem[] = [
  {
    id: "01",
    issuer: "GOOGLE · COURSERA",
    title: "Foundations of User Experience (UX) Design",
    description:
      "Course 1 of 7 in the Google UX Design Professional Certificate. Covers the basics of UX design, including user-centered design, design sprints, and the role of a UX designer.",
    link: "https://coursera.org/share/e2a64e919d11c69cd0a2fabafafc7aa2",
  },
  {
    id: "02",
    issuer: "GOOGLE · COURSERA",
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    description:
      "Course 2 of 7 in the Google UX Design Professional Certificate. Focuses on empathizing with users, defining pain points, and ideating design solutions.",
    link: "https://coursera.org/share/fbba5f4a098752fbc1f270c6c11e64b6",
  },
  {
    id: "03",
    issuer: "IBM · COURSERA",
    title: "Generative AI: Prompt Engineering Basics",
    description:
      "Covers core prompt engineering techniques including chain-of-thought, tree-of-thought, and multimodal prompting to guide generative AI models toward accurate, reasoned, and neutral outputs.",
    link: "https://coursera.org/share/6079a75357393311b5937a70cbdbf25e",
  },
];

const Certificates = () => {
  return (
    <section id="certifications" className="py-32 bg-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-20">
              <h2 className="text-minimal text-muted-foreground mb-4">
                CERTIFICATIONS
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Certifications
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <AnimatedSection key={cert.id}>
                <div className="group border-l-2 border-foreground pl-6 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-minimal text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    <h4 className="text-2xl font-light mb-4 text-architectural">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-full text-xs font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      <span>Certificate</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

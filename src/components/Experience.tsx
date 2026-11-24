import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  logo: string;
  logoContainerClass?: string;
  logoImgClass?: string;
  bullets: React.ReactNode[];
  tools?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "01",
    title: "ET3 Summer Internship – Frontend Developer Intern",
    company: "ET3",
    period: "AUGUST – OCTOBER 2026",
    logo: "/images/logos/et3.jpg",
    logoContainerClass: "bg-white p-2",
    logoImgClass: "w-full h-full object-contain",
    bullets: [
      <>
        Architected a 3-step admission email gate for{" "}
        <a
          href="https://sabeqoon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors inline-flex items-center gap-0.5"
        >
          <span>Sabeqoon</span>
          <ExternalLink size={12} className="inline ml-0.5" />
        </a>{" "}
        with 6-digit OTP verification and session-token locking, blocking duplicate/invalid accounts and auto-filling parent records.
      </>,
      "Built an email-first staff onboarding flow (handling 4 API states), debounced Parent 2 lookup, portal-rendered country-code phone inputs with per-country digit validation, and responsive emergency contact cards.",
      "Engineered trilingual i18n (English, Arabic RTL, Turkish) with 50+ react-i18next keys, reusable MUI resource modals, and a state-preserving language switcher, passing 10/10 API test cases across 3 Git branches.",
    ],
    tools: [
      "React",
      "Redux",
      "React Router",
      "Material-UI (MUI)",
      "React Bootstrap",
      "react-i18next",
      "Axios",
      "Git",
    ],
  },
  {
    id: "02",
    title: "El Araby Summer Internship — UI/UX Design Intern",
    company: "EL ARABY GROUP",
    period: "AUGUST – SEPTEMBER 2025",
    logo: "/images/logos/elaraby.png",
    logoContainerClass: "bg-[#005ba8] p-0 border-transparent",
    logoImgClass: "w-full h-full object-cover rounded-2xl",
    bullets: [
      "Conducted user interface research, wireframing, and interactive prototyping within the Digital Solutions team.",
      "Delivered usability and UI design improvements for customer-facing digital products in collaboration with product and engineering teams.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-20">
              <h2 className="text-minimal text-muted-foreground mb-4">
                EXPERIENCE
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Work Experience
              </h3>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.id}>
                <div className="group">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex items-center gap-4 sm:flex-col sm:items-start shrink-0">
                      <span className="text-minimal text-muted-foreground font-medium">
                        {exp.id}
                      </span>
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-border shadow-sm flex items-center justify-center shrink-0 overflow-hidden ${
                          exp.logoContainerClass || "bg-white p-2"
                        }`}
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          className={exp.logoImgClass || "w-full h-full object-contain"}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                        <h4 className="text-2xl font-light text-architectural">
                          {exp.title}
                        </h4>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-minimal text-muted-foreground mb-4">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-300 font-medium underline-offset-4 hover:underline"
                          >
                            <span>{exp.company}</span>
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <span className="font-medium">{exp.company}</span>
                        )}
                        <span>·</span>
                        <span>{exp.period}</span>
                      </div>

                      <ul className="text-muted-foreground leading-relaxed mb-4 space-y-2 list-none">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-foreground/60 select-none">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.tools && exp.tools.length > 0 && (
                        <p className="text-minimal text-muted-foreground">
                          TOOLS: {exp.tools.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="border-b border-border mt-16" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

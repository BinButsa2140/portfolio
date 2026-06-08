import {
  Mail,
  Phone,
  GraduationCap,
  Code2,
  Layers,
  Wrench,
} from "lucide-react";
import { ThemeConfig } from "@/types/type";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.6 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.6a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.9 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const Information = ({ theme }: { theme: ThemeConfig }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 opacity-70" />,
      skills: [
        "TypeScript",
        "JavaScript",
        "SQL",
        "Golang",
        "Python",
        "Java",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5 opacity-70" />,
      skills: [
        "Node.js",
        "NestJS",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Vite",
        "Jest",
      ],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5 opacity-70" />,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Git",
        "GitHub",
        "GitLab",
        "Postman",
        "DBeaver",
        "Figma",
        "Docker",
      ],
    },
  ];

  return (
    <div
      // เอา backdrop-blur-sm ออกแล้ว
      className={`max-w-5xl mx-auto my-10 rounded-[2.5rem] shadow-2xl border overflow-hidden transition-colors duration-1000 backdrop-blur-none ${theme.colors.bgPrimary} ${theme.colors.border}`}
    >
      <div
        className={`relative w-full h-48 md:h-64 flex items-center justify-center border-b transition-colors duration-1000 ${theme.colors.bgSecondary} ${theme.colors.border}`}
      >
        <span
          className={`text-sm font-medium absolute z-10 ${theme.colors.textSecondary}`}
        >
          Insert Cover Photo
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      <div className="p-8 md:p-12 space-y-8">
        <div className="flex flex-col gap-6">
          <div className="text-center md:text-left">
            <h1
              className={`text-4xl md:text-5xl font-bold tracking-tight mb-2 transition-colors duration-1000 ${theme.colors.textPrimary}`}
            >
              Binsung Butsabong
            </h1>
            <p
              className={`text-xl md:text-2xl font-medium transition-colors duration-1000 ${theme.colors.textSecondary}`}
            >
              Full-Stack Developer
            </p>
          </div>

          <div
            className={`flex flex-col lg:flex-row gap-3 lg:gap-6 text-sm md:text-base font-medium justify-center md:justify-start transition-colors duration-1000 ${theme.colors.textSecondary}`}
          >
            <a
              href="mailto:binsung.butsabong@gmail.com"
              className="group flex items-center gap-2 justify-center hover:opacity-70 transition-opacity"
            >
              <Mail
                className={`w-4 h-4 transition-colors ${theme.colors.accent}`}
              />
              <span>binsung.butsabong@gmail.com</span>
            </a>
            <a
              href="tel:+66870574516"
              className="group flex items-center gap-2 justify-center hover:opacity-70 transition-opacity"
            >
              <Phone
                className={`w-4 h-4 transition-colors ${theme.colors.accent}`}
              />
              <span>(+66) 087-057-4516</span>
            </a>
            <a
              href="https://github.com/BinButsa2140"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 justify-center hover:opacity-70 transition-opacity"
            >
              <GithubIcon
                className={`w-4 h-4 transition-colors ${theme.colors.accent}`}
              />
              <span className="font-bold">GitHub :</span> BinButsa2140
            </a>
          </div>
        </div>

        <p
          className={`leading-relaxed md:text-lg text-center md:text-left transition-colors duration-1000 ${theme.colors.textSecondary}`}
        >
          Full-Stack Developer with hands-on experience in System Design,
          Migration, and Automation. Proficient in designing web architectures
          and integrating LLMs for document processing. Passionate about
          building impactful products and writing reliable code.
        </p>

        <div className="flex justify-center md:justify-start">
          <div
            className={`p-5 rounded-3xl border inline-block w-full lg:w-auto text-left shadow-sm transition-all duration-1000 hover:shadow-md ${theme.colors.bgSecondary} ${theme.colors.border}`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-2 rounded-full shadow-sm ${theme.colors.bgPrimary}`}
              >
                <GraduationCap
                  className={`w-6 h-6 ${theme.colors.textPrimary}`}
                />
              </div>
              <div>
                <p className={`font-bold ${theme.colors.textPrimary}`}>
                  Kasetsart University
                </p>
                <p
                  className={`text-sm font-medium mt-1 ${theme.colors.textSecondary}`}
                >
                  B.S. Computer Science (First Class Honours)
                </p>
                <p
                  className={`text-sm opacity-80 ${theme.colors.textSecondary}`}
                >
                  GPA: 3.84
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`space-y-6 pt-4 border-t transition-colors duration-1000 ${theme.colors.border}`}
        >
          <p
            className={`text-sm font-bold uppercase tracking-widest text-center md:text-left ${theme.colors.textSecondary}`}
          >
            Technical Skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                <div
                  className={`flex items-center gap-2 justify-center md:justify-start group ${theme.colors.textPrimary}`}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {category.icon}
                  </div>
                  <span className="font-semibold">{category.title}</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {category.skills.map((tech) => (
                    <span
                      key={tech}
                      // เอา backdrop-blur-sm ออกแล้ว
                      className={`px-3 py-1.5 border rounded-xl text-sm font-medium shadow-sm transition-all duration-1000 hover:scale-105 cursor-default ${theme.colors.bgSecondary} ${theme.colors.border} ${theme.colors.textPrimary}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
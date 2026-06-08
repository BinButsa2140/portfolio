import { Calendar, Code2, CheckCircle2 } from 'lucide-react';
import { ThemeConfig } from "@/types/type";

const Projects = ({ theme }: { theme: ThemeConfig }) => {
  const projectData = [
    {
      id: 'auto-course-gen',
      title: 'Automated Course Generation System',
      badge: 'Senior Project',
      period: 'December 2025',
      technologies: ['Next.js', 'Golang', 'TypeScript', 'JavaScript', 'Gemini API', 'PostgreSQL'],
      descriptions: [
        'Designed a document processing pipeline to validate input files and dynamically extract text content page-by-page based on the Table of Contents (TOC).',
        'Integrated Large Language Models (LLMs) to process the extracted documents and automatically generate structured learning courses categorized by chapters.',
        'Implemented an automated license validation mechanism to verify the copyright status and usability of uploaded documents prior to processing.'
      ]
    },
    {
      id: 'kitchen-booking',
      title: 'Kitchen Booking System',
      badge: 'Full-Stack Project',
      period: 'March 2025',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MySQL', 'NextAuth.js'],
      descriptions: [
        'Developed a full-stack web application using Next.js, React, and TypeScript to manage kitchen room reservations, equipment tracking, and user bookings.',
        'Implemented secure user authentication via NextAuth.js and structured relational database schemas using Prisma ORM with MySQL.'
      ]
    }
  ];

  return (
    <div className={`max-w-5xl mx-auto my-10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border transition-colors duration-1000 ${theme.colors.bgPrimary} ${theme.colors.border}`}>
      
      <div className="mb-10 text-center md:text-left flex items-center justify-center md:justify-start gap-4">
        <div>
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-1000 ${theme.colors.textPrimary}`}>
            Projects
          </h2>
          <p className={`mt-1 font-medium transition-colors duration-1000 ${theme.colors.textSecondary}`}>
            Academic and independent development works
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <div 
            key={project.id} 
            className={`flex flex-col transition-all duration-300 border rounded-[2rem] p-6 md:p-8 shadow-sm hover:scale-[1.02] hover:shadow-md ${theme.colors.bgSecondary} ${theme.colors.border}`}
          >
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-3 border opacity-90 transition-colors duration-1000 ${theme.colors.bgPrimary} ${theme.colors.border} ${theme.colors.textPrimary}`}>
                {project.badge}
              </span>
              <h3 className={`text-2xl font-bold leading-tight transition-colors duration-1000 ${theme.colors.textPrimary}`}>
                {project.title}
              </h3>
              
              <div className={`flex items-center gap-2 text-sm font-medium mt-3 transition-colors duration-1000 ${theme.colors.textSecondary}`}>
                <Calendar className="w-4 h-4" />
                <span>{project.period}</span>
              </div>
            </div>

            <ul className={`space-y-3 leading-relaxed list-none mb-8 flex-1 transition-colors duration-1000 ${theme.colors.textSecondary}`}>
              {project.descriptions.map((desc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 opacity-60 ${theme.colors.textSecondary}`} />
                  <span className="text-sm md:text-base">{desc}</span>
                </li>
              ))}
            </ul>

            <div className={`pt-6 border-t mt-auto transition-colors duration-1000 ${theme.colors.border}`}>
              <div className={`flex items-center gap-2 mb-3 ${theme.colors.textSecondary}`}>
                <Code2 className="w-4 h-4 opacity-70" />
                <span className="text-xs font-bold uppercase tracking-widest opacity-70">
                  Technologies Used
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className={`px-3 py-1.5 border rounded-xl text-xs font-semibold shadow-sm transition-colors duration-1000 ${theme.colors.bgPrimary} ${theme.colors.border} ${theme.colors.textPrimary}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Projects;
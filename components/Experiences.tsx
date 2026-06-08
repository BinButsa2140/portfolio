'use client';
import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Globe, ChevronDown } from 'lucide-react';
import { ThemeConfig } from "@/types/type";

const Experiences = ({ theme }: { theme: ThemeConfig }) => {
  const [expandedId, setExpandedId] = useState<string | null>('eec');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experienceData = [
    {
      id: 'eec',
      role: 'Freelance Full Stack Developer',
      company: 'EEC Search Industry',
      location: 'Bangkok, Thailand',
      period: 'April 2025 - Present',
      descriptions: [
        'Developed and maintained a full-stack CMS platform for managing internal organizational content across multiple websites.',
        'Built responsive front-end interfaces using Next.js and Tailwind CSS to improve content management workflows.',
        'Designed and integrated RESTful APIs and database systems to support seamless data synchronization.'
      ],
      projects: [
        {
          name: 'MAN Building Inspection & Design',
          url: 'https://manbuilding.co.th/th/',
          role: 'Fullstack, UI Design',
          description: 'Bilingual website integrated with a custom backend CMS supporting Markdown data and Cloudinary.',
          tech: ['Next.js 15', 'Tailwind CSS v4', 'react-markdown'],
          image: '/experiences/EEC/manbuilding.png'
        },
        {
          name: 'Puwapat Air-con',
          url: 'https://eec-preview.vercel.app/',
          role: 'Frontend, UI Design',
          description: 'Modern website for a solar panel installation company showcasing portfolio and certifications.',
          tech: ['Next.js', 'Tailwind CSS'],
          image: '/experiences/EEC/puwapat.png'
        },
        {
          name: 'HengWash (เฮงวอช สะดวกซัก)',
          url: 'https://hengwash.eecsearch.co.th/',
          role: 'Frontend, UI Design',
          description: 'A 24-hour premium laundromat and delivery service single-page promotional website.',
          tech: ['Next.js', 'Tailwind CSS'],
          image: '/experiences/EEC/hengwash.png'
        },
        {
          name: 'Hengudomporn (เฮงอุดมพร)',
          url: 'https://www.hengudomporn.co.th/',
          role: 'Frontend, UI Design',
          description: 'V1 modern responsive website for a construction contractor featuring a project portfolio.',
          tech: ['Next.js', 'Tailwind CSS'],
          image: '/experiences/EEC/hengudomporn.png'
        }
      ]
    },
    {
      id: 'gosoft',
      role: 'Software Engineer Cooperative',
      company: 'Gosoft (Thailand) Co., Ltd.',
      location: 'Bangkok, Thailand',
      period: 'November 2025 - March 2026',
      descriptions: [
        'Migrated legacy Java code for the Store Business Partner Management System (SBP Mall) to a modern technology stack, redeveloping system logic using TypeScript, Node.js, and NestJS for backend services, and Next.js to support the current architecture.',
        'Designed and developed backend services for document creation and inventory availability tracking, managing data structures utilizing PostgreSQL.',
        'Verified system functionality through automated audit statements to evaluate performance and ensure data accuracy according to defined standards.',
        'Implemented unit tests using Jest, resolved software defects reported by QA teams, and provided technical support during User Acceptance Testing (UAT) to ensure system reliability.'
      ]
    },
    {
      id: 'botnoi',
      role: 'Backend Developer Intern',
      company: 'Botnoi Consulting',
      location: 'Bangkok, Thailand',
      period: 'April 2025 - June 2025',
      descriptions: [
        'Developed an automated "One Stop Service" leave management bot on Discord using n8n workflows.',
        'Integrated MongoDB for persistent leave data storage and Google Sheets for real-time reporting to HR.',
        'Implemented automated notification and tagging features to alert team leads and mentors about daily leave status and upcoming absences.'
      ]
    }
  ];

  return (
    <div className={`max-w-5xl mx-auto my-10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border transition-colors duration-1000 ${theme.colors.bgPrimary} ${theme.colors.border}`}>
      
      <div className="mb-10 text-center md:text-left">
        <h2 className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-1000 ${theme.colors.textPrimary}`}>
          Work Experience
        </h2>
        <p className={`mt-2 font-medium transition-colors duration-1000 ${theme.colors.textSecondary}`}>
          Professional journey and technical contributions
        </p>
      </div>

      <div className={`relative border-l-2 ml-3 md:ml-4 space-y-8 transition-colors duration-1000 ${theme.colors.border}`}>
        {experienceData.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              
              <div className={`absolute -left-[21px] top-1 w-10 h-10 rounded-full border shadow-sm flex items-center justify-center z-10 transition-colors duration-1000 ${theme.colors.bgSecondary} ${theme.colors.border}`}>
                <Briefcase className={`w-4 h-4 ${theme.colors.textPrimary}`} />
              </div>

              <button 
                onClick={() => toggleExpand(exp.id)}
                className="w-full text-left flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-2 group"
              >
                <div>
                  <h3 className={`text-xl md:text-2xl font-bold flex items-center gap-2 transition-colors duration-300 hover:opacity-80 ${theme.colors.textPrimary}`}>
                    {exp.role}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} ${theme.colors.textSecondary}`} />
                  </h3>
                  <h4 className={`text-lg font-semibold mt-1 transition-colors duration-1000 ${theme.colors.accent}`}>
                    {exp.company}
                  </h4>
                </div>
                
                <div className={`flex flex-col gap-1.5 text-sm font-medium px-4 py-2 rounded-2xl border w-fit transition-colors duration-1000 ${theme.colors.bgSecondary} ${theme.colors.border} ${theme.colors.textSecondary}`}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </button>

              <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  
                  <ul className={`space-y-3 leading-relaxed list-none mb-6 transition-colors duration-1000 ${theme.colors.textSecondary}`}>
                    {exp.descriptions.map((desc, index) => (
                      <li key={index} className="relative pl-5">
                        <span className={`absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full opacity-50 ${theme.colors.bgPrimary}`} style={{backgroundColor: 'currentColor'}} />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {exp.projects && (
                    <div className={`mt-8 border-t pt-6 transition-colors duration-1000 ${theme.colors.border}`}>
                      <h5 className={`text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 ${theme.colors.textSecondary}`}>
                        <Globe className="w-4 h-4" /> Key Projects
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.projects.map((project, idx) => (
                          <a 
                            key={idx} 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`group flex flex-col transition-all duration-300 border rounded-2xl p-4 shadow-sm hover:scale-[1.02] hover:shadow-md ${theme.colors.bgSecondary} ${theme.colors.border}`}
                          >
                            <div className={`w-full h-32 rounded-lg mb-4 overflow-hidden border relative ${theme.colors.bgPrimary} ${theme.colors.border}`}>
                              <div className="absolute top-2 left-2 flex gap-1.5 z-10">
                                <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400/80"></div>
                              </div>
                              <img 
                                src={project.image} 
                                alt={project.name}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.parentElement!.innerHTML += `<div class="w-full h-full flex items-center justify-center text-xs opacity-50 ${theme.colors.textSecondary}">Preview Image</div>`;
                                }}
                              />
                            </div>

                            <div className="flex justify-between items-start gap-2 mb-2">
                              <h6 className={`font-bold transition-colors group-hover:opacity-80 ${theme.colors.textPrimary}`}>
                                {project.name}
                              </h6>
                              <ExternalLink className={`w-4 h-4 shrink-0 transition-colors group-hover:opacity-80 ${theme.colors.accent}`} />
                            </div>
                            
                            <p className={`text-sm mb-3 line-clamp-2 transition-colors duration-1000 ${theme.colors.textSecondary}`}>
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mt-auto">
                              {project.tech.map((techItem) => (
                                <span 
                                  key={techItem} 
                                  className={`text-[10px] px-2 py-0.5 border rounded-full font-medium transition-colors duration-1000 ${theme.colors.bgPrimary} ${theme.colors.border} ${theme.colors.textSecondary}`}
                                >
                                  {techItem}
                                </span>
                              ))}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Experiences;
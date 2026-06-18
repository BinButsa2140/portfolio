"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Briefcase, Calendar, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react';
import { ThemeConfig } from "@/types/type";

interface ExperienceDetail {
  title?: string;
  items: string[];
}

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  image?: string;
  details: ExperienceDetail[];
}

const Experiences = ({ theme }: { theme: ThemeConfig }) => {
  const [expandedId, setExpandedId] = useState<string | null>('gosoft');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experienceData: Experience[] = [
        {
      id: 'eec',
      role: 'Freelance Full Stack Developer',
      company: 'EEC Search Industry',
      location: 'Bangkok, Thailand',
      period: 'April 2025 - Present',
      image: '/experiences/EEC/eec.jpg',
      details: [
        {
          title: "Corporate Websites Development",
          items: [
            "Developed four distinct corporate websites with a primary focus on Search Engine Optimization (SEO).",
            "Utilized a modern tech stack including Next.js, Tailwind CSS, and Lucide React to build highly responsive and performant user interfaces."
          ]
        },
        {
          title: "Scalable CMS & Quotation Platform",
          items: [
            "Engineered a scalable Content Management System (CMS) designed to accommodate future expansion across multiple affiliated companies.",
            "Implemented secure authentication using NextAuth.js, integrated with session management and rate limiting protocols.",
            "Managed content rendering via ReactMarkdown and integrated Cloudinary for robust image hosting and optimization.",
            "Developed a Quotation Management system allowing prospective clients to submit requests, with a comprehensive state-management backend for administrators to track the lifecycle from initiation to completion."
          ]
        },
        {
          title: "EECCMS (Multi-tenant Content Management System)",
          items: [
            "Developed a centralized multi-tenant CMS for corporate clients under the EEC Search umbrella.",
            "Designed a data architecture enabling client companies to independently manage their backend data, dynamically updating their respective frontend websites.",
            "Built an administrative dashboard to track user website traffic and analytics utilizing session data."
          ]
        }
      ]
    },
    {
      id: 'gosoft',
      role: 'Software Engineer Cooperative',
      company: 'Gosoft (Thailand) Co., Ltd.',
      location: 'Bangkok, Thailand',
      period: 'November 2025 - March 2026',
      image: '/experiences/Gosoft/wss.jpg',
      details: [
        {
          title: "Frontend & UI Development",
          items: [
            "Developed user interfaces for document submission workflows, featuring tabbed navigation, recipient selection, historical audit logs, and data verification filters."
          ]
        },
        {
          title: "Document Processing Module",
          items: [
            "PDF Processing: Developed a PDF merging system using pdf-lib, implementing watermarks, bookmarks, and password protection for enhanced document security.",
            "Two-phase Email Delivery: Engineered a two-step email dispatch logic, initially sending the encrypted document and subsequently automating the password delivery upon successful transmission confirmation.",
            "Data Cleanup & Logging: Implemented transaction logging and developed automated data retention logic to purge expired records to optimize database storage."
          ]
        },
        {
          title: "Report Generation Module",
          items: [
            "CSV Parsing & Mapping: Developed CSV parsing logic utilizing Regex to safely handle embedded characters, mapping the extracted data into DTO formats with ID padding.",
            "Data Enrichment & Routing: Implemented dynamic routing logic to assign communications based on hierarchical branch performance data.",
            "Display Logic: Engineered dynamic calculation features and text processing based on multi-variable business rules and conditional formatting.",
            "PDF Generation: Utilized PDFKit for absolute positioning generation of A4 reports, maintaining strict structural parity with legacy Jasper Reports outputs.",
            "Database Transaction: Managed data integrity through database transactions, safely executing legacy data deletion and Upsert operations into core tables."
          ]
        },
        {
          title: "Data Analytics Module",
          items: [
            "Historical Data Reporting: Wrote complex Raw SQL queries utilizing CTEs, Window Functions, and FILTER pivots to aggregate and compare 24-36 months of historical performance metrics across different regional dimensions.",
            "Batch Data Import: Engineered a stream-based data import pipeline with iconv (win874) encoding conversion, accumulated calculation logic, staging table buffering, and batch-sized database inserts. Integrated with AWS S3 for file management and automated status alerts."
          ]
        },
        {
          title: "Testing & QA Collaboration",
          items: [
            "Developed Unit Tests using Jest for core system modules to validate critical business logic.",
            "Collaborated with the QA team to resolve over 100 software defects across the UI, backend logic, and SQL queries, ensuring system readiness for User Acceptance Testing (UAT)."
          ]
        }
      ]
    },
    {
      id: 'botnoi',
      role: 'Backend Developer',
      company: 'Botnoi Consulting',
      location: 'Bangkok, Thailand',
      period: 'April 2025 - June 2025',
      
      details: [
        {
          title: "AI Chatbot Leave Management System (Hackathon)",
          items: [
            "Developed an automated leave management AI Chatbot using the LINE Messaging API during an internal corporate Hackathon.",
            "Designed a conversational flow where the chatbot intercepts user leave requests and automatically generates a confirmation prompt for the specified dates.",
            "Integrated the system with Google Sheets to persist leave records, facilitating accessible monitoring for the HR department.",
            "Implemented logic to map and verify the hierarchical relationship between employees and their respective team mentors.",
            "Created an automated daily summary report that tags and notifies relevant team mentors of upcoming absences every day at 9:00 AM."
          ]
        }
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
                  
                  {/* Image Section */}
                  {exp.image && (
                    <div className={`relative w-full h-48 md:h-64 mb-6 rounded-2xl overflow-hidden border transition-colors duration-1000 ${theme.colors.border}`}>
                      <Image 
                        src={exp.image} 
                        alt={`${exp.company} workplace`} 
                        fill 
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  )}

                  {/* Details Section */}
                  <div className="space-y-6">
                    {exp.details.map((detail, idx) => (
                      <div key={idx}>
                        {detail.title && (
                          <h5 className={`text-base font-bold mb-3 transition-colors duration-1000 ${theme.colors.textPrimary}`}>
                            {detail.title}
                          </h5>
                        )}
                        <ul className={`space-y-2.5 leading-relaxed list-none transition-colors duration-1000 ${theme.colors.textSecondary}`}>
                          {detail.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3">
                              <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 opacity-60 ${theme.colors.accent}`} />
                              <span className="text-sm md:text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

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
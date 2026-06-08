'use client'; // จำเป็นต้องใช้ 'use client' เพราะมีการใช้ useState สำหรับเปิด-ปิด Dropdown
import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Globe, ChevronDown } from 'lucide-react';

const Experiences = () => {
  // สร้าง State เก็บ ID ของ Experience ที่กำลังเปิดอยู่ (เปิดอันแรกไว้เป็นค่าเริ่มต้น)
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
          image: '/experiences/EEC/manbuilding.png' // ใส่ชื่อไฟล์รูปภาพที่คุณเตรียมไว้ในโฟลเดอร์ public
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
    <div className="max-w-5xl mx-auto my-10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl bg-white/40 -2xl border border-white/50 text-gray-800">
      
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Work Experience
        </h2>
        <p className="text-gray-500 mt-2 font-medium">
          Professional journey and technical contributions
        </p>
      </div>

      <div className="relative border-l-2 border-gray-200/60 ml-3 md:ml-4 space-y-8">
        {experienceData.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              
              <div className="absolute -left-[21px] top-1 w-10 h-10 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center z-10">
                <Briefcase className="w-4 h-4 text-gray-500" />
              </div>

              {/* ส่วนหัวที่สามารถคลิกเพื่อเปิด/ปิด Dropdown ได้ */}
              <button 
                onClick={() => toggleExpand(exp.id)}
                className="w-full text-left flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-2 group"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                    {exp.role}
                    {/* ไอคอนลูกศร เปลี่ยนทิศทางตามสถานะ isExpanded */}
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mt-1">
                    {exp.company}
                  </h4>
                </div>
                
                <div className="flex flex-col gap-1.5 text-sm font-medium text-gray-500 bg-white/50 px-4 py-2 rounded-2xl border border-white/60 w-fit -md">
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

              {/* ส่วนเนื้อหาที่จะถูกซ่อน/แสดง (ใช้ CSS Grid เพื่อทำ Animation การเปิด/ปิดที่ลื่นไหล) */}
              <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  
                  <ul className="space-y-3 text-gray-600 leading-relaxed list-none mb-6">
                    {exp.descriptions.map((desc, index) => (
                      <li key={index} className="relative pl-5">
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-400/60" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* ส่วนแสดงผลงานโปรเจกต์ (ถ้ามี) */}
                  {exp.projects && (
                    <div className="mt-8 border-t border-gray-200/50 pt-6">
                      <h5 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Globe className="w-4 h-4" /> Key Projects
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.projects.map((project, idx) => (
                          <a 
                            key={idx} 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex flex-col bg-white/50 hover:bg-white/80 transition-all duration-300 border border-white/60 rounded-2xl p-4 shadow-sm -md hover:shadow-md"
                          >
                            <div className="w-full h-32 bg-gray-200/50 rounded-lg mb-4 overflow-hidden border border-gray-200/50 relative">
                              <div className="absolute top-2 left-2 flex gap-1.5 z-10">
                                <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400/80"></div>
                              </div>
                              {/* เรียกใช้รูปภาพจากโฟลเดอร์ public */}
                              <img 
                                src={project.image} 
                                alt={project.name}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                // ถ้าไม่มีรูปภาพ ให้แสดงสีเทา
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.parentElement!.innerHTML += '<div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 text-xs">Preview Image</div>';
                                }}
                              />
                            </div>

                            <div className="flex justify-between items-start gap-2 mb-2">
                              <h6 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {project.name}
                              </h6>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 shrink-0" />
                            </div>
                            
                            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mt-auto">
                              {project.tech.map((techItem) => (
                                <span 
                                  key={techItem} 
                                  className="text-[10px] px-2 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-gray-600 font-medium"
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
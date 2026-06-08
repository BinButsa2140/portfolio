import { FolderGit2, Calendar, Code2, CheckCircle2 } from 'lucide-react';

const Projects = () => {
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
    <div className="max-w-5xl mx-auto my-10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl bg-white/40 2xl border border-white/50 text-gray-800">
      
      {/* ส่วนหัว */}
      <div className="mb-10 text-center md:text-left flex items-center justify-center md:justify-start gap-4">
        {/* <div className="p-3 bg-white/60 rounded-2xl shadow-sm border border-gray-200/50">
          <FolderGit2 className="w-8 h-8 text-gray-700" />
        </div> */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Projects
          </h2>
          <p className="text-gray-500 mt-1 font-medium">
            Academic and independent development works
          </p>
        </div>
      </div>

      {/* โครงสร้างการ์ด (Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col bg-white/50 hover:bg-white/70 transition-all duration-300 border border-white/60 rounded-[2rem] p-6 md:p-8 shadow-sm md"
          >
            {/* หัวข้อโปรเจกต์ */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100/50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-3 border border-blue-200/50">
                {project.badge}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mt-3">
                <Calendar className="w-4 h-4" />
                <span>{project.period}</span>
              </div>
            </div>

            {/* รายละเอียด */}
            <ul className="space-y-3 text-gray-600 leading-relaxed list-none mb-8 flex-1">
              {project.descriptions.map((desc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{desc}</span>
                </li>
              ))}
            </ul>

            {/* เทคโนโลยีที่ใช้ */}
            <div className="pt-6 border-t border-gray-200/60 mt-auto">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Technologies Used
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 bg-white/60 border border-gray-200/60 rounded-xl text-xs font-semibold text-gray-700 shadow-sm"
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
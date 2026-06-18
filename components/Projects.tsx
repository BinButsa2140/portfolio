"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Calendar, Code2, CheckCircle2, ExternalLink, X, FileText, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { ThemeConfig } from "@/types/type";
import { motion, AnimatePresence } from "framer-motion";

// Custom Github Icon
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.6 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.6a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.9 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

// ==================================================
// Component ย่อยสำหรับสไลด์โชว์รูปภาพวิ่งอัตโนมัติ inside Modal
// รับ theme เข้ามาเพื่อจัดสีให้ตรงกัน
// ==================================================
const ImageSlideshow = ({ images, theme }: { images: string[], theme: ThemeConfig }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [images, isHovered]);

  if (!images || images.length === 0) {
    return (
      <div className={`relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border shadow-inner flex flex-col items-center justify-center gap-3 transition-colors duration-1000 ${theme.colors.bgSecondary} ${theme.colors.border}`}>
        <ImageOff className={`w-10 h-10 opacity-30 ${theme.colors.textSecondary}`} />
        <span className={`text-sm font-medium opacity-50 uppercase tracking-widest ${theme.colors.textSecondary}`}>
          No Image Available
        </span>
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border shadow-inner transition-colors duration-1000 ${theme.colors.bgSecondary} ${theme.colors.border}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full shrink-0 relative">
            <Image
              src={img}
              alt={`Slide ${idx}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 shadow-md text-white transition-all z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 shadow-md text-white transition-all z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-5' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

interface Project {
  id: string;
  title: string;
  badge: string;
  category: string;
  period: string;
  images?: string[];
  coverImage?: string;
  githubUrl?: string;
  url?: string;
  designDocUrl?: string;
  technologies: string[];
  descriptions: string[];
}

const Projects = ({ theme }: { theme: ThemeConfig }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const projectData = [
    {
      id: 'auto-course-gen',
      title: 'Automated Course Generation System',
      badge: 'Senior Project',
      category: 'AI & Full-Stack',
      period: 'November 2025',
      coverImage: '/projects/aitutor/cover/image.png',
      images: [
        '/projects/aitutor/img/image.png',
        '/projects/aitutor/img/image copy.png',
        '/projects/aitutor/img/image copy 2.png',
        '/projects/aitutor/img/image copy 3.png',
        '/projects/aitutor/img/image copy 4.png',
        '/projects/aitutor/img/image copy 5.png',
        '/projects/aitutor/img/image copy 6.png',
        '/projects/aitutor/img/image copy 7.png',
        '/projects/aitutor/img/image copy 8.png',
        '/projects/aitutor/img/image copy 9.png',
        '/projects/aitutor/img/image copy 10.png',
        '/projects/aitutor/img/image copy 11.png',
        '/projects/aitutor/img/image copy 12.png',
        '/projects/aitutor/img/image copy 13.png',
      ], 
      // githubUrl: 'https://github.com/BinButsa2140',
      
      // designDocUrl: 'https://example.com/design-doc', 
      technologies: ['Next.js', 'Golang', 'TypeScript', 'JavaScript', 'Gemini API', 'PostgreSQL'],
      descriptions: [
        'Designed a document processing pipeline to validate input files and dynamically extract text content page-by-page based on the Table of Contents (TOC).',
        'Integrated Large Language Models (LLMs) to process the extracted documents and automatically generate structured learning courses categorized by chapters.',
        'Implemented an automated license validation mechanism to verify the copyright status and usability of uploaded documents prior to processing.'
      ]
    },
    {
      id: 'man-building',
      title: 'MAN Building Inspection & Design',
      badge: 'Freelance',
      category: 'Full-Stack CMS',
      period: 'October 2025',
      coverImage: '/projects/manbuilding/cover/manbuilding.png',
      images: [
        '/projects/manbuilding/img/image.png',
        '/projects/manbuilding/img/image copy.png',
        '/projects/manbuilding/img/image copy 2.png',
        '/projects/manbuilding/img/image copy 3.png',
        '/projects/manbuilding/img/image copy 4.png',
        '/projects/manbuilding/img/image copy 5.png',
      ], 
      githubUrl: '#',
      url: 'https://manbuilding.co.th/th/',
      designDocUrl: '#',
      technologies: ['Next.js 15', 'Tailwind CSS v4', 'react-markdown'],
      descriptions: [
        'Bilingual website integrated with a custom backend CMS supporting Markdown data and Cloudinary.',
        'Developed as a freelance project under EEC Search Industry.'
      ]
    },
    {
      id: 'puwapat-aircon',
      title: 'Puwapat Air-con',
      badge: 'Freelance',
      category: 'Frontend Development',
      period: 'August 2025',
      coverImage: '/projects/puwapat/cover/puwapat.png',
      images: ['/projects/puwapat/puwapat.png'], 
      githubUrl: '#',
      url: 'https://eec-preview.vercel.app/',
      designDocUrl: '#',
      technologies: ['Next.js', 'Tailwind CSS'],
      descriptions: [
        'Modern website for a solar panel installation company showcasing portfolio and certifications.',
        'Developed as a freelance project under EEC Search Industry.'
      ]
    },
    {
      id: 'hengwash',
      title: 'HengWash (เฮงวอช สะดวกซัก)',
      badge: 'Freelance',
      category: 'Frontend Development',
      period: 'June 2025',
      coverImage: '/projects/hengwash/cover/hengwash.png',
      images: ['/projects/hengwash/hengwash.png'], 
      githubUrl: '#',
      url: 'https://hengwash.eecsearch.co.th/',
      designDocUrl: '#',
      technologies: ['Next.js', 'Tailwind CSS'],
      descriptions: [
        'A 24-hour premium laundromat and delivery service single-page promotional website.',
        'Developed as a freelance project under EEC Search Industry.'
      ]
    },
    {
      id: 'hengudomporn',
      title: 'Hengudomporn (เฮงอุดมพร)',
      badge: 'Freelance',
      category: 'Frontend Development',
      period: 'April 2025',
      coverImage: '/projects/hengudomporn/cover/hengudomporn.png',
      images: ['/projects/hengudomporn/hengudomporn.png'], 
      githubUrl: '#',
      url: 'https://www.hengudomporn.co.th/',
      designDocUrl: '#',
      technologies: ['Next.js', 'Tailwind CSS'],
      descriptions: [
        'V1 modern responsive website for a construction contractor featuring a project portfolio.',
        'Developed as a freelance project under EEC Search Industry.'
      ]
    },
    {
      id: 'kitchen-booking',
      title: 'Kitchen Booking System',
      badge: 'Full-Stack Project',
      category: 'Web Application',
      period: 'March 2025',
      coverImage: '/projects/kitchenmanagement/cover/kitchenmanagement.png',
      images: [
        '/projects/kitchenmanagement/img/image copy.png',
        '/projects/kitchenmanagement/img/image copy 2.png',
        '/projects/kitchenmanagement/img/image copy 3.png',
        '/projects/kitchenmanagement/img/image copy 4.png',
      ], 
      githubUrl: 'https://github.com/BinButsa2140/KitchenManagementSystem',
      designDocUrl: '#',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MySQL', 'NextAuth.js'],
      descriptions: [
        'Developed a full-stack web application using Next.js, React, and TypeScript to manage kitchen room reservations, equipment tracking, and user bookings.',
        'Implemented secure user authentication via NextAuth.js and structured relational database schemas using Prisma ORM with MySQL.'
      ]
    }
  ];

  return (
    <>
      {/* หน้าหลัก: Grid แสดงโปรเจกต์ */}
      <div className={`max-w-5xl mx-auto my-10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border transition-colors duration-1000 ${theme.colors.bgPrimary} ${theme.colors.border}`}>
        <div className="mb-10 text-center md:text-left">
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-1000 ${theme.colors.textPrimary}`}>
            Projects
          </h2>
          <p className={`mt-1 font-medium transition-colors duration-1000 ${theme.colors.textSecondary}`}>
            Academic and independent development works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project) => (
            <motion.div 
              key={project.id} 
              whileHover={{ y: -6 }}
              onClick={() => setActiveProject(project)} 
              className={`cursor-pointer flex flex-col border rounded-3xl p-5 shadow-sm transition-colors duration-500 ${theme.colors.bgSecondary} ${theme.colors.border}`}
            >
              <div className={`w-full h-40 rounded-2xl mb-4 overflow-hidden relative border transition-colors duration-1000 ${theme.colors.bgPrimary} ${theme.colors.border}`}>
                {/* ✅ ใช้ Next.js Image เพื่อ Performance */}
                {project.coverImage ? (
                  <Image 
                    src={project.coverImage} 
                    alt={project.title} 
                    fill 
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className={`w-full h-full flex flex-col items-center justify-center gap-2 transition-colors duration-1000 ${theme.colors.bgSecondary}`}>
                    <ImageOff className={`w-6 h-6 opacity-30 ${theme.colors.textSecondary}`} />
                    <span className={`text-[10px] font-bold uppercase tracking-widest opacity-40 ${theme.colors.textSecondary}`}>
                      Not Available
                    </span>
                  </div>
                )}
                
                <div className="absolute top-3 left-3 flex gap-1 z-10">
                  <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full border ${theme.colors.bgPrimary} ${theme.colors.border} ${theme.colors.textPrimary}`}>
                    {project.badge}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 justify-between gap-2">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider opacity-60 ${theme.colors.textSecondary}`}>
                    {project.category}
                  </span>
                  <h3 className={`text-xl font-bold mt-0.5 leading-tight line-clamp-1 ${theme.colors.textPrimary}`}>
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className={`text-[9px] px-2 py-0.5 rounded-md border ${theme.colors.bgPrimary} ${theme.colors.border} ${theme.colors.textSecondary}`}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && <span className={`text-[9px] px-1.5 opacity-60 ${theme.colors.textSecondary}`}>+{project.technologies.length - 4}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal รายละเอียดโปรเจกต์ (ใช้ createPortal) */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 md:p-8"
              onClick={() => setActiveProject(null)} 
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()} 
                className={`relative w-[95vw] md:w-[85vw] max-w-7xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] p-6 md:p-10 shadow-2xl border ${theme.colors.bgPrimary} ${theme.colors.border} [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden transform-gpu`}
              >
                <button 
                  onClick={() => setActiveProject(null)}
                  className={`absolute top-6 right-6 md:top-8 md:right-8 z-50 p-2 bg-white/20 backdrop-blur-md rounded-full transition-colors hover:bg-black/10 ${theme.colors.textPrimary}`}
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 md:mt-0">
                  
                  {/* คอลัมน์ซ้าย: ImageSlideshow (ส่ง theme เข้าไปด้วย) */}
                  <div className="w-full lg:w-[55%] shrink-0">
                    <ImageSlideshow images={activeProject.images || []} theme={theme} />
                  </div>

                  {/* คอลัมน์ขวา: รายละเอียด */}
                  <div className="w-full lg:w-[45%] flex flex-col">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase border rounded-full ${theme.colors.bgSecondary} ${theme.colors.border} ${theme.colors.textPrimary}`}>
                          {activeProject.badge}
                        </span>
                        <span className={`text-[11px] font-bold uppercase tracking-wider opacity-60 ${theme.colors.textSecondary}`}>
                          • {activeProject.category}
                        </span>
                      </div>
                      
                      <h3 className={`text-3xl md:text-4xl font-black leading-tight mb-4 ${theme.colors.textPrimary}`}>
                        {activeProject.title}
                      </h3>
                      
                      <div className={`flex items-center gap-2 text-sm font-medium opacity-70 mb-6 ${theme.colors.textSecondary}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{activeProject.period}</span>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {activeProject.designDocUrl && activeProject.designDocUrl !== '#' && (
                          <a href={activeProject.designDocUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold border shadow-sm transition-all hover:scale-105 ${theme.colors.bgSecondary} ${theme.colors.border} ${theme.colors.textSecondary} hover:${theme.colors.textPrimary}`}>
                            <FileText className="w-4 h-4" /> Design Doc
                          </a>
                        )}
                        {activeProject.githubUrl && activeProject.githubUrl !== '#' && (
                          <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold border shadow-sm transition-all hover:scale-105 ${theme.colors.bgSecondary} ${theme.colors.border} ${theme.colors.textSecondary} hover:${theme.colors.textPrimary}`}>
                            <GithubIcon className="w-4 h-4" /> Source
                          </a>
                        )}
                        {activeProject.url && activeProject.url !== '#' && (
                          <a href={activeProject.url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold border shadow-sm transition-all hover:scale-105 bg-blue-600 text-white border-blue-500 hover:bg-blue-700`}>
                            <ExternalLink className="w-4 h-4" /> Live Site
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <ul className={`space-y-3 leading-relaxed list-none ${theme.colors.textSecondary}`}>
                        {activeProject.descriptions.map((desc: string, index: number) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 opacity-60 ${theme.colors.accent}`} />
                            <span className="text-sm md:text-base">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`pt-6 border-t mt-auto ${theme.colors.border}`}>
                      <div className={`flex items-center gap-2 mb-4 opacity-60 ${theme.colors.textSecondary}`}>
                        <Code2 className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Technologies Used</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech: string) => (
                          <span key={tech} className={`px-3 py-1.5 border rounded-xl text-xs font-semibold shadow-sm ${theme.colors.bgSecondary} ${theme.colors.border} ${theme.colors.textPrimary}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Projects;
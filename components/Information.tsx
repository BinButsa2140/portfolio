"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  GraduationCap,
  Code2,
  Layers,
  Wrench,
} from "lucide-react";
import { ThemeConfig } from "@/types/type";
import confetti from "canvas-confetti";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

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
  const doorControls = useAnimation();
  const pawControls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showEyes, setShowEyes] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 opacity-70" />,
      skills: ["TypeScript", "JavaScript", "SQL", "Golang", "Python", "Java", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5 opacity-70" />,
      skills: ["Node.js", "NestJS", "Next.js", "React", "Tailwind CSS", "Vite", "Jest"],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5 opacity-70" />,
      skills: ["PostgreSQL", "MongoDB", "Git", "GitHub", "GitLab", "Postman", "DBeaver", "Figma", "Docker"],
    },
  ];

  // ฟังก์ชันยิงพลุสีทองเมื่อคลิก Badge
  const triggerFireworks = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFD700', '#FFA500', '#FF8C00'] // โทนสีทอง
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFD700', '#FFA500', '#FF8C00'] // โทนสีทอง
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  // แอนิเมชันเปิดประตูและแมวปิดประตู
  const handleHoverBanner = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowEyes(true);

    // 1. เปิดประตู (เลื่อนขึ้น 70%)
    await doorControls.start({ y: "-70%", transition: { type: "spring", bounce: 0.4, duration: 0.8 } });

    // 2. รอ 2 วินาทีให้ดูความว่างเปล่า (และความน่ารักของตาแมว)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 3. แมวเอื้อมมือขึ้นมาจับ (เลื่อน paw ขึ้นมาจากด้านล่างเพื่อจับด้าม)
    pawControls.set({ y: "100%", opacity: 1 });
    await pawControls.start({ y: "30%", transition: { type: "spring", bounce: 0.2, duration: 0.5 } });

    // 4. ชะงักนิดนึงตอนจับด้าม
    await new Promise(resolve => setTimeout(resolve, 200));

    // 5. ดึงประตูลงพร้อมกัน
    setShowEyes(false);
    await Promise.all([
      pawControls.start({ y: "100%", transition: { ease: "easeIn", duration: 0.4 } }), // ลากลงไปให้พ้นจอ
      doorControls.start({ y: "0%", transition: { ease: "easeIn", duration: 0.4 } }) // ประตูปิด
    ]);

    // 6. รีเซ็ตสถานะ
    pawControls.set({ opacity: 0 });
    setIsAnimating(false);
  };

  return (
    <div className={`max-w-5xl mx-auto my-10 rounded-[2.5rem] shadow-2xl border overflow-hidden transition-colors duration-1000 ${theme.colors.bgPrimary} ${theme.colors.border}`}>
      
      {/* ========================================== */}
      {/* Banner Animation Section */}
      {/* ========================================== */}
      <div 
        className={`relative w-full h-48 md:h-64 border-b overflow-hidden cursor-pointer ${theme.colors.border}`}
        onMouseEnter={handleHoverBanner}
      >
        {/* 1. ความมืดด้านหลัง (The Void & Glowing Eyes) */}
        <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center z-0">
          <AnimatePresence>
            {showEyes && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                className="flex gap-6 mt-16"
              >
                {/* ตาซ้าย */}
                <div className="w-5 h-5 bg-yellow-300 rounded-full blur-[1px] shadow-[0_0_15px_rgba(253,224,71,0.8)] flex items-center justify-center">
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                </div>
                {/* ตาขวา */}
                <div className="w-5 h-5 bg-yellow-300 rounded-full blur-[1px] shadow-[0_0_15px_rgba(253,224,71,0.8)] flex items-center justify-center">
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 2. บานประตู (The Door) */}
        <motion.div
          animate={doorControls}
          initial={{ y: "0%" }}
          className={`absolute inset-0 z-10 flex flex-col justify-end transition-colors duration-1000 ${theme.colors.bgSecondary}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          
          {/* ด้ามจับ (Handle) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-400/30 backdrop-blur-md rounded-full border border-gray-400/30 flex items-center justify-center shadow-sm hover:bg-gray-400/50 transition-colors">
            <div className="w-10 h-1 bg-gray-600/50 rounded-full pointer-events-none"></div>
          </div>
        </motion.div>

        {/* 3. ขาแมว (The Cat Paw) */}
        <motion.div
          animate={pawControls}
          initial={{ y: "100%", opacity: 0 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none h-full"
        >
          <div className="w-14 h-[120%] bg-zinc-800 rounded-t-[2rem] relative shadow-2xl border-t-4 border-zinc-900">
            {/* อุ้งเท้าใหญ่ */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-5 bg-pink-300 rounded-full"></div>
            {/* นิ้วเท้า (Beans) */}
            <div className="absolute top-2 w-full flex justify-center gap-1 px-1.5">
              <div className="w-2.5 h-3.5 bg-pink-300 rounded-full rotate-12"></div>
              <div className="w-2.5 h-3.5 bg-pink-300 rounded-full -translate-y-1"></div>
              <div className="w-2.5 h-3.5 bg-pink-300 rounded-full translate-y-0.5"></div>
              <div className="w-2.5 h-3.5 bg-pink-300 rounded-full -rotate-12"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================== */}
      {/* Main Content Area */}
      {/* ========================================== */}
      <div className="relative w-full flex flex-col">
        {/* Header Section (Static) */}
        <div className="p-8 md:p-12 pb-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 z-20 relative">
          <div className="text-center md:text-left">
            <h1 className={`text-4xl md:text-5xl font-bold tracking-tight mb-2 transition-colors duration-1000 ${theme.colors.textPrimary}`}>
              Binsung Butsabong
            </h1>
            <p className={`text-xl md:text-2xl font-medium transition-colors duration-1000 ${theme.colors.textSecondary}`}>
              Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className={`relative w-full px-8 pb-8 md:px-12 md:pb-12 space-y-8 transition-colors duration-1000 ${theme.colors.bgPrimary} rounded-b-[2.5rem]`}>
          <div className={`flex flex-col lg:flex-row gap-3 lg:gap-6 text-sm md:text-base font-medium justify-center md:justify-start transition-colors duration-1000 ${theme.colors.textSecondary}`}>
            <a href="mailto:binsung.butsabong@gmail.com" className="group flex items-center gap-2 justify-center hover:opacity-70 transition-opacity">
              <Mail className={`w-4 h-4 transition-colors ${theme.colors.accent}`} />
              <span>binsung.butsabong@gmail.com</span>
            </a>
            <a href="tel:+66870574516" className="group flex items-center gap-2 justify-center hover:opacity-70 transition-opacity">
              <Phone className={`w-4 h-4 transition-colors ${theme.colors.accent}`} />
              <span>(+66) 087-057-4516</span>
            </a>
            <a href="https://github.com/BinButsa2140" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 justify-center hover:opacity-70 transition-opacity">
              <GithubIcon className={`w-4 h-4 transition-colors ${theme.colors.accent}`} />
              <span className="font-bold">GitHub :</span> BinButsa2140
            </a>
          </div>

          <p className={`leading-relaxed md:text-lg text-center md:text-left transition-colors duration-1000 ${theme.colors.textSecondary}`}>
            Full-Stack Developer with hands-on experience in System Design, Migration, and Automation. Proficient in designing web architectures and integrating LLMs for document processing. Passionate about building impactful products and writing reliable code.
          </p>

          <div className="flex justify-center md:justify-start">
            <div className={`p-5 rounded-3xl border w-full lg:w-auto text-left shadow-sm transition-all duration-1000 hover:shadow-md flex flex-col justify-center ${theme.colors.bgSecondary} ${theme.colors.border}`}>
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full shadow-sm ${theme.colors.bgSecondary}`}>
                  <GraduationCap className={`w-6 h-6 ${theme.colors.textPrimary}`} />
                </div>
                <div className="flex flex-col">
                  <p className={`font-bold ${theme.colors.textPrimary}`}>
                    Kasetsart University
                  </p>
                  <div className="flex items-center flex-wrap gap-3 mt-1">
                    <p className={`text-sm font-medium ${theme.colors.textSecondary}`}>
                      B.S. Computer Science (First Class Honours)
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -3 }}
                      whileTap={{ scale: 0.95, rotate: 0 }}
                      onClick={triggerFireworks}
                      className="cursor-pointer inline-flex items-center justify-center px-2.5 py-1 text-xs font-black text-yellow-950 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 rounded-full shadow-[0_0_10px_rgba(253,224,71,0.4)] border border-yellow-200 select-none hover:shadow-[0_0_15px_rgba(253,224,71,0.8)]"
                      title="Click for celebration!"
                    >
                      🏆 <span className="ml-1">First Class Honour</span>
                    </motion.div>
                  </div>
                  <p className={`text-sm opacity-80 mt-1 ${theme.colors.textSecondary}`}>
                    GPA: 3.84
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 pt-4 border-t transition-colors duration-1000 ${theme.colors.border}`}>
            <p className={`text-sm font-bold uppercase tracking-widest text-center md:text-left ${theme.colors.textSecondary}`}>
              Technical Skills
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-3">
                  <div className={`flex items-center gap-2 justify-center md:justify-start group ${theme.colors.textPrimary}`}>
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <span className="font-semibold">{category.title}</span>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {category.skills.map((tech) => (
                      <span
                        key={tech}
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
    </div>
  );
};

export default Information;
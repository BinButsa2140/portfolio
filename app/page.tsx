'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Information from '@/components/Information';
import SideBar, { Tabs } from '@/components/SideBar';
import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tabs>('profile');

  // 1. ตรวจจับการ Scroll (Scroll Spy) เพื่อเปลี่ยนสี Sidebar อัตโนมัติ
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id as Tabs);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // 2. ฟังก์ชันกด Tab แล้วเลื่อนแบบนุ่มนวล (Smooth Scroll)
  const handleScrollToSection = (tabId: Tabs) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 40; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // 3. แอนิเมชันสไตล์ Apple / Premium (Smooth Blur & Scale)
  const blurScaleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.85, 
      y: 60,
      filter: 'blur(10px)' 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Easing curve แบบนุ่มนวลเป็นพิเศษ สไตล์ Apple
      } 
    }
  };

  return (
    // เติม overflow-x-hidden เพื่อป้องกันหน้าจอแกว่งซ้ายขวาตอนที่การ์ดสไลด์เข้ามา
    <div className="relative min-h-screen w-full flex overflow-x-hidden">
      
      <SideBar activeTab={activeTab} onTabChange={handleScrollToSection} />

      <main className="flex-1 pb-24 md:pb-10 md:pl-24 w-full flex flex-col gap-10 scroll-smooth">
        
        <section id="profile" className="min-h-screen flex items-center pt-10 md:pt-0">
          <motion.div 
            variants={blurScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} 
            className="w-full"
          >
            <Information />
          </motion.div>
        </section>

        <section id="experiences" className="min-h-screen pt-10">
          <motion.div 
            variants={blurScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="w-full"
          >
            <Experiences />
          </motion.div>
        </section>

        <section id="projects" className="min-h-screen pt-10">
          <motion.div 
            variants={blurScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="w-full"
          >
            <Projects />
          </motion.div>
        </section>

        {/* <section id="certificate" className="min-h-screen flex items-center justify-center">
          <motion.div 
            variants={blurScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-5xl w-full mx-auto p-8 rounded-[2.5rem] shadow-xl bg-white/40 backdrop-blur-2xl border border-white/50 text-center text-gray-500 text-2xl font-bold"
          >
            Certificate Component
          </motion.div>
        </section> */}

      </main>
    </div>
  );
};

export default Home;
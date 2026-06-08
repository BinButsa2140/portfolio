"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnterScreen } from "@/components/EnterScreen";
import { BackgroundManager } from "@/components/BackgroundManager";
import { SettingsMenu } from "@/components/SettingsMenu"; // เปลี่ยนจาก ThemeToggle เป็น SettingsMenu
import Information from "@/components/Information";
import SideBar, { Tabs } from "@/components/SideBar";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Callback from "@/components/Callback";
import { ThemeKey, THEMES } from "@/types/type";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeThemeId, setActiveThemeId] = useState<ThemeKey>("ios");
  const [activeTab, setActiveTab] = useState<Tabs>("profile");

  // State จัดการเสียง (ค่าเริ่มต้นให้ Mute ไว้ก่อน เผื่อพลาด)
  const [isMusicMuted, setIsMusicMuted] = useState(true);
  const [isAmbienceMuted, setIsAmbienceMuted] = useState(true);

  const currentThemeConfig = THEMES[activeThemeId as keyof typeof THEMES];

  // ฟังก์ชันรับค่าจากหน้า Enter Screen
  const handleEnter = (playAudio: boolean) => {
    if (playAudio) {
      // ถ้ากด "เปิดเสียงเลย"
      setIsMusicMuted(false);
      setIsAmbienceMuted(false);
    } else {
      // ถ้ากด "ขอเข้าแบบเงียบๆ"
      setIsMusicMuted(true);
      setIsAmbienceMuted(true);
    }
    setHasEntered(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id as Tabs);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleScrollToSection = (tabId: Tabs) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 40;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const blurScaleVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div
      className={`relative min-h-screen w-full flex overflow-x-hidden transition-colors duration-1000 ${currentThemeConfig?.colors?.textPrimary || "text-gray-900"}`}
    >
      <AnimatePresence>
        {!hasEntered && <EnterScreen onEnter={handleEnter} />}
      </AnimatePresence>

      {/* ส่ง Props เสียงเข้าไปควบคุม BackgroundManager */}
      {hasEntered && (
        <BackgroundManager
          currentTheme={currentThemeConfig}
          isMusicMuted={isMusicMuted}
          isAmbienceMuted={isAmbienceMuted}
        />
      )}

      <SideBar activeTab={activeTab} onTabChange={handleScrollToSection} />

      <main className="flex-1 pb-24 md:pb-10 md:pl-24 w-full flex flex-col gap-10 scroll-smooth relative z-10">
        
        {/* เปลี่ยนจาก ThemeToggle เป็น SettingsMenu แล้วส่ง props เข้าไปให้ครบ */}
        <SettingsMenu
          activeThemeId={activeThemeId}
          onThemeChange={setActiveThemeId}
          isMusicMuted={isMusicMuted}
          setIsMusicMuted={setIsMusicMuted}
          isAmbienceMuted={isAmbienceMuted}
          setIsAmbienceMuted={setIsAmbienceMuted}
        />

        <section
          id="profile"
          className="min-h-screen flex items-center pt-10 md:pt-0"
        >
          <motion.div
            variants={blurScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full"
          >
            <Information theme={currentThemeConfig} />
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
            <Experiences theme={currentThemeConfig} />
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
            <Projects theme={currentThemeConfig} />
          </motion.div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center pt-10"
        >
          <motion.div
            variants={blurScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full"
          >
            <Callback theme={currentThemeConfig} />
          </motion.div>
        </section>
      </main>
    </div>
  );
}
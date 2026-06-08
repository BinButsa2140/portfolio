"use client";

import { useState } from "react";
import { ThemeKey } from "@/types/type";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Music, CloudRain, Volume2, VolumeX, X } from "lucide-react";

interface SettingsMenuProps {
  activeThemeId: ThemeKey;
  onThemeChange: (theme: ThemeKey) => void;
  isMusicMuted: boolean;
  setIsMusicMuted: (muted: boolean) => void;
  isAmbienceMuted: boolean;
  setIsAmbienceMuted: (muted: boolean) => void;
}

export const SettingsMenu = ({
  activeThemeId,
  onThemeChange,
  isMusicMuted,
  setIsMusicMuted,
  isAmbienceMuted,
  setIsAmbienceMuted,
}: SettingsMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const themeButtons: { id: ThemeKey; icon: string; label: string }[] = [
    { id: "ios", icon: "📱", label: "iOS" },
    { id: "sunset-beach", icon: "🌅", label: "Sunset" },
    { id: "rainy-city", icon: "🌧️", label: "Rainy" },
    { id: "flower", icon: "🌸", label: "Flower" },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* ปุ่มฟันเฟือง */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/50 shadow-lg rounded-full transition-all duration-300 hover:rotate-90 text-gray-800"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* หน้าต่างเมนูตั้งค่า */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="absolute top-14 right-0 mt-2 w-72 bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-6 text-gray-800"
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-lg">Settings</h3>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/50 p-1 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ส่วนเลือกธีม */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Themes</p>
              <div className="grid grid-cols-4 gap-2">
                {themeButtons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => onThemeChange(btn.id)}
                    title={btn.label}
                    className={`flex flex-col items-center justify-center py-2 rounded-xl transition-all duration-300 ${
                      activeThemeId === btn.id
                        ? "bg-white shadow-md scale-105"
                        : "hover:bg-white/60"
                    }`}
                  >
                    <span className="text-xl mb-1">{btn.icon}</span>
                    <span className="text-[10px] font-medium">{btn.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-gray-200/50 mb-6" />

            {/* ส่วนควบคุมเสียง */}
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Audio Controls</p>
              <div className="space-y-3">
                {/* ควบคุมเพลงหลัก */}
                <div className="flex items-center justify-between bg-white/40 p-3 rounded-2xl border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                      <Music className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm">Main BGM</span>
                  </div>
                  <button
                    onClick={() => setIsMusicMuted(!isMusicMuted)}
                    className={`p-2 rounded-full transition-colors ${isMusicMuted ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-600'}`}
                  >
                    {isMusicMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* ควบคุมเสียงบรรยากาศ */}
                <div className="flex items-center justify-between bg-white/40 p-3 rounded-2xl border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-100 rounded-full text-teal-600">
                      <CloudRain className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm">Ambience</span>
                  </div>
                  <button
                    onClick={() => setIsAmbienceMuted(!isAmbienceMuted)}
                    className={`p-2 rounded-full transition-colors ${isAmbienceMuted ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-600'}`}
                  >
                    {isAmbienceMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface EnterScreenProps {
  onEnter: (playAudio: boolean) => void;
}

export const EnterScreen = ({ onEnter }: EnterScreenProps) => {
  return (
    <motion.div
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md"
    >
      {/* ไอคอนลำโพงใหญ่ด้านบน (มีแอนิเมชันเด้งขึ้นมาเล็กน้อย) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        className="mb-8 p-6 bg-gray-100 rounded-full shadow-inner border border-gray-200"
      >
        <Volume2 className="w-16 h-16 text-gray-800" />
      </motion.div>

      {/* ข้อความภาษาอังกฤษ */}
      <p className="text-lg text-gray-600 mb-10 text-center max-w-md px-4 leading-relaxed font-medium">
        For the best immersive experience, would you like to enable background music and ambient sounds?
      </p>

      <div className="flex flex-col sm:flex-row gap-4 px-4 w-full justify-center">
        {/* ปุ่มเปิดเสียง (Yes) */}
        <button
          onClick={() => onEnter(true)}
          className="group flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
        >
          <Volume2 className="w-5 h-5 transition-transform group-hover:scale-110" />
          Enable Sound
        </button>

        {/* ปุ่มปิดเสียง (No) */}
        <button
          onClick={() => onEnter(false)}
          className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all hover:scale-105 shadow-sm"
        >
          <VolumeX className="w-5 h-5 text-gray-400 transition-transform group-hover:scale-110" />
          Enter Silently
        </button>
      </div>
    </motion.div>
  );
};
"use client";

import { useState } from "react";
import { Mail, Phone, X, HeartHandshake } from "lucide-react";
import { ThemeConfig } from "@/types/type";
import { motion, AnimatePresence } from "framer-motion";

const Callback = ({ theme }: { theme: ThemeConfig }) => {
  // สร้าง State เก็บสถานะว่า "เปิดจดหมายหรือยัง"
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center my-20">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          // ==========================================
          // 1. สถานะ "ซองจดหมายปิดอยู่"
          // ==========================================
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            whileHover={{ scale: 1.05, y: -5 }} // Hover แล้วลอยขึ้นนิดนึง
            whileTap={{ scale: 0.95 }} // กดแล้วบุ๋มลง
            onClick={() => setIsOpen(true)}
            className={`cursor-pointer w-full max-w-sm p-10 md:p-14 text-center rounded-3xl shadow-2xl border transition-colors duration-1000 flex flex-col items-center justify-center gap-5 ${theme.colors.bgPrimary} ${theme.colors.border}`}
          >
            <div
              className={`p-6 rounded-full shadow-inner ${theme.colors.bgSecondary}`}
            >
              <Mail className={`w-14 h-14 ${theme.colors.accent}`} />
            </div>
            <div>
              <h3
                className={`text-2xl font-bold mb-2 ${theme.colors.textPrimary}`}
              >
                You have a new message! 💌
              </h3>
              <p
                className={`text-sm ${theme.colors.textSecondary} animate-pulse`}
              >
                Click to open
              </p>
            </div>
          </motion.div>
        ) : (
          // ==========================================
          // 2. สถานะ "เปิดจดหมายแล้ว"
          // ==========================================
          <motion.div
            key="opened"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className={`relative w-full max-w-3xl p-10 md:p-16 text-center rounded-[3rem] shadow-2xl border transition-colors duration-1000 ${theme.colors.bgPrimary} ${theme.colors.border}`}
          >
            {/* ปุ่มกากบาทมุมขวาบน สำหรับปิดจดหมายกลับเป็นซองเหมือนเดิม */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className={`absolute top-6 right-6 p-2 rounded-full transition-colors hover:bg-black/10 ${theme.colors.textSecondary}`}
            >
              <X className="w-6 h-6" />
            </button>

            {/* ข้อความอ้อนวอนสไตล์ Dev */}
            <h2
              className={`text-4xl md:text-5xl font-black mb-6 transition-colors duration-1000 ${theme.colors.textPrimary}`}
            >
              Let's Work Together 🙏
            </h2>

            <p
              className={`text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed transition-colors duration-1000 ${theme.colors.textSecondary}`}
            >
              I am currently available for new opportunities. If you are looking for a dedicated developer to collaborate on your next project, please feel free to reach out!
            </p>

            {/* ปุ่มกดโทรและอีเมล */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8">
              
              {/* ส่วนเบอร์โทร */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="tel:+66870574516"
                  className={`group flex items-center justify-center gap-3 px-8 py-4 w-full md:w-auto rounded-full font-bold text-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg ${theme.colors.bgSecondary} ${theme.colors.border} ${theme.colors.textPrimary}`}
                >
                  <Phone
                    className={`w-6 h-6 transition-transform duration-300 group-hover:animate-wiggle ${theme.colors.accent}`}
                  />
                  Call: 087-057-4516
                </a>
              </div>

              {/* ส่วนอีเมล */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href="mailto:binsung.butsabong@gmail.com"
                  className={`group flex items-center justify-center gap-3 px-8 py-4 w-full md:w-auto rounded-full font-bold text-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg ${theme.colors.bgSecondary} ${theme.colors.border} ${theme.colors.textPrimary}`}
                >
                  <Mail
                    className={`w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1 ${theme.colors.accent}`}
                  />
                  Email Me
                </a>
                <div className={`text-sm font-medium tracking-wide transition-colors duration-1000 mt-1 ${theme.colors.textSecondary}`}>
                  binsung.butsabong@gmail.com
                </div>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Callback;
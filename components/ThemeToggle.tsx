"use client";

import { ThemeKey } from "@/types/type";

interface ThemeToggleProps {
  activeThemeId: ThemeKey;
  onThemeChange: (theme: ThemeKey) => void;
}

export const ThemeToggle = ({ activeThemeId, onThemeChange }: ThemeToggleProps) => {
  // สร้าง Array ของปุ่มเพื่อให้อ่านโค้ดง่ายและวนลูปสร้างปุ่มได้
  const themeButtons: { id: ThemeKey; icon: string; label: string }[] = [
    { id: "ios", icon: "📱", label: "iOS" },
    { id: "sunset-beach", icon: "🌅", label: "Sunset" },
    { id: "rainy-city", icon: "🌧️", label: "Rainy" },
    { id: "flower", icon: "🌸", label: "Flower" },
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 bg-white/30 p-2 rounded-2xl backdrop-blur-md border border-white/40 shadow-lg transition-colors duration-1000">
      {themeButtons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => onThemeChange(btn.id)}
          title={btn.label} // เอาเมาส์ชี้แล้วจะขึ้นชื่อธีม
          className={`px-3 py-1.5 rounded-xl transition-all duration-300 ${
            activeThemeId === btn.id
              ? "bg-white/80 shadow-sm scale-105"
              : "hover:bg-white/50 hover:scale-105"
          }`}
        >
          {btn.icon}
        </button>
      ))}
    </div>
  );
};
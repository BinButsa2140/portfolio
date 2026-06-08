'use client';

import { User, FolderGit2, Briefcase, Award } from 'lucide-react';

export type Tabs = 'profile' | 'projects' | 'experiences' | 'certificate';

interface SideBarProps {
  activeTab: Tabs;
  onTabChange: (tab: Tabs) => void;
}

const SideBar = ({ activeTab, onTabChange }: SideBarProps) => {
  // เก็บเพียงตัวแปรคอมโพเนนต์ เพื่อให้สามารถส่งผ่าน Props (className) ได้ในขั้นตอน Render
  const navItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'experiences', label: 'Experiences', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    // { id: 'certificate', label: 'Certificate', icon: Award },
  ] as const;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 md:top-1/2 md:-translate-y-1/2 z-50">
      
      {/* สร้าง Linear Gradient ซ่อนไว้สำหรับนำไปใช้กับ SVG Stroke */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="googleColors" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285F4" />  {/* Blue */}
            <stop offset="33%" stopColor="#EA4335" /> {/* Red */}
            <stop offset="66%" stopColor="#FBBC05" /> {/* Yellow */}
            <stop offset="100%" stopColor="#34A853" /> {/* Green */}
          </linearGradient>
        </defs>
      </svg>

      <div className="flex md:flex-col gap-2 p-2 rounded-full md:rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/50 shadow-xl">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id as Tabs)}
              aria-label={item.label}
              // ใส่คลาส group เพื่อให้คอมโพเนนต์ลูก (Tooltip และ Icon) ตอบสนองเมื่อเมาส์ชี้ที่ปุ่ม
              className={`
                group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ease-out
                ${isActive 
                  ? 'bg-white/80 shadow-sm scale-105' 
                  : 'hover:bg-white/50'
                }
              `}
            >
              {/* ตัวไอคอน: หาก Active จะบังคับใช้สี Gradient ทันที หากไม่ Active จะใช้สีเทาและเปลี่ยนเป็น Gradient เมื่อ Hover */}
              <Icon 
                className={`w-5 h-5 transition-all duration-300 ${
                  isActive 
                    ? '[stroke:url(#googleColors)]' 
                    : 'text-gray-500 group-hover:[stroke:url(#googleColors)]'
                }`} 
              />

              {/* Tooltip: แสดงผลด้านบนในมือถือ และแสดงผลด้านขวาในจอคอมพิวเตอร์ */}
              <span 
                className="absolute w-max px-3 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200 text-gray-800 text-sm font-medium rounded-xl shadow-sm opacity-0 scale-95 pointer-events-none transition-all duration-300 origin-bottom md:origin-left group-hover:opacity-100 group-hover:scale-100
                bottom-full mb-3 left-1/2 -translate-x-1/2
                md:bottom-auto md:mb-0 md:left-full md:ml-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default SideBar;
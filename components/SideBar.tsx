'use client';

import { User, FolderGit2, Briefcase, Award } from 'lucide-react';

export type Tabs = 'profile' | 'projects' | 'experiences' | 'certificate';

interface SideBarProps {
  activeTab: Tabs;
  onTabChange: (tab: Tabs) => void;
}

const SideBar = ({ activeTab, onTabChange }: SideBarProps) => {
  const navItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'experiences', label: 'Experiences', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    // { id: 'certificate', label: 'Certificate', icon: Award },
  ] as const;

  return (
    <>
      {/* 1. ใส่ <style> สำหรับทำอนิเมชันให้ตัวหนังสือ Gradient วิ่งได้ */}
      <style>{`
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradientText 3s linear infinite;
        }
      `}</style>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 md:top-1/2 md:-translate-y-1/2 z-50">
        
        {/* 2. สร้าง SVG Gradient ที่มีแท็ก <animate> วิ่งเปลี่ยนสีตลอดเวลา */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6"> {/* โทนฟ้า */}
                <animate attributeName="stop-color" values="#3b82f6;#8b5cf6;#ec4899;#3b82f6" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#8b5cf6"> {/* โทนม่วง */}
                <animate attributeName="stop-color" values="#8b5cf6;#ec4899;#3b82f6;#8b5cf6" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#ec4899"> {/* โทนชมพู */}
                <animate attributeName="stop-color" values="#ec4899;#3b82f6;#8b5cf6;#ec4899" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>

        <div className="flex md:flex-col gap-2 p-2 rounded-full md:rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id as Tabs)}
                aria-label={item.label}
                // ปรับคลาสให้ Desktop เป็นแนวยาว (พิล) และจัดเนื้อหาชิดซ้าย
                className={`
                  group relative flex items-center md:justify-start gap-3 p-3 md:px-5 md:py-3.5 rounded-full md:rounded-2xl transition-all duration-300 ease-out
                  ${isActive 
                    ? 'bg-white/90 shadow-sm md:scale-105' 
                    : 'hover:bg-white/60 md:hover:scale-105'
                  }
                `}
              >
                {/* ไอคอน: ดึงสีจาก Animated Gradient */}
                <Icon 
                  className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                    isActive 
                      ? '[stroke:url(#animatedGradient)]' 
                      : 'text-gray-500 group-hover:[stroke:url(#animatedGradient)]'
                  }`} 
                />

                {/* ตัวหนังสือ (โชว์เฉพาะ Desktop): 
                  ถ้า Active จะเป็นตัวอักษร Gradient วิ่งๆ ถ้าไม่จะใช้สีเทาปกติ 
                */}
                <span className={`hidden md:block whitespace-nowrap font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient-text'
                    : 'text-gray-500 group-hover:text-gray-800'
                }`}>
                  {item.label}
                </span>

                {/* Tooltip (โชว์เฉพาะ Mobile):
                  เนื่องจาก Desktop โชว์ชื่อแท็บแล้ว เราจึงซ่อน Tooltip ในจอใหญ่ (md:hidden)
                */}
                <span 
                  className="md:hidden absolute w-max px-3 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200 text-gray-800 text-sm font-medium rounded-xl shadow-sm opacity-0 scale-95 pointer-events-none transition-all duration-300 origin-bottom group-hover:opacity-100 group-hover:scale-100 bottom-full mb-3 left-1/2 -translate-x-1/2"
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default SideBar;
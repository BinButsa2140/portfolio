// types.ts

export type ThemeKey = 'ios' | 'sunset-beach' | 'rainy-city' | 'flower' | 'custom';

export interface ThemeConfig {
  id: ThemeKey;
  name: string;
  videoSrc: string;
  audioSrc: string;
  overlay: string; // สีฟิลเตอร์บางๆ ทับวิดีโอ
  
  // ชุดสีสำหรับตกแต่ง UI Components
  colors: {
    textPrimary: string;   // สีตัวอักษรหลัก (Headings, หัวข้อ)
    textSecondary: string; // สีตัวอักษรรอง (Paragraphs, คำอธิบาย)
    bgPrimary: string;     // สีพื้นหลังกล่องหลัก (Main Container)
    bgSecondary: string;   // สีพื้นหลังกล่องรอง (Cards, Hover states)
    border: string;        // สีเส้นขอบ
    accent: string;        // สีไฮไลต์ (Icons, ลิงก์, ปุ่มที่กำลัง Active)
  };
}

export const THEMES: Record<Exclude<ThemeKey, 'custom'>, ThemeConfig> = {
  ios: {
    id: 'ios',
    name: 'iOS Clean',
    videoSrc: '/videos/ios-abstract.mp4',
    audioSrc: '/audio/ambient-calm.mp3',
    overlay: 'bg-white/10', // สว่างและคลีนที่สุด
    colors: {
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      bgPrimary: 'bg-white', // กระจกใสสไตล์ Apple
      bgSecondary: 'bg-white',
      border: 'border-white/50',
      accent: 'text-blue-500', // สีฟ้ามาตรฐานของ iOS
    }
  },
  'sunset-beach': {
    id: 'sunset-beach',
    name: 'Sunset Beach',
    videoSrc: '/videos/beach2.mp4',
    audioSrc: '/audio/sunset-waves.mp3',
    overlay: 'bg-orange-950/20', // ฟิลเตอร์โทนอุ่น
    colors: {
      textPrimary: 'text-orange-950',
      textSecondary: 'text-orange-900/70',
      bgPrimary: 'bg-orange-50', // กระจกสีทองอ่อนๆ
      bgSecondary: 'bg-orange-100/50',
      border: 'border-orange-200/50',
      accent: 'text-orange-600',
    }
  },
  'rainy-city': {
    id: 'rainy-city',
    name: 'Rainy City',
    videoSrc: '/videos/city.mp4',
    audioSrc: '/audio/city-rain.mp3',
    overlay: 'bg-slate-900/40', // ฟิลเตอร์มืดๆ ให้ฟีลฝนตก
    colors: {
      textPrimary: 'text-slate-50', // เปลี่ยนเป็น Dark Mode เพื่อให้อ่านง่ายบนพื้นหลังมืด
      textSecondary: 'text-slate-300/80',
      bgPrimary: 'bg-slate-900', // กระจกสีเทาเข้ม
      bgSecondary: 'bg-slate-800/10',
      border: 'border-slate-500/30',
      accent: 'text-sky-400', // สีฟ้าหม่นเข้ากับสายฝน
    }
  },
  'flower': {
    id: 'flower',
    name: 'Blooming Flower', // เปลี่ยนชื่อให้เข้ากับธีม
    videoSrc: '/videos/flower trim.mp4',
    audioSrc: '/audio/flower.mp3',
    overlay: 'bg-rose-100/20', // ฟิลเตอร์โทนสว่าง อมชมพูอ่อนๆ ให้ฟีลละมุน
    colors: {
      textPrimary: 'text-rose-950', // สีข้อความหลักเป็นโทนแดงกุหลาบเข้มจัด (เกือบน้ำตาล) เพื่อให้อ่านง่าย
      textSecondary: 'text-rose-800/70', // สีข้อความรองดรอปความเข้มลงมา
      bgPrimary: 'bg-rose-50/90', // กระจกสีชมพูอ่อนมากๆ
      bgSecondary: 'bg-rose-100/10', // พื้นหลังกล่องด้านในให้เข้มขึ้นนิดนึง
      border: 'border-rose-200/50', // เส้นขอบสีชมพูอ่อน
      accent: 'text-rose-500', // สีไฮไลต์ (ไอคอน/ลิงก์) เป็นสีชมพูกลีบกุหลาบ
    }
  }
};
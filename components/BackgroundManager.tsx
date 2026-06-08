import { ThemeConfig } from "@/types/type";
import { AnimatePresence, motion } from "framer-motion"; // แก้ import เป็น framer-motion นะครับ
import { useEffect, useRef } from "react";

interface BackgroundManagerProps {
  currentTheme: ThemeConfig;
  isMusicMuted: boolean;
  isAmbienceMuted: boolean;
}

export const BackgroundManager = ({
  currentTheme,
  isMusicMuted,
  isAmbienceMuted,
}: BackgroundManagerProps) => {
  const musicRef = useRef<HTMLAudioElement>(null);
  const ambienceRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // สั่งเล่นเสียงและวิดีโอเมื่อเปลี่ยนธีม
  useEffect(() => {
    if (musicRef.current && ambienceRef.current && videoRef.current) {
      musicRef.current.play().catch((e) => console.log("Music blocked", e));
      ambienceRef.current
        .play()
        .catch((e) => console.log("Ambience blocked", e));
      videoRef.current.play().catch((e) => console.log("Video blocked", e));
    }
  }, [currentTheme.id]);

  // คอยเช็กค่า Mute ของเพลงหลักตลอดเวลา
  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.muted = isMusicMuted;
    }
  }, [isMusicMuted]);

  // คอยเช็กค่า Mute ของเสียงบรรยากาศตลอดเวลา
  useEffect(() => {
    if (ambienceRef.current) {
      ambienceRef.current.muted = isAmbienceMuted;
    }
  }, [isAmbienceMuted]);

  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.volume = 0.2;
    }
    if (ambienceRef.current) {
      ambienceRef.current.volume = 0.1;
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden bg-gray-100">
      {/* เครื่องเล่น 1: เพลงหลัก (เปิดคลอตลอด ไม่เปลี่ยนตามธีม) */}
      {/* อย่าลืมไปหาไฟล์เพลงมาใส่ไว้ที่ public/audio/main-bgm.mp3 ด้วยนะครับ */}
      <audio ref={musicRef} src="/audio/bgmusic.wav" loop />

      {/* เครื่องเล่น 2: เสียงบรรยากาศ ซ่าๆ (ฝน, คลื่น ฯลฯ เปลี่ยนไปตามธีม) */}
      <audio ref={ambienceRef} src={currentTheme.audioSrc} loop />

      <AnimatePresence mode="wait">
        <motion.video
          key={currentTheme.id}
          ref={videoRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          autoPlay
          loop
          muted // วิดีโอปิดเสียงเสมอ
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={currentTheme.videoSrc} type="video/mp4" />
        </motion.video>
      </AnimatePresence>

      <div
        className={`absolute inset-0 transition-colors duration-1000 ${currentTheme.overlay}`}
      />
    </div>
  );
};

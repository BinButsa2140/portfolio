import { ThemeConfig } from "@/types/type";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";

export const BackgroundManager = ({ currentTheme }: { currentTheme: ThemeConfig }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // เมื่อเปลี่ยนธีม ให้โหลด source ใหม่และเล่นอัตโนมัติ
  useEffect(() => {
    if (audioRef.current && videoRef.current) {
      audioRef.current
        .play()
        .catch((e) => console.log("Audio autoplay blocked", e));
      videoRef.current
        .play()
        .catch((e) => console.log("Video autoplay blocked", e));
    }
  }, [currentTheme.id]);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden bg-gray-100">
      {/* ซ่อน Audio element ไว้ ไม่ให้ผู้ใช้เห็นเครื่องเล่น */}
      <audio
        ref={audioRef}
        src={currentTheme.audioSrc}
        loop
        // ปรับระดับเสียงเริ่มต้น (0.0 ถึง 1.0)
        volume={0.3}
      />

      <AnimatePresence mode="wait">
        <motion.video
          key={currentTheme.id}
          ref={videoRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // Fade เปลี่ยนวิดีโอนุ่มๆ
          autoPlay
          loop
          muted // วิดีโอต้อง Muted เสมอถึงจะ Autoplay ได้ ส่วนเสียงเราใช้ <audio> แยกต่างหาก
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={currentTheme.videoSrc} type="video/mp4" />
        </motion.video>
      </AnimatePresence>

      {/* Overlay ปรับโทนสี */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${currentTheme.overlay}`}
      />
    </div>
  );
};

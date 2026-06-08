'use client';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#f5f5f7] -z-50 overflow-hidden">
      
{/*       
      <motion.div
        // ลบ blur-[100px] และ bg-blue-300/40 ออก แล้วใส่ will-change-transform
        className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] mix-blend-multiply will-change-transform"
        style={{
          // ใช้ Radial Gradient สร้างสีฟุ้งๆ แทนการเบลอ
          background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, rgba(147,197,253,0) 70%)',
        }}
        animate={{
          x: [0, 100, -100, 50, 0],
          y: [0, -50, 150, -50, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      
      <motion.div
        className="absolute top-[40%] right-[10%] w-[45vw] h-[45vw] mix-blend-multiply will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(249,168,212,0.4) 0%, rgba(249,168,212,0) 70%)',
        }}
        animate={{
          x: [0, -120, 80, -50, 0],
          y: [0, 100, -100, 50, 0],
          scale: [1, 1.1, 0.8, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      
      <motion.div
        className="absolute -bottom-[10%] left-[30%] w-[60vw] h-[60vw] mix-blend-multiply will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(216,180,254,0.3) 0%, rgba(216,180,254,0) 70%)',
        }}
        animate={{
          x: [0, 150, -50, 100, 0],
          y: [0, -150, 50, -100, 0],
          scale: [1, 0.9, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      /> */}
    </div>
  );
};

export default Background;
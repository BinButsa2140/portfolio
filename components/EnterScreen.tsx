'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EnterScreen = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <motion.div 
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md"
    >
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to My Portfolio</h1> */}
      <p className="text-gray-500 mb-8 text-center max-w-md text-3xl">
        For the best experience, please turn on your sound.
      </p>
      <button 
        onClick={onEnter}
        className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-transform hover:scale-105"
      >
        Enter Experience
      </button>
    </motion.div>
  );
};
"use client";

import Image from "next/image";
import { ThemeConfig } from "@/types/type";

const Gallery = ({ theme, isInset = false }: { theme: ThemeConfig, isInset?: boolean }) => {
  const images = [
    '/projects/aitutor/cover/image.png',
    '/projects/manbuilding/cover/manbuilding.png',
    '/projects/puwapat/cover/puwapat.png',
    '/projects/hengwash/cover/hengwash.png',
    '/projects/hengudomporn/cover/hengudomporn.png',
    '/projects/kitchenmanagement/cover/kitchenmanagement.png',
    '/projects/aitutor/img/image copy 2.png',
    '/projects/manbuilding/img/image copy.png',
    '/projects/kitchenmanagement/img/image copy 4.png',
    '/projects/aitutor/img/image copy 5.png',
    '/projects/manbuilding/img/image copy 3.png',
    '/projects/aitutor/img/image copy 8.png',
  ];

  // Double the images for seamless loop
  const doubledImages = [...images, ...images, ...images, ...images];

  return (
    <div className={`w-full h-full relative overflow-hidden transition-colors duration-1000 ${isInset ? '' : `max-w-5xl mx-auto my-10 h-[600px] rounded-[2.5rem] shadow-2xl border ${theme.colors.bgPrimary} ${theme.colors.border}`}`}>
      {!isInset && (
        <>
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/20" />
          <div className="absolute top-8 left-8 z-20">
            <h2 className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-1000 ${theme.colors.textPrimary}`}>
              Gallery
            </h2>
            <p className={`mt-1 font-medium transition-colors duration-1000 ${theme.colors.textSecondary}`}>
              Visual journey through my works
            </p>
          </div>
        </>
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        {/* Container for diagonal rotation */}
        <div className={`w-[250%] h-[250%] rotate-[-15deg] flex flex-col gap-4 ${isInset ? 'scale-110' : ''}`}>
          {/* Row 1 */}
          <div className="flex gap-4 animate-diagonal-scroll-1">
            {doubledImages.map((img, i) => (
              <div key={i} className="relative w-64 h-48 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer group shrink-0">
                <Image
                  src={img}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover group-hover:brightness-110"
                  sizes="256px"
                />
              </div>
            ))}
          </div>
          
          {/* Row 2 - Offset */}
          <div className="flex gap-4 animate-diagonal-scroll-2 ml-[-128px]">
             {doubledImages.map((img, i) => (
              <div key={i} className="relative w-64 h-48 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer group shrink-0">
                <Image
                  src={img}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover group-hover:brightness-110"
                  sizes="256px"
                />
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex gap-4 animate-diagonal-scroll-1">
            {doubledImages.map((img, i) => (
              <div key={i} className="relative w-64 h-48 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer group shrink-0">
                <Image
                  src={img}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover group-hover:brightness-110"
                  sizes="256px"
                />
              </div>
            ))}
          </div>

          {/* Row 4 - Offset */}
          <div className="flex gap-4 animate-diagonal-scroll-2 ml-[-128px]">
             {doubledImages.map((img, i) => (
              <div key={i} className="relative w-64 h-48 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer group shrink-0">
                <Image
                  src={img}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover group-hover:brightness-110"
                  sizes="256px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes diagonal-scroll-1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes diagonal-scroll-2 {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-diagonal-scroll-1 {
          animation: diagonal-scroll-1 40s linear infinite;
        }
        .animate-diagonal-scroll-2 {
          animation: diagonal-scroll-2 40s linear infinite;
        }
        .animate-diagonal-scroll-1:hover,
        .animate-diagonal-scroll-2:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface ProjectSlideshowProps {
  title: string;
  images: string[];
}

export const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ title, images }) => {
  const validImages = images && images.length > 0 ? images : ["/placeholder.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  }, [validImages.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  }, [validImages.length]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (validImages.length <= 1 || isHovered || isLightboxOpen) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, validImages.length, isHovered, isLightboxOpen]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, nextSlide, prevSlide]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <div className="space-y-4">
      {/* Main Slideshow Container */}
      <div
        className="relative rounded-3xl overflow-hidden glass-card border border-white/10 aspect-video shadow-2xl group select-none bg-black/40"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={validImages[currentIndex]}
            alt={`${title} - Preview ${currentIndex + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          />
        </AnimatePresence>

        {/* Top Badges & Lightbox Button */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          {validImages.length > 1 && (
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10 shadow-lg">
              {currentIndex + 1} / {validImages.length}
            </span>
          )}
          <button
            onClick={() => setIsLightboxOpen(true)}
            title="Perbesar Gambar"
            className="p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white rounded-full border border-white/10 transition-all hover:scale-105"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {/* Navigation Arrows (hanya tampil jika > 1 gambar) */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-primary backdrop-blur-md text-white rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-primary backdrop-blur-md text-white rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {validImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
            {validImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-6 bg-primary"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail Strip (hanya tampil jika > 1 gambar) */}
      {validImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin">
          {validImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative flex-shrink-0 w-24 sm:w-28 aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? "border-primary ring-2 ring-primary/30 scale-105"
                  : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`${title} thumb ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-20"
            >
              <X size={24} />
            </button>

            <div className="relative max-w-6xl w-full max-h-[85vh] flex items-center justify-center">
              <img
                src={validImages[currentIndex]}
                alt={`${title} fullscreen`}
                className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
              />

              {validImages.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-primary text-white rounded-full backdrop-blur-md transition-all hover:scale-110"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-primary text-white rounded-full backdrop-blur-md transition-all hover:scale-110"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 text-center">
              <p className="text-white/80 font-medium text-sm">
                {title} ({currentIndex + 1} / {validImages.length})
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

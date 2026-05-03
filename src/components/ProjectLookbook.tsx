import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../constants';

interface ProjectLookbookProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectLookbook({ project, onClose }: ProjectLookbookProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gallery = project.gallery || [project.imageUrl];

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % gallery.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-off-white flex flex-col md:flex-row p-4 md:p-12 overflow-y-auto md:overflow-hidden text-electric-blue"
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 md:top-8 left-4 md:left-8 hover:opacity-50 transition-colors z-[110] cursor-pointer p-2"
      >
        <X size={24} />
      </button>

      {/* Main Stage */}
      <div className="flex-none md:flex-1 h-[40vh] md:h-auto flex items-center justify-center relative px-2 md:px-8 mt-12 md:mt-0">
        <div className="relative max-h-full max-w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {gallery[currentIndex].toLowerCase().endsWith('.pdf') ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center justify-center p-6 md:p-12 border-2 border-dashed border-electric-blue/30 rounded-lg text-center"
              >
                <div className="w-16 md:w-24 h-16 md:h-24 mb-4 md:mb-6 bg-electric-blue/5 flex items-center justify-center rounded-full">
                   <span className="text-xl md:text-2xl font-bold font-mono">PDF</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold uppercase mb-2 md:mb-4">Technical Document</h3>
                <p className="text-xs md:text-sm opacity-60 mb-6 md:mb-8 max-w-[200px] md:max-w-xs">PDF formats are optimized for direct download and professional printing.</p>
                <a 
                  href={gallery[currentIndex]} 
                  download 
                  className="bg-electric-blue text-white px-6 py-3 md:px-8 md:py-4 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-electric-blue/80 transition-colors"
                >
                  Download Techpack
                </a>
              </motion.div>
            ) : (
              <motion.img 
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                src={gallery[currentIndex]} 
                alt={`${project.title} - ${currentIndex}`}
                className="max-w-full max-h-full md:max-h-[85vh] object-contain"
                referrerPolicy="no-referrer"
              />
            )}
          </AnimatePresence>

          {/* Arrows */}
          <button 
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute -left-2 md:-left-16 top-1/2 -translate-y-1/2 hover:opacity-30 transition-opacity p-2"
          >
            <ChevronLeft size={32} md:size={48} strokeWidth={1} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute -right-2 md:-right-16 top-1/2 -translate-y-1/2 hover:opacity-30 transition-opacity p-2"
          >
            <ChevronRight size={32} md:size={48} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Side UI (Lookbook Sidebar) */}
      <div className="flex-1 md:w-80 flex flex-col justify-between pt-8 md:pt-0 md:pl-12 border-t md:border-t-0 md:border-l border-electric-blue/10 mt-8 md:mt-0">
        <div>
          <span className="text-[9px] md:text-[10px] font-mono tracking-widest opacity-50 uppercase block mb-1 md:mb-2 text-center md:text-left">
            {project.year} / {project.client}
          </span>
          <h2 className="text-xl md:text-2xl font-bold tracking-tighter uppercase mb-6 md:mb-8 leading-tight text-center md:text-left">
            {project.title}
          </h2>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-5 md:grid-cols-5 gap-1 mb-8 md:mb-12">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`aspect-[3/4] overflow-hidden border-2 transition-all bg-transparent flex items-center justify-center ${i === currentIndex ? 'border-electric-blue' : 'border-transparent hover:border-electric-blue/20'}`}
              >
                {img.toLowerCase().endsWith('.pdf') ? (
                  <span className="text-[8px] font-mono font-bold">PDF</span>
                ) : (
                  <img 
                    src={img} 
                    className="w-full h-full object-contain transition-all" 
                    referrerPolicy="no-referrer"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          <div className="text-[10px] md:text-[11px] font-sans leading-relaxed opacity-60 md:max-w-xs text-center md:text-left">
            {project.description}
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] md:text-[11px]">
            <span className="opacity-50">{currentIndex + 1} of {gallery.length}</span>
            <div className="flex gap-4">
              <button onClick={prev} className="hover:opacity-50 cursor-pointer">PREV</button>
              <button onClick={next} className="hover:opacity-50 cursor-pointer">NEXT</button>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase hover:opacity-50 transition-colors pt-4 pb-8 md:pb-0 border-t border-electric-blue/10 text-center md:text-left"
          >
            Exit / Archive
          </button>
        </div>
      </div>
    </motion.div>
  );
}

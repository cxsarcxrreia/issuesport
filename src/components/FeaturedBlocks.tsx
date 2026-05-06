import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { X } from 'lucide-react';
import ProjectLookbook from './ProjectLookbook';

const BLOCKS = [
  {
    id: 'design',
    category: 'Design',
    title: 'DESIGN',
    description: 'Visual identities and kinetic systems for bold brands seeking distinct market presence.',
    image: '/images/keysbanner.jpg',
    tag: 'Design / Visual',
    bgColor: 'bg-off-white',
    textColor: 'text-electric-blue',
    accentColor: 'bg-electric-blue'
  },
  {
    id: 'editorial',
    category: 'Editorial',
    title: 'EDITORIAL',
    description: 'High-end layout design for premium print publications and experimental magazines.',
    image: '/images/Misstep2color.png',
    tag: 'Print / Magazine',
    bgColor: 'bg-off-white',
    textColor: 'text-electric-blue',
    accentColor: 'bg-electric-blue'
  },
  {
    id: 'techpacks',
    category: 'Techpack',
    title: 'TECHPACKS',
    description: 'Detailed technical specifications and component breakdowns for garment manufacturing and product development.',
    image: '/images/techpackdripclub jersey-01.png',
    tag: 'Technical / Production',
    bgColor: 'bg-off-white',
    textColor: 'text-electric-blue',
    accentColor: 'bg-electric-blue'
  }
];

interface FeaturedBlocksProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function FeaturedBlocks({ selectedCategory, onSelectCategory }: FeaturedBlocksProps) {
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null);
  const [hoveredProject, setHoveredProject] = useState<typeof PROJECTS[0] | null>(null);

  const filteredProjects = selectedCategory 
    ? PROJECTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase()) 
    : [];

  return (
    <>
      {BLOCKS.map((block) => (
        <section 
          key={block.id} 
          id={block.id}
          role="button"
          tabIndex={0}
          aria-label={`Explore ${block.title} projects`}
          onClick={() => onSelectCategory(block.category)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onSelectCategory(block.category);
            }
          }}
          className={`group min-h-[100svh] md:h-screen w-full relative overflow-hidden snap-start snap-always flex flex-col justify-start md:justify-end px-5 pt-28 pb-16 md:p-12 transition-colors duration-1000 cursor-pointer ${block.bgColor}`}
        >

          {/* Background Image with heavy darkening */}
          <div className="absolute inset-0 z-0">
            <img 
              src={block.image} 
              alt={block.title}
              className="w-full h-full object-cover grayscale brightness-0 opacity-10 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content */}
          <div className={`relative z-10 max-w-screen-2xl mx-auto w-full border-l-2 border-current pl-5 md:pl-16 ${block.textColor}`}>
            <div className="overflow-hidden mb-3 md:mb-6">
              <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] md:tracking-[0.6em] opacity-50 uppercase block">
                {block.tag}
              </span>
            </div>
            
            <h2 className="text-[15vw] md:text-[12vw] font-extrabold tracking-tighter mb-5 md:mb-12 leading-[0.78] md:leading-[0.75] uppercase">
              {block.title}
            </h2>
            
            <div className="max-w-xl">
               <p className="opacity-70 text-base md:text-xl font-sans tracking-tight leading-relaxed mb-6 md:mb-12">
                {block.description}
              </p>
              <button 
                onClick={(event) => {
                  event.stopPropagation();
                  onSelectCategory(block.category);
                }}
                className="flex items-center gap-4 py-3 -my-3 font-bold text-[11px] md:text-sm tracking-[0.3em] uppercase cursor-pointer"
              >
                Explore Projects
                <div className={`w-12 h-[2px] ${block.accentColor} group-hover:w-20 transition-all duration-500`} />
              </button>
            </div>
          </div>

          {/* Side Indicator */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-4 opacity-20 font-mono text-sm hidden md:flex">
             {BLOCKS.map((_, i) => (
                <div key={i} className={`w-1 h-12 bg-white ${BLOCKS.indexOf(block) === i ? 'opacity-100' : 'opacity-20'} transition-all`} />
             ))}
          </div>
        </section>
      ))}

      {/* Category Overlay (Archive Style List) */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-off-white flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 md:p-10 flex justify-between items-start border-b border-black/5 text-electric-blue">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono tracking-widest opacity-50 uppercase">Archive</span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase">{selectedCategory}</h3>
              </div>
              <button 
                onClick={() => onSelectCategory(null)}
                className="hover:opacity-50 transition-colors cursor-pointer"
              >
                <X size={28} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-off-white">
              {/* List Section (Reduced width and adjusted padding) */}
              <div className="w-full md:w-[38.5%] overflow-hidden md:overflow-y-auto px-0 md:px-10 py-0 md:py-8 flex flex-col bg-off-white border-r border-black/5">
                <div className="max-h-[34svh] md:max-h-none overflow-y-auto px-6 py-5 md:px-0 md:py-0 flex flex-col gap-3">
                  {filteredProjects.map((project) => (
                    <motion.button
                      key={project.id}
                      onMouseEnter={() => setHoveredProject(project)}
                      onMouseLeave={() => setHoveredProject(null)}
                      onClick={() => setActiveProject(project)}
                      className="text-left group border-b border-black/5 pb-3 last:border-0 text-electric-blue"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-mono opacity-40 uppercase">{project.year}</span>
                        <h4 className="text-xl md:text-3xl font-bold tracking-tighter uppercase transition-all duration-300 group-hover:pl-3">
                          {project.title}
                        </h4>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="md:hidden flex-1 min-h-0 border-t border-black/5">
                  <div className="h-full overflow-hidden px-0 py-5">
                    <motion.div
                      className="flex h-full w-max gap-4 px-6"
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{
                        duration: Math.max(18, filteredProjects.length * 7),
                        ease: 'linear',
                        repeat: Infinity
                      }}
                    >
                      {[...filteredProjects, ...filteredProjects].map((project, index) => (
                        <motion.button
                          key={`${project.id}-mobile-thumb-${index}`}
                          onClick={() => setActiveProject(project)}
                          className="group w-[72vw] h-full max-h-[44svh] shrink-0 text-left text-electric-blue"
                        >
                          <div className="h-full flex flex-col">
                            <div className="flex-1 min-h-0 overflow-hidden bg-electric-blue/5">
                              <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-contain transition-transform duration-500 group-active:scale-105"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="pt-3">
                              <span className="text-[9px] font-mono opacity-40 uppercase">{project.year}</span>
                              <h4 className="text-lg font-bold tracking-tighter uppercase leading-none">
                                {project.title}
                              </h4>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Large Preview Section (Restored to Right Column) */}
              <div className="flex-1 hidden md:flex items-center justify-center relative overflow-hidden bg-off-white">
                <AnimatePresence mode="wait">
                  {hoveredProject ? (
                    <motion.div
                      key={hoveredProject.id}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.05, y: -20 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="w-[90%] h-[90%] relative"
                    >
                      <img 
                        src={hoveredProject.imageUrl} 
                        alt={hoveredProject.title}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ) : (
                    <div className="text-[150px] font-bold text-electric-blue/5 select-none pointer-events-none">
                      {filteredProjects.length.toString().padStart(3, '0')}
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Footer Status */}
            <div className="p-4 border-t border-black/5 flex justify-between font-mono text-[10px] text-electric-blue/50 bg-off-white">
               <div>ANDRE CORREIA / PORTUGAL</div>
               <div>{filteredProjects.length} ITEMS FOUND</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail View (Supreme Lookbook Style) */}
      <AnimatePresence>
        {activeProject && (
          <ProjectLookbook 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

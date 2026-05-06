import { useState, useRef, useMemo, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import Navigation from './components/Navigation';
import FeaturedBlocks from './components/FeaturedBlocks';
import { DVDBounce } from './components/DVDBounce';

function PixelateFilter({ id, size }: { id: string; size: number }) {
  return (
    <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
      <defs>
        <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
          <feFlood x="2" y="2" height={Math.max(1, size / 4)} width={Math.max(1, size / 4)} />
          <feComposite width={Math.max(1, size)} height={Math.max(1, size)} />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" radius={Math.max(0, size / 2)} />
        </filter>
      </defs>
    </svg>
  );
}

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const mobileBounceAreaRef = useRef<HTMLDivElement>(null);
  const desktopUpperBounceAreaRef = useRef<HTMLDivElement>(null);
  const desktopLowerBounceAreaRef = useRef<HTMLDivElement>(null);

  const openCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const goHome = () => {
    setSelectedCategory(null);
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bounceItems = useMemo(() => [
    { id: 'design-bounce', label: 'DESIGN', onClick: () => {
      openCategory('Design');
    }},
    { id: 'editorial-bounce', label: 'EDITORIAL', onClick: () => {
      openCategory('Editorial');
    }},
    { id: 'techpack-bounce', label: 'TECHPACKS', onClick: () => {
      openCategory('Techpack');
    }},
  ], []);
  const desktopUpperBounceItems = useMemo(() => bounceItems.slice(0, 2), [bounceItems]);
  const desktopLowerBounceItems = useMemo(() => bounceItems.slice(2), [bounceItems]);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <main className="h-[100svh] md:h-screen overflow-y-scroll snap-y snap-mandatory bg-off-white selection:bg-electric-blue selection:text-white">
      <PixelateFilter id="hero-pixelate" size={10} />
      <Navigation onGoHome={goHome} onSelectCategory={openCategory} />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-[100svh] md:h-screen w-full snap-start flex flex-col pt-28 md:pt-32 px-4 md:px-12 relative overflow-hidden bg-off-white"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative z-10 max-w-screen-2xl mx-auto w-full">
          <div className="relative block">
            {/* Layer 1: The Sharp Base */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[18vw] md:text-[16vw] leading-[0.75] font-sans font-extrabold text-electric-blue tracking-tighter uppercase cursor-pointer hover:opacity-80 transition-opacity"
            >
              issues <br /> hd
            </motion.h1>

            <div
              className="absolute left-2 right-2 top-[8.75rem] h-[44svh] z-30 pointer-events-none md:hidden"
              ref={mobileBounceAreaRef}
            >
              <DVDBounce
                containerRef={mobileBounceAreaRef}
                items={bounceItems}
              />
            </div>

            <div
              className="absolute z-30 pointer-events-none hidden md:block md:left-[50vw] md:right-0 md:top-[2vw] md:h-[14vw]"
              ref={desktopUpperBounceAreaRef}
            >
              <DVDBounce
                containerRef={desktopUpperBounceAreaRef}
                items={desktopUpperBounceItems}
              />
            </div>

            <div
              className="absolute z-30 pointer-events-none hidden md:block md:left-[28vw] md:right-0 md:top-[11vw] md:h-[13vw]"
              ref={desktopLowerBounceAreaRef}
            >
              <DVDBounce
                containerRef={desktopLowerBounceAreaRef}
                items={desktopLowerBounceItems}
              />
            </div>

            {/* Layer 2: The Pixelated Overlay (Clipped to mouse) - Hidden on Mobile */}
            <motion.h1 
              aria-hidden="true"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isHovering ? 1 : 0, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 left-0 text-[18vw] md:text-[16vw] leading-[0.75] font-sans font-extrabold text-electric-blue tracking-tighter uppercase cursor-pointer pointer-events-none select-none hidden md:block"
              style={{ 
                filter: 'url(#hero-pixelate)',
                clipPath: `circle(120px at ${mousePos.x}px ${mousePos.y}px)`,
                WebkitClipPath: `circle(120px at ${mousePos.x}px ${mousePos.y}px)`
              }}
            >
              issues <br /> hd
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-[44svh] md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-8"
          >
            <div className="flex flex-col gap-6 md:gap-8 items-start w-full md:w-auto">
              <p className="max-w-md text-electric-blue/40 font-sans text-lg md:text-xl tracking-tight leading-relaxed">
                Graphic Designer & Art Director. <br />
                Synthesizing technical precision with <br />
                editorial experimentation.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end w-full md:w-auto">
              <span className="text-[10px] md:text-[12px] font-bold text-electric-blue/30 tracking-[0.5em] uppercase mb-2">Portfolio 26</span>
              <span className="text-electric-blue font-mono text-xs md:text-sm">SCROLL TO DISCOVER</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Scrolling Blocks (Snap Sections) */}
      <FeaturedBlocks 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />

      {/* Footer (Snap Section) */}
      <footer id="contact" className="h-screen snap-start bg-off-white flex flex-col justify-center px-4 md:px-12 text-electric-blue">
        <div className="max-w-screen-2xl mx-auto w-full">
          <span className="text-[10px] md:text-[12px] font-bold tracking-[0.3em] md:tracking-[0.5em] text-neutral-400 uppercase block mb-6 md:mb-8">Ready to collaborate?</span>
          <a href="mailto:andrecorreia999@gmail.com" className="block w-full text-[5.8vw] md:text-[5.7vw] font-bold tracking-tighter hover:opacity-50 transition-colors underline decoration-1 underline-offset-[8px] md:underline-offset-[18px] whitespace-nowrap">
            ANDRECORREIA999@GMAIL.COM
          </a>
          
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'INSTAGRAM', link: 'https://www.instagram.com/issues_hd/' },
              { label: 'EGOWORLD', link: 'https://egoworld.eu' }
            ].map((social) => (
              <a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer" className="font-bold text-xs md:text-sm tracking-widest opacity-50 hover:opacity-100 transition-opacity">
                {social.label}
              </a>
            ))}
          </div>
          
          <div className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] font-mono opacity-50 text-center md:text-left">
            <span>© 2026 ANDRE CORREIA</span>
            <span className="uppercase">Unblurring reality</span>
            <span>PORTUGAL / EUROPE</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

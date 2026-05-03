import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-center text-electric-blue mix-blend-multiply">
      <motion.a 
        href="#design"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-sans font-bold tracking-tighter text-xl md:text-2xl uppercase hover:opacity-50 transition-opacity"
      >
        issues_hd
      </motion.a>
      <div className="flex gap-4 md:gap-8 items-center relative">
        {['HOME', 'DESIGN', 'EDITORIAL', 'TECHPACKS'].map((item, i) => (
          <motion.a
            key={item}
            href={item === 'HOME' ? '#home' : `#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-[10px] md:text-xs font-semibold tracking-widest hover:opacity-50 transition-opacity uppercase"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </nav>
  );
}

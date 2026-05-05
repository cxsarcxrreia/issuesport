import { motion } from 'motion/react';

interface NavigationProps {
  onGoHome: () => void;
  onSelectCategory: (category: string) => void;
}

const CATEGORY_LINKS = [
  { label: 'DESIGN', category: 'Design' },
  { label: 'EDITORIAL', category: 'Editorial' },
  { label: 'TECHPACKS', category: 'Techpack' },
];

export default function Navigation({ onGoHome, onSelectCategory }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-start md:items-center text-electric-blue mix-blend-multiply">
      <motion.a 
        href="#home"
        onClick={(event) => {
          event.preventDefault();
          onGoHome();
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-sans font-bold tracking-tighter text-lg md:text-2xl uppercase hover:opacity-50 transition-opacity"
      >
        issues_hd
      </motion.a>
      <div className="flex flex-wrap justify-end gap-x-3 gap-y-2 md:gap-8 items-center relative max-w-[64vw] md:max-w-none">
        <motion.a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            onGoHome();
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[9px] md:text-xs font-semibold tracking-widest hover:opacity-50 transition-opacity uppercase"
        >
          HOME
        </motion.a>
        {CATEGORY_LINKS.map((item, i) => (
          <motion.a
            key={item.label}
            href={`#${item.category.toLowerCase()}-projects`}
            onClick={(event) => {
              event.preventDefault();
              onSelectCategory(item.category);
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (i + 1) * 0.1 }}
            className="text-[9px] md:text-xs font-semibold tracking-widest hover:opacity-50 transition-opacity uppercase"
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </nav>
  );
}

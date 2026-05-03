import { motion } from 'motion/react';
import { Project } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer relative"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="bg-white text-black p-4 rounded-full"
          >
            <ArrowUpRight size={24} />
          </motion.div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-start">
        <div>
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
            {project.category} — {project.year}
          </span>
          <h3 className="text-lg md:text-xl font-sans font-medium mt-1 tracking-tight">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

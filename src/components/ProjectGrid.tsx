import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '../constants';
import ProjectCard from './ProjectCard';
import ProjectLookbook from './ProjectLookbook';

const CATEGORIES = ['All', 'Poster', 'Techpack', 'Editorial', 'Design'] as const;

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-neutral-100 pb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 transition-all ${
                activeCategory === cat ? 'bg-black text-white' : 'text-neutral-400 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <div key={project.id} onClick={() => setSelectedProject(project)}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Lookbook View */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectLookbook 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Underwater Image Enhancement',
    description: 'Developed an image enhancement system to reduce blur and correct color distortion, increasing clarity by 35%. Implemented noise reduction and histogram equalization, processing 500+ images with consistent quality.',
    tech: ['Python', 'OpenCV', 'HTML', 'CSS'],
    link: '#',
  },
  {
    title: 'Attendance Management System',
    description: 'Built a mobile-based attendance system reducing manual tracking effort by 40%. Integrated Firebase for real-time storage, managing 1,000+ records with instant updates and 25% fewer errors.',
    tech: ['Java', 'XML', 'Firebase'],
    link: '#',
  },
  {
    title: 'Supply Chain Backend Optimization',
    description: 'Engineered scalable backend services using Java and PL/SQL for enterprise supply chain management. Optimized complex queries and implemented disaster recovery protocols for mission-critical systems.',
    tech: ['Java', 'Oracle SQL', 'PL/SQL', 'REST APIs'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all group-hover:text-purple-600 dark:group-hover:text-purple-400"
                  >
                    View Project 
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

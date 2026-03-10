'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'SQL', 'JavaScript', 'HTML/CSS', 'React.js'],
  },
  {
    title: 'Backend & Database',
    skills: ['PL/SQL', 'Oracle SQL', 'MySQL', 'REST APIs', 'Firebase'],
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Google Cloud Platform', 'Data Analytics', 'Machine Learning', 'Gen AI', 'Big Data'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {category.title.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 + i * 0.05 }}
                      className="text-slate-600 dark:text-slate-300 flex items-center font-medium"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

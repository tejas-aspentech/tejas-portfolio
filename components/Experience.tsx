'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'UST Global',
    period: 'July 2024 - Present',
    description: 'Bengaluru, India - Engineering scalable backend applications and leading L3 incident management.',
    achievements: [
      'Optimized Oracle SQL queries improving processing speeds by 30% across supply chain ecosystem',
      'Led Root Cause Analysis (RCA) reducing recurring incidents by 20% through strategic backend fixes',
      'Enhanced system resilience ensuring 99.9% stability for mission-critical applications',
      'Collaborated with QA teams delivering REST API enhancements, reducing resolution time by 25%',
    ],
  },
  {
    title: 'Java Full Stack Intern',
    company: 'Varcons Technologies',
    period: 'Aug 2023 - Jan 2024',
    description: 'Bengaluru, India - Developed responsive full-stack applications with Java and React.js.',
    achievements: [
      'Engineered photography platform with RESTful APIs improving data synchronization speed by 25%',
      'Optimized MySQL database schemas reducing query latency by 15% for high-resolution media',
      'Developed dynamic UI with 100% mobile responsiveness and seamless cross-browser performance',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-l-4 border-blue-600 pl-8 relative"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  {exp.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {achievement}
                    </li>
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

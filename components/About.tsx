'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I&apos;m an experienced Software Engineer with a strong foundation in Java, Python, and SQL, 
              specializing in backend development and the end-to-end Software Development Life Cycle (SDLC).
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I excel at resolving complex L3 production issues and leveraging data analytics to optimize 
              system performance and reliability. My experience includes working with AWS, Google Cloud Platform, 
              and implementing scalable solutions that drive real business impact.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I&apos;m dedicated to developing scalable, high-impact software solutions within fast-paced, 
              collaborative environments. Always eager to tackle challenging problems and learn new technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

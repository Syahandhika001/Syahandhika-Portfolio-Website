'use client';

import { motion } from 'framer-motion';
import { aboutMe } from '@/lib/data';
import { FiCode, FiLayers, FiTool, FiZap } from 'react-icons/fi';

const categoryIcons = {
  Frontend: FiCode,
  Backend: FiLayers,
  'Tools & Platforms': FiTool,
  Specialties: FiZap,
};

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section container-custom">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="gradient-text mb-4">About Me</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 dark:text-gray-400">
            Get to know more about my journey, skills, and what drives me as a
            developer
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {aboutMe.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card text-center"
            > 
              <div className="mb-2 text-4xl font-bold text-primary-500">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio & Skills Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Bio Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="mb-4 text-2xl font-bold">My Story</h3>
            {aboutMe.bio.map((paragraph, index) => (
              <p
                key={index}
                className="leading-relaxed text-gray-400 dark:text-gray-400"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="mb-4 text-2xl font-bold">Skills & Expertise</h3>
            <div className="space-y-4">
              {aboutMe.skills.map((skillGroup) => {
                const Icon =
                  categoryIcons[
                    skillGroup.category as keyof typeof categoryIcons
                  ];
                return (
                  <div key={skillGroup.category} className="card">
                    <div className="mb-3 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary-500" />
                      <h4 className="font-semibold text-primary-500">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-secondary-700/50 bg-dark-secondary px-3 py-1 text-sm text-gray-400 transition-colors hover:border-primary-500 hover:text-primary-500 dark:border-secondary-700/50 dark:bg-dark-secondary dark:text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
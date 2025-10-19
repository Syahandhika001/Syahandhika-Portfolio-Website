'use client';

import { motion } from 'framer-motion';
import { experiences, education, certifications } from '@/lib/data';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';

type Tab = 'experience' | 'education' | 'certifications';

export function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>('experience');

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <div className="text-center">
          <h2 className="gradient-text mb-4">Experience & Education</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 dark:text-gray-400">
            My professional journey and academic background
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                : 'border border-secondary-700/50 bg-dark-secondary text-gray-400 hover:border-primary-500 hover:text-primary-500'
            }`}
          >
            <FiBriefcase />
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                : 'border border-secondary-700/50 bg-dark-secondary text-gray-400 hover:border-primary-500 hover:text-primary-500'
            }`}
          >
            <FiAward />
            Education
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
              activeTab === 'certifications'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                : 'border border-secondary-700/50 bg-dark-secondary text-gray-400 hover:border-primary-500 hover:text-primary-500'
            }`}
          >
            <FiCheckCircle />
            Certifications
          </button>
        </div>

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <motion.div
            key="experience"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative space-y-8"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 md:left-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex h-4 w-4 items-center justify-center">
                  <div className="h-4 w-4 rounded-full border-4 border-primary-500 bg-dark-primary" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="ml-16 md:ml-0 card group hover:border-primary-500">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="mb-2 flex items-start justify-between flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-primary-500">
                          {exp.title}
                        </h3>
                        <span className="inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-500">
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="mb-2 text-lg font-semibold">
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h5 className="mb-2 font-semibold text-primary-500">
                        Key Responsibilities:
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-400">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="mb-2 font-semibold text-primary-500">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-secondary-700/50 px-2 py-1 text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <h5 className="mb-2 font-semibold text-primary-500">
                          Achievements:
                        </h5>
                        <ul className="space-y-1 text-sm text-gray-400">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <FiCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <motion.div
            key="education"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="card group hover:border-primary-500"
              >
                <h3 className="mb-2 text-xl font-bold text-primary-500">
                  {edu.degree}
                </h3>
                <h4 className="mb-2 text-lg font-semibold">
                  {edu.institution}
                </h4>
                <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMapPin className="h-4 w-4" />
                    {edu.location}
                  </div>
                </div>
                {edu.gpa && (
                  <p className="mb-4 text-sm text-gray-400">
                    <span className="font-semibold text-primary-500">GPA:</span> {edu.gpa}
                  </p>
                )}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h5 className="mb-2 font-semibold text-primary-500">
                      Achievements:
                    </h5>
                    <ul className="space-y-1 text-sm text-gray-400">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FiCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <motion.div
            key="certifications"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="card group hover:border-primary-500"
              >
                <div className="mb-4 flex items-start justify-between">
                  <FiAward className="h-8 w-8 text-primary-500" />
                  <span className="text-sm text-gray-400">{cert.date}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{cert.name}</h3>
                <p className="mb-4 text-sm text-gray-400">{cert.issuer}</p>
                {cert.credentialUrl && cert.credentialUrl !== '#' && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary-500 hover:underline"
                  >
                    View Credential
                    <FiCheckCircle className="h-4 w-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
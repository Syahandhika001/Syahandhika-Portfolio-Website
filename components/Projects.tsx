'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects, projectCategories } from '@/lib/data';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
    <section id="projects" className="section container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <div className="text-center">
          <h2 className="gradient-text mb-4">Featured Projects</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 dark:text-gray-400">
            A collection of projects I've worked on, showcasing my skills and
            passion for development
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-lg px-6 py-2 font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                  : 'border border-secondary-700/50 bg-dark-secondary text-gray-400 hover:border-primary-500 hover:text-primary-500 dark:border-secondary-700/50 dark:bg-dark-secondary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
            {/* className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" kalo mau 4 grid colom */}
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group card overflow-hidden p-0"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-6xl font-bold text-white/20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4 p-6">
                {/* Title */}
                <h3 className="text-xl font-bold group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-400 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary-500/10 px-2 py-1 text-xs text-primary-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-500"
                    >
                      <FiGithub className="h-5 w-5" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-500"
                    >
                      <FiExternalLink className="h-5 w-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-gray-400 dark:text-gray-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
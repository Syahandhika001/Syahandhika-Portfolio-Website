'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects, projectCategories } from '@/lib/data';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

type Category = (typeof projectCategories)[number];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  // ✅ Fix: Explicitly type the filtered projects
  const filteredProjects = projects.filter((project) =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

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
          <h2 className="gradient-text mb-4">My Projects</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 dark:text-gray-400">
            Showcase of my recent work and side projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'border border-secondary-700/50 bg-dark-secondary text-gray-400 hover:border-primary-500 hover:text-primary-500 dark:border-secondary-700/50 dark:bg-dark-secondary'
              }`}
            >
              {category}
            </button>
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
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card group overflow-hidden hover:border-primary-500"
            >
              {/* Project Image */}
              <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-secondary-800">
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
                {project.featured && (
                  <div className="absolute right-2 top-2">
                    <span className="rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                {/* Category Badge */}
                <span className="inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-500">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold">{project.title}</h3>

                {/* Description */}
                <p className="line-clamp-3 text-sm text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary-700/50 px-2 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="rounded-md bg-secondary-700/50 px-2 py-1 text-xs text-gray-300">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-500"
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
                      className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-500"
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
            <p className="text-lg text-gray-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
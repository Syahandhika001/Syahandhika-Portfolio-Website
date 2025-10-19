'use client';

import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/lib/data';
import Typewriter from 'typewriter-effect';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiDownload,
  FiArrowRight,
  FiChevronDown,
} from 'react-icons/fi';
import Image from 'next/image';

const iconMap = {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
};

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -right-48 bottom-1/4 h-96 w-96 rounded-full bg-secondary-500/20 blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          {/* Left Side: Text Content */}
          <div className="space-y-6">
            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <span className="inline-block rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-500">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl font-bold md:text-6xl lg:text-7xl"
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typewriter Roles */}
            <motion.div
              variants={itemVariants}
              className="font-heading text-2xl font-semibold text-gray-400 dark:text-gray-400 md:text-3xl lg:text-4xl"
            >
              <Typewriter
                options={{
                  strings: personalInfo.roles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-lg leading-relaxed text-gray-400 dark:text-gray-400"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href={personalInfo.cvUrl}
                download
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <FiDownload className="h-5 w-5" />
                Download CV
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn btn-outline inline-flex items-center gap-2"
              >
                Contact Me
                <FiArrowRight className="h-5 w-5" />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-lg border border-secondary-700/50 bg-dark-secondary p-3 text-gray-400 transition-all duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-secondary-700/50 dark:bg-dark-secondary"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Side: Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Animated Border Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-50 blur-xl"
              />

              {/* Profile Image Container */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary-500/20 md:h-80 md:w-80 lg:h-96 lg:w-96">
                {/* Placeholder - Replace dengan foto Anda */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500">
                  <span className="font-heading text-8xl font-bold text-white">
                    {personalInfo.name.charAt(0)}
                  </span>
                </div>

                {
                  <Image
                    src="/images/profile.png"
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                }
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="group flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-primary-500"
          aria-label="Scroll to About section"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FiChevronDown className="h-6 w-6 group-hover:text-primary-500" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}

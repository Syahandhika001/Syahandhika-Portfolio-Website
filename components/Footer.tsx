'use client';

import { motion } from 'framer-motion';
import { navLinks, personalInfo } from '@/lib/data';
import { FiArrowUp, FiHeart } from 'react-icons/fi';

const iconMap = {
  FiGithub: require('react-icons/fi').FiGithub,
  FiLinkedin: require('react-icons/fi').FiLinkedin,
  FiTwitter: require('react-icons/fi').FiTwitter,
  FiMail: require('react-icons/fi').FiMail,
};

export function Footer() {
  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-secondary-700/50 bg-dark-secondary/50 dark:border-secondary-700/50 dark:bg-dark-secondary/50">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="gradient-text font-heading text-2xl font-bold">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Frontend Developer passionate about creating beautiful and
              functional web experiences.
            </p>
            <div className="flex gap-3">
              {personalInfo.socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-300 bg-white p-2 text-gray-600 transition-all duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-secondary-700/50 dark:bg-dark-secondary dark:text-gray-400"
                    aria-label={social.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.hash)}
                    className="text-sm text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Web Development</li>
              <li>Frontend Engineering</li>
              <li>OutSystems Development</li>
              <li>CCTV Installation</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="transition-colors hover:text-primary-500"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>{personalInfo.location}</li>
              <li className="text-primary-500">Available for freelance</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-secondary-700"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name}. Built with{' '}
            <FiHeart className="inline h-4 w-4 text-primary-500" /> using
            Next.js &amp; Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="rounded-lg border border-gray-300 bg-white p-2 text-gray-600 transition-all duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-secondary-700/50 dark:bg-dark-secondary dark:text-gray-400"
            aria-label="Back to top"
          >
            <FiArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
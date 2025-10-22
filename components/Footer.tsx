'use client';

import { motion } from 'framer-motion';
import { navLinks, socialLinks } from '@/lib/data';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
  FiHeart,
} from 'react-icons/fi';

const iconMap = {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-secondary-700/50 bg-dark-secondary/50 dark:border-secondary-700/50 dark:bg-dark-secondary/50">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="gradient-text font-heading text-2xl font-bold">
              Syahandhika
            </h3>
            <p className="text-sm text-gray-400 dark:text-gray-400">
              Frontend Developer passionate about creating beautiful and
              functional web experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
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
                    className="rounded-lg border border-secondary-700/50 bg-dark-secondary p-2 text-gray-400 transition-all duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-secondary-700/50 dark:bg-dark-secondary"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.hash}>
                  <button
                    onClick={() => scrollToSection(link.hash)}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-400"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-400">
              <li>Web Development</li>
              <li>Frontend Engineering</li>
              <li>OutSystems Development</li>
              <li>CCTV Installation</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-400">
              <li>
                <a
                  href="mailto:dhika.farizi@gmail.com"
                  className="transition-colors hover:text-primary-500"
                >
                  dhika.farizi@gmail.com
                </a>
              </li>
              <li>Jakarta, Indonesia</li>
              <li className="text-primary-500">Available for freelance</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-secondary-700 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-400 dark:text-gray-400">
            © {new Date().getFullYear()} Syahandhika. Built with{' '}
            <FiHeart className="inline h-4 w-4 text-primary-500" /> using
            Next.js & Tailwind CSS
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg border border-secondary-700/50 bg-dark-secondary p-2 text-gray-400 transition-all duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-secondary-700/50 dark:bg-dark-secondary"
            aria-label="Back to top"
          >
            <FiArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

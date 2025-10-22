'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactInfo, socialLinks } from '@/lib/data';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';

const iconMap = {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
};

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // ✅ KIRIM EMAIL VIA EMAILJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: contactInfo.email,
        },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

      console.log('✅ Email sent successfully:', result.text);
      setStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('❌ Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

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
    <section id="contact" className="section container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <div className="text-center">
          <h2 className="gradient-text mb-4">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 dark:text-gray-400">
            Have a project in mind or just want to say hi? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <motion.div variants={itemVariants} className="card">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary-500/10 p-3">
                  <FiMail className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {contactInfo.phone && (
              <motion.div variants={itemVariants} className="card">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-primary-500/10 p-3">
                    <FiPhone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="card">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary-500/10 p-3">
                  <FiMapPin className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-gray-400">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="card">
              <h3 className="mb-4 font-semibold">Connect With Me</h3>
              <div className="flex gap-4">
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
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="card bg-primary-500/10 border-primary-500/20">
              <p className="text-sm text-primary-500 font-medium">
                ✨ {contactInfo.availability}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-secondary-700/50 bg-dark-secondary px-4 py-3 text-gray-300 placeholder-gray-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-secondary-700/50 dark:bg-dark-secondary"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-secondary-700/50 bg-dark-secondary px-4 py-3 text-gray-300 placeholder-gray-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-secondary-700/50 dark:bg-dark-secondary"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-secondary-700/50 bg-dark-secondary px-4 py-3 text-gray-300 placeholder-gray-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-secondary-700/50 dark:bg-dark-secondary"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-secondary-700/50 bg-dark-secondary px-4 py-3 text-gray-300 placeholder-gray-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-secondary-700/50 dark:bg-dark-secondary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 text-green-500"
                >
                  <FiCheckCircle className="h-5 w-5" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-500"
                >
                  <FiAlertCircle className="h-5 w-5" />
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
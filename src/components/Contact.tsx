'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import Link from 'next/link'

export default function Contact() {
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-surface">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-t from-accent-primary/5 to-transparent"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Main CTA */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">Let's Connect</h2>
          <p className="text-dark-muted text-lg max-w-2xl mx-auto">
            I'm always excited to discuss new projects, opportunities, and ideas. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <motion.a
            href="mailto:gautamdash.dev@gmail.com"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="group p-6 bg-dark-bg border border-dark-border rounded-lg hover:border-accent-primary transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 rounded-lg group-hover:from-accent-primary/30 group-hover:to-accent-primary/20 transition-all">
                <FiMail className="text-accent-primary" size={24} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-dark-muted uppercase tracking-wide mb-1">Email</h3>
                <p className="text-dark-text font-semibold group-hover:text-accent-primary transition-colors">
                  gautamdash.dev@gmail.com
                </p>
              </div>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+917077248302"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="group p-6 bg-dark-bg border border-dark-border rounded-lg hover:border-accent-secondary transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 rounded-lg group-hover:from-accent-secondary/30 group-hover:to-accent-secondary/20 transition-all">
                <FiPhone className="text-accent-secondary" size={24} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-dark-muted uppercase tracking-wide mb-1">Phone</h3>
                <p className="text-dark-text font-semibold group-hover:text-accent-secondary transition-colors">
                  +91 7077 248 302
                </p>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-center text-sm font-semibold text-dark-muted uppercase tracking-widest mb-6">
            Follow My Work
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <SocialLink
              href="https://github.com/Gautam-Dash"
              icon={<FiGithub size={24} />}
              label="GitHub"
              color="text-dark-muted hover:text-accent-primary"
            />
            <SocialLink
              href="https://linkedin.com/in/gautam-dash-117a2520a"
              icon={<FiLinkedin size={24} />}
              label="LinkedIn"
              color="text-dark-muted hover:text-accent-secondary"
            />
            <SocialLink
              href="mailto:gautamdash.dev@gmail.com"
              icon={<FiMail size={24} />}
              label="Email"
              color="text-dark-muted hover:text-accent-primary"
            />
            <SocialLink
              href="https://www.hackerrank.com/profile/gautamdashhh"
              icon={<span className="font-bold text-lg">HR</span>}
              label="HackerRank"
              color="text-dark-muted hover:text-accent-secondary"
            />
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h3 className="text-lg font-semibold text-dark-text mb-4">Want My Resume?</h3>
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1BL2U5bLzy09wuk5QkJor0h1e6GsaUpPi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-primary/50 transition-all"
          >
            <span>Download Resume (PDF)</span>
            <span className="text-xl">↓</span>
          </motion.a>
          <p className="text-dark-muted text-sm mt-3">
            One-click download of my complete professional resume
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent my-12" />

        {/* Footer */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-dark-muted text-sm mb-2">
            Designed & Developed by <span className="text-accent-primary font-semibold">Gautam Dash</span>
          </p>
          <p className="text-dark-muted text-xs">
            © {currentYear} All rights reserved. Built with Next.js, React, and Tailwind CSS.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  color: string
}

function SocialLink({ href, icon, label, color }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className={`p-3 rounded-full border border-dark-border hover:border-accent-primary/50 ${color} transition-all`}
      title={label}
    >
      {icon}
    </motion.a>
  )
}

'use client'

import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { containerVariants, itemVariants } from '@/lib/animations'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center pt-20 md:pt-0"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-accent-primary opacity-10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-accent-secondary opacity-10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-6 justify-center md:justify-start"
        >
          <div className="w-2 h-2 bg-accent-primary rounded-full" />
          <p className="text-accent-primary font-semibold text-sm uppercase tracking-widest">
            Welcome to my portfolio
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-center md:text-left text-dark-text mb-4 leading-tight"
        >
          Gautam <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
            Dash
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-3xl text-dark-muted text-center md:text-left mb-6 font-light"
        >
          AI Engineer | Backend Developer | Python Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-dark-muted text-base md:text-lg max-w-2xl text-center md:text-left mb-8 leading-relaxed"
        >
          Building scalable AI-powered applications and distributed systems. Specialized in RAG systems, backend
          optimization, and robust testing frameworks. 30% performance improvement | 99.9% reliability | 95% test
          coverage.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent-primary/50 transition-all"
          >
            View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://drive.google.com/uc?export=download&id=1BL2U5bLzy09wuk5QkJor0h1e6GsaUpPi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-accent-primary text-accent-primary font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-accent-primary/5 transition-all"
          >
            Download Resume <FiDownload />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center md:justify-start flex-wrap"
        >
          <Link
            href="https://github.com/Gautam-Dash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-muted hover:text-accent-primary transition-colors"
          >
            <span className="text-sm font-medium">GitHub</span>
          </Link>
          <span className="text-dark-border">•</span>
          <Link
            href="https://linkedin.com/in/gautam-dash-117a2520a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-muted hover:text-accent-primary transition-colors"
          >
            <span className="text-sm font-medium">LinkedIn</span>
          </Link>
          <span className="text-dark-border">•</span>
          <Link
            href="mailto:gautamdash.dev@gmail.com"
            className="text-dark-muted hover:text-accent-primary transition-colors"
          >
            <span className="text-sm font-medium">Email</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, slideInFromLeftVariants } from '@/lib/animations'

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-3">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={slideInFromLeftVariants}>
            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              With a passion for building scalable AI-powered applications and distributed systems, I bring a
              results-driven approach to every challenge. My expertise spans from intelligent backend architecture to
              cutting-edge AI/ML systems that solve real-world problems.
            </p>

            <p className="text-dark-muted text-lg leading-relaxed mb-6">
              During my Full-Time at Ernst & Young, I optimized application performance by 30% and implemented robust
              testing frameworks achieving 95% code coverage. I specialize in RAG-based systems, microservices
              architecture, and building systems that are both reliable and performant.
            </p>

            <p className="text-dark-muted text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
              sharing knowledge with the developer community. My goal is to create technology that makes a meaningful
              impact.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 h-fit"
          >
            <div className="p-6 bg-dark-surface border border-dark-border rounded-lg hover:border-accent-primary transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-accent-primary mb-2">30%</div>
              <p className="text-dark-muted text-sm">Performance Improvement</p>
            </div>

            <div className="p-6 bg-dark-surface border border-dark-border rounded-lg hover:border-accent-primary transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-accent-secondary mb-2">99.9%</div>
              <p className="text-dark-muted text-sm">System Reliability</p>
            </div>

            <div className="p-6 bg-dark-surface border border-dark-border rounded-lg hover:border-accent-primary transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-accent-primary mb-2">95%</div>
              <p className="text-dark-muted text-sm">Test Coverage</p>
            </div>

            <div className="p-6 bg-dark-surface border border-dark-border rounded-lg hover:border-accent-primary transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-accent-secondary mb-2">5K+</div>
              <p className="text-dark-muted text-sm">Code Chunks Indexed</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

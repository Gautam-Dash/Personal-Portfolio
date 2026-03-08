'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { portfolioData } from '@/data/portfolio'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-surface">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-accent-primary opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-3">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-full"
            >
              {/* Card Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Content */}
              <div className="relative p-8 bg-dark-bg border border-dark-border rounded-lg hover:border-accent-primary transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-dark-text group-hover:text-accent-primary transition-colors flex-1">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 flex-shrink-0">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-dark-muted hover:text-accent-primary hover:bg-dark-surface rounded transition-all"
                        title="View on GitHub"
                      >
                        <FiGithub size={24} />
                      </Link>
                    </div>
                  </div>

                  <p className="text-dark-muted leading-relaxed">{project.description}</p>
                </div>

                {/* Highlights */}
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-semibold text-accent-primary mb-3 uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-dark-muted text-sm">
                        <span className="text-accent-secondary mt-1.5">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent-secondary mb-3 uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <motion.span
                        key={tIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-dark-surface border border-dark-border text-dark-muted text-xs rounded-full hover:border-accent-primary hover:text-accent-primary transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-semibold"
                >
                  View on GitHub <FiExternalLink size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-dark-muted mb-4">
            Interested in seeing more of my work?
          </p>
          <Link
            href="https://github.com/Gautam-Dash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-primary text-accent-primary font-semibold rounded-lg hover:bg-accent-primary/5 transition-all"
          >
            Visit My GitHub <FiExternalLink />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

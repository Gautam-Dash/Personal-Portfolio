'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { portfolioData } from '@/data/portfolio'
import { FiAward } from 'react-icons/fi'

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-3">Certifications & Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-6 bg-dark-surface border border-dark-border rounded-lg hover:border-accent-primary hover:shadow-lg hover:shadow-accent-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="inline-flex p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg mb-4"
              >
                <FiAward className="text-white" size={24} />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-bold text-dark-text mb-2 group-hover:text-accent-primary transition-colors">
                {cert.name}
              </h3>
              <p className="text-accent-primary text-sm font-semibold mb-3">{cert.issuer}</p>
              <p className="text-dark-muted text-sm">{cert.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 border border-dark-border rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold text-dark-text mb-4">Professional Recognition</h3>
          <p className="text-dark-muted max-w-2xl mx-auto mb-6">
            Recognized for expertise in AI/ML systems, backend architecture, and software engineering practices through
            industry-leading certifications and continuous learning initiatives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-dark-muted">
              <span className="w-2 h-2 bg-accent-primary rounded-full" />
              <span>Python Expert</span>
            </div>
            <div className="flex items-center gap-2 text-dark-muted">
              <span className="w-2 h-2 bg-accent-secondary rounded-full" />
              <span>AI/Generative AI Specialist</span>
            </div>
            <div className="flex items-center gap-2 text-dark-muted">
              <span className="w-2 h-2 bg-accent-primary rounded-full" />
              <span>Software Engineer</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

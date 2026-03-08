'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { portfolioData } from '@/data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-surface">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-3">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 bg-dark-bg border border-dark-border rounded-lg hover:border-accent-primary hover:shadow-lg hover:shadow-accent-primary/20 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-lg font-semibold text-accent-primary mb-4 group-hover:text-accent-secondary transition-colors">
                {skillGroup.category}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-dark-surface border border-dark-border text-dark-muted text-sm rounded-full hover:border-accent-primary hover:text-accent-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 border border-dark-border rounded-lg"
        >
          <h3 className="text-xl font-semibold text-dark-text mb-4">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-4 text-dark-muted">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
              <span>AI/ML Systems & RAG Implementation</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-secondary rounded-full mt-2 flex-shrink-0" />
              <span>Scalable Backend Architecture</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
              <span>Distributed Systems & Cloud Infrastructure</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent-secondary rounded-full mt-2 flex-shrink-0" />
              <span>Performance Optimization & Testing</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

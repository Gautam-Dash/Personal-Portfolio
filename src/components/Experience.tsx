'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { portfolioData } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-3">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-primary to-accent-secondary opacity-30" />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative md:flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent-primary rounded-full border-4 border-dark-bg mt-2 md:mt-6" />

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2">
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                    className="group p-6 bg-dark-surface border border-dark-border rounded-lg hover:border-accent-primary transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-dark-text group-hover:text-accent-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-accent-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-dark-muted text-sm mb-4">
                      {exp.duration} • {exp.location}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-dark-muted">
                          <span className="text-accent-secondary mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="mt-16 pt-16 border-t border-dark-border">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-text mb-8">Education</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-dark-surface border border-dark-border rounded-lg hover:border-accent-secondary transition-all"
              >
                <h4 className="text-lg font-semibold text-dark-text mb-2">{edu.degree}</h4>
                <p className="text-accent-secondary font-medium mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center text-dark-muted text-sm">
                  <span>{edu.duration}</span>
                  <span className="px-3 py-1 bg-dark-bg rounded text-accent-primary font-semibold">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

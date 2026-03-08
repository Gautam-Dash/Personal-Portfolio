'use client'

import { Hero, About, Skills, Experience, Projects, Certifications, Contact } from '@/components'

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-dark-bg">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <div id="projects">
        <Projects />
      </div>
      <Certifications />
      <div id="contact">
        <Contact />
      </div>
    </main>
  )
}

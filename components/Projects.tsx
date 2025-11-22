'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects = [
    {
      title: 'QWERTY Form Filling Project',
      description: 'Developed the QWERTY Form Filling Project, leveraging speech recognition technology to automate form-filling tasks. Enabled users to fill out various forms through voice input, improving accessibility and efficiency. Integrated natural language processing to enhance accuracy and user experience.',
      tech: ['Speech Recognition', 'NLP', 'Python']
    },
    {
      title: 'Supply Carrier Drone',
      description: 'Developed a supply carrier drone capable of autonomous delivery in designated areas, utilizing GPS navigation and onboard sensors. Implemented a payload system to handle varying load capacities, ensuring efficient and reliable deliveries. Focus on real-time performance and stability under diverse environmental conditions.',
      tech: ['GPS Navigation', 'IoT', 'Embedded Systems']
    },
    {
      title: 'Solar Tracking System',
      description: 'Designed and implemented an automated solar tracking system to optimize solar panel orientation based on real-time sun positioning. Utilized light sensors and servo motors to enhance energy efficiency by maximizing solar absorption throughout the day.',
      tech: ['Arduino', 'Sensors', 'Servo Motors', 'Renewable Energy']
    }
  ]

  return (
    <section id="projects" className="min-h-screen bg-black py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Featured Projects</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Innovative solutions across IoT, AI, and renewable energy</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/10 rounded-bl-full"></div>
              <div className="relative">
                <span className="text-5xl font-bold text-indigo-500/20 absolute -top-2 -left-2">0{idx + 1}</span>
                <h3 className="text-xl font-bold text-white mb-4 mt-6 group-hover:text-indigo-400 transition relative z-10">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-lg text-xs border border-indigo-500/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      role: 'Intern - Machine Learning, IoT & SAP ABAP',
      company: 'SAP - Edunet Foundation',
      period: 'Dec 2024 – Jan 2025',
      description: 'Completed internship under SAP\'s Code Unnati Program, gaining practical knowledge in Machine Learning, IoT, Deep Learning, Computer Vision, and SAP ABAP on BTP-Web Developer Intern.'
    },
    {
      role: 'Intern - Data Science & Machine Learning',
      company: 'Brainybeam Info-Tech PVT LTD',
      period: 'May 2024 – June 2024',
      description: 'Completed internship at Brainybeam Info-Tech Pvt. Ltd. This hands-on experience allowed me to strengthen my skills, contribute to real-time projects, and grow under the guidance of industry professionals.'
    }
  ]

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-white mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative bg-gray-800 p-8 rounded-lg border-l-4 border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-indigo-400 text-lg">{exp.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

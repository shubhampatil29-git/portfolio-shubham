'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">About Me</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Passionate about technology and innovation</p>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-6 text-center"
          >
            <div className="text-3xl font-bold text-indigo-400 mb-1">7.81</div>
            <div className="text-sm text-gray-400">CGPA</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 text-center"
          >
            <div className="text-3xl font-bold text-purple-400 mb-1">2+</div>
            <div className="text-sm text-gray-400">Internships</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-lg p-6 text-center"
          >
            <div className="text-3xl font-bold text-pink-400 mb-1">3+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6 text-center"
          >
            <div className="text-3xl font-bold text-red-400 mb-1">2026</div>
            <div className="text-sm text-gray-400">Graduation</div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Electronics and Telecommunication engineering student with internship experience in 
                Machine Learning, IoT, and Data Science. Proficient in C++, Python, and cloud technologies, 
                with strong problem-solving and leadership skills.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl space-y-3">
              <h3 className="text-xl font-bold text-white mb-4">Contact Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <p className="text-gray-300 font-medium">sp615662@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Phone</p>
                  <p className="text-gray-300 font-medium">8788137668</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Location</p>
                  <p className="text-gray-300 font-medium">Pune, Maharashtra</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">DOB</p>
                  <p className="text-gray-300 font-medium">29/03/2004</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-500/30 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">🎓</span>
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-lg font-bold text-white">B.E. in Electronics And Tele-communication</h4>
                  <p className="text-indigo-300 font-medium">Trinity College Of Engineering And Research, Pune</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-gray-400">SPPU</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-indigo-400 font-semibold">CGPA: 7.81</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">2022 - 2026</span>
                  </div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-bold text-white">HSC Board</h4>
                  <p className="text-purple-300 font-medium">A.S.C. College, Chopda</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-purple-400 font-semibold">80.17%</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">2022</span>
                  </div>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="text-lg font-bold text-white">SSC Board</h4>
                  <p className="text-pink-300 font-medium">PVC, Chopda</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-pink-400 font-semibold">91.20%</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

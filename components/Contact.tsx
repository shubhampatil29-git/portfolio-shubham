'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Float, Environment, ContactShadows, Text, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Phone3D() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.4
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={meshRef}>
        {/* Phone Body */}
        <RoundedBox args={[1.5, 3, 0.2]} radius={0.15} smoothness={4}>
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
        </RoundedBox>
        {/* Screen */}
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[1.3, 2.7]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Portfolio Content on Screen */}
        {/* Header Bar */}
        <mesh position={[0, 1.2, 0.12]}>
          <planeGeometry args={[1.3, 0.3]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <Text
          position={[0, 1.2, 0.13]}
          fontSize={0.08}
          color="#00ffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          SHUBHAM PATIL
        </Text>
        
        {/* Portfolio Sections Preview */}
        {/* Hero Section */}
        <mesh position={[0, 0.7, 0.12]}>
          <planeGeometry args={[1.2, 0.6]} />
          <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={0.5} />
        </mesh>
        <Text
          position={[0, 0.75, 0.13]}
          fontSize={0.06}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          Electronics & Telecom
        </Text>
        <Text
          position={[0, 0.65, 0.13]}
          fontSize={0.05}
          color="#e0e0e0"
          anchorX="center"
          anchorY="middle"
        >
          Engineer
        </Text>
        
        {/* About Section */}
        <mesh position={[-0.3, 0, 0.12]}>
          <planeGeometry args={[0.5, 0.4]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
        <Text
          position={[-0.3, 0.05, 0.13]}
          fontSize={0.04}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          CGPA
        </Text>
        <Text
          position={[-0.3, -0.05, 0.13]}
          fontSize={0.06}
          color="#00ffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          7.81
        </Text>
        
        <mesh position={[0.3, 0, 0.12]}>
          <planeGeometry args={[0.5, 0.4]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
        <Text
          position={[0.3, 0.05, 0.13]}
          fontSize={0.04}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Projects
        </Text>
        <Text
          position={[0.3, -0.05, 0.13]}
          fontSize={0.06}
          color="#00ffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          3+
        </Text>
        
        {/* Projects Section */}
        <mesh position={[0, -0.6, 0.12]}>
          <planeGeometry args={[1.2, 0.5]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
        <Text
          position={[0, -0.5, 0.13]}
          fontSize={0.05}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          Skills
        </Text>
        <Text
          position={[0, -0.63, 0.13]}
          fontSize={0.035}
          color="#e0e0e0"
          anchorX="center"
          anchorY="middle"
        >
          Python • C++ • React
        </Text>
        <Text
          position={[0, -0.7, 0.13]}
          fontSize={0.035}
          color="#e0e0e0"
          anchorX="center"
          anchorY="middle"
        >
          IoT • Machine Learning
        </Text>
        
        {/* Contact Footer */}
        <mesh position={[0, -1.2, 0.12]}>
          <planeGeometry args={[1.3, 0.3]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <Text
          position={[0, -1.2, 0.13]}
          fontSize={0.045}
          color="#00ffff"
          anchorX="center"
          anchorY="middle"
        >
          sp615662@gmail.com
        </Text>
      </group>
    </Float>
  )
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const activities = [
    { role: 'Cultural Secretary', org: 'NEON Entc, TCOER', period: 'Sept 2023 - July 2024' },
    { role: 'Team Captain', org: 'Football, TCOER', period: 'Jan 2025' }
  ]

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center gap-3">
                  <span className="text-indigo-400 text-xl">📧</span>
                  <a href="mailto:sp615662@gmail.com" className="hover:text-indigo-400 transition">
                    sp615662@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-indigo-400 text-xl">📱</span>
                  <span>8788137668</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-indigo-400 text-xl">📍</span>
                  <span>Pune, Maharashtra</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-indigo-400 text-xl">💼</span>
                  <a 
                    href="https://www.linkedin.com/in/shubham-patil-s29032004" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 transition"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Extra-Curricular Activities</h3>
              <div className="space-y-3">
                {activities.map((activity, idx) => (
                  <div key={idx} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <p className="text-white font-semibold">{activity.role}</p>
                    <p className="text-indigo-400">{activity.org}</p>
                    <p className="text-gray-400 text-sm">{activity.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-96 bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-indigo-500/30">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <color attach="background" args={['#050505']} />
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={1.5} />
              <pointLight position={[-5, 5, 5]} color="#4f46e5" intensity={2} />
              <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} maxDistance={12} minDistance={2} />
              <Environment preset="studio" />
              <Phone3D />
              <ContactShadows opacity={0.4} scale={10} blur={2} far={4} />
            </Canvas>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">© 2025 Shubham Patil. All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  )
}

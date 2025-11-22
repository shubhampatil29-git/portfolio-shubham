'use client'

import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Environment, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedLaptop() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Laptop Base */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[2.5, 0.1, 1.8]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Laptop Screen */}
        <mesh position={[0, 0.4, -0.85]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[2.4, 1.6, 0.1]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Screen Display */}
        <mesh position={[0, 0.4, -0.8]} rotation={[-0.2, 0, 0]}>
          <planeGeometry args={[2.2, 1.4]} />
          <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={0.5} />
        </mesh>
        {/* Keyboard */}
        <mesh position={[0, -0.42, 0.3]}>
          <planeGeometry args={[2.2, 1.4]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
      </group>
    </Float>
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} color="#4f46e5" intensity={2} />
          <Environment preset="city" />
          <AnimatedLaptop />
          <Sparkles count={100} scale={10} size={2} speed={0.4} color="#4f46e5" />
          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} maxDistance={12} minDistance={3} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          Shubham Patil
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300 font-medium">
            Electronics & Telecommunication Engineer
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Specializing in Machine Learning, IoT, and Data Science | Building innovative solutions with modern technologies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-semibold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/80 hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-white/20 text-white rounded-lg hover:bg-white/10 hover:border-white/40 transition-all font-semibold backdrop-blur-sm"
          >
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-patil-s29032004"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-indigo-500/50 text-indigo-300 rounded-lg hover:bg-indigo-500/10 hover:border-indigo-500 transition-all font-semibold backdrop-blur-sm"
          >
            LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

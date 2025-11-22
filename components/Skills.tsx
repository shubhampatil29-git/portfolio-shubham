'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Environment, Text } from '@react-three/drei'
import { useRef, useMemo, Suspense } from 'react'
import * as THREE from 'three'

function CircuitBoard() {
  const groupRef = useRef<THREE.Group>(null)
  const propellerRefs = [useRef<THREE.Group>(null), useRef<THREE.Group>(null), useRef<THREE.Group>(null), useRef<THREE.Group>(null)]
  
  // Generate random positions once
  const particlePositions = useMemo(() => 
    Array.from({ length: 20 }).map(() => [
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 1.5,
      0.02
    ] as [number, number, number]),
    []
  )
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
    // Rotate propellers
    propellerRefs.forEach(ref => {
      if (ref.current) {
        ref.current.rotation.y += 0.3
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Drone Body - Central Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.15, 1.2, 32, 8, 32]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Drone Arms */}
      {[
        { pos: [0.8, 0, 0.8], rot: [0, Math.PI / 4, 0] },
        { pos: [-0.8, 0, 0.8], rot: [0, -Math.PI / 4, 0] },
        { pos: [0.8, 0, -0.8], rot: [0, -Math.PI / 4, 0] },
        { pos: [-0.8, 0, -0.8], rot: [0, Math.PI / 4, 0] }
      ].map((arm, i) => (
        <group key={i} position={arm.pos as [number, number, number]} rotation={arm.rot as [number, number, number]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.8, 32]} />
            <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      ))}
      
      {/* Motors and Propellers */}
      {[
        [1.1, 0.15, 1.1],
        [-1.1, 0.15, 1.1],
        [1.1, 0.15, -1.1],
        [-1.1, 0.15, -1.1]
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Motor */}
          <mesh>
            <cylinderGeometry args={[0.12, 0.12, 0.15, 64]} />
            <meshStandardMaterial color="#0f172a" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* Propeller */}
          <group ref={propellerRefs[i]} position={[0, 0.1, 0]}>
            <mesh rotation={[0, 0, 0]}>
              <boxGeometry args={[0.6, 0.02, 0.08, 24, 8, 8]} />
              <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]}>
              <boxGeometry args={[0.6, 0.02, 0.08, 24, 8, 8]} />
              <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
          {/* LED lights */}
          <mesh position={[0, -0.1, 0]}>
            <sphereGeometry args={[0.05, 32, 32]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1.5} />
          </mesh>
        </group>
      ))}
      
      {/* Camera/Gimbal */}
      <Float speed={3} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[0, -0.2, 0.4]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
      
      {/* Holographic Projection Screen */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <group position={[0, 1.2, 0]}>
          {/* Profile Image Display with HTML Image Texture */}
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[1.2, 1.2]} />
            <meshStandardMaterial 
              color="#1e293b"
              emissive="#4f46e5" 
              emissiveIntensity={0.3}
              transparent
              opacity={0.95}
              side={THREE.DoubleSide}
            />
          </mesh>
          {/* Name Text in Center */}
          <Text
            position={[0, 0.15, 0.01]}
            fontSize={0.22}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
            letterSpacing={0.05}
            outlineWidth={0.01}
            outlineColor="#4f46e5"
          >
            SHUBHAM
          </Text>
          <Text
            position={[0, -0.15, 0.01]}
            fontSize={0.22}
            color="#00ffff"
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
            letterSpacing={0.05}
            outlineWidth={0.01}
            outlineColor="#4f46e5"
          >
            PATIL
          </Text>
          {/* Glowing underline */}
          <mesh position={[0, -0.38, 0.01]}>
            <planeGeometry args={[0.9, 0.02]} />
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#00ffff" 
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
          {/* Glowing Border Frame */}
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[1.3, 1.3]} />
            <meshStandardMaterial 
              color="#4f46e5" 
              emissive="#4f46e5" 
              emissiveIntensity={0.8}
              transparent
              opacity={0.3}
            />
          </mesh>
          {/* Outer Glow */}
          <mesh position={[0, 0, -0.02]}>
            <planeGeometry args={[1.4, 1.4]} />
            <meshStandardMaterial 
              color="#8b5cf6" 
              emissive="#8b5cf6" 
              emissiveIntensity={0.5}
              transparent
              opacity={0.15}
            />
          </mesh>
          {/* Screen Border Lines */}
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(1.3, 1.3)]} />
            <lineBasicMaterial color="#6366f1" linewidth={3} />
          </lineSegments>
          {/* Corner Decorations */}
          {[
            [-0.65, 0.65, 0.02],
            [0.65, 0.65, 0.02],
            [-0.65, -0.65, 0.02],
            [0.65, -0.65, 0.02]
          ].map((pos, i) => (
            <mesh key={i} position={pos as [number, number, number]}>
              <boxGeometry args={[0.08, 0.08, 0.02]} />
              <meshStandardMaterial 
                color="#8b5cf6" 
                emissive="#8b5cf6" 
                emissiveIntensity={1.8}
              />
            </mesh>
          ))}
          {/* Info Bar Below */}
          <mesh position={[0, -0.8, 0.01]}>
            <planeGeometry args={[1.3, 0.12]} />
            <meshStandardMaterial 
              color="#1e293b" 
              emissive="#4f46e5" 
              emissiveIntensity={0.5}
              transparent
              opacity={0.9}
            />
          </mesh>
          {/* Hologram particles */}
          {particlePositions.map((position, i) => (
            <mesh key={i} position={position}>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshStandardMaterial 
                color="#4f46e5" 
                emissive="#4f46e5" 
                emissiveIntensity={1}
              />
            </mesh>
          ))}
        </group>
      </Float>
      
      {/* Battery Indicator */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.4, 0.08, 0.2]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['C++', 'Python', 'MySQL', 'JavaScript', 'HTML & CSS']
    },
    {
      title: 'Computer Science Fundamentals',
      icon: '🧠',
      skills: ['Data Structures & Algorithms', 'Computer Networks', 'Machine Learning', 'Operating Systems', 'Networking']
    },
    {
      title: 'Cloud Fundamentals',
      icon: '☁️',
      skills: ['Amazon Web Services (AWS)-EC2, S3', 'GitHub']
    },
    {
      title: 'Soft Skills',
      icon: '🎯',
      skills: ['Leadership', 'Problem Solving', 'Critical thinking', 'Time management', 'Good Communication']
    }
  ]

  return (
    <section id="skills" className="min-h-screen bg-gray-900 py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Technical Skills</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Expertise across multiple domains and technologies</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-300 flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="h-64 bg-gray-900 rounded-lg overflow-hidden border border-indigo-500/30">
          <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
            <color attach="background" args={['#0a0a0a']} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[0, 3, 0]} color="#4f46e5" intensity={3} />
            <pointLight position={[0, -2, 0]} color="#ec4899" intensity={2} />
            <Environment preset="night" />
            <Suspense fallback={null}>
              <CircuitBoard />
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={true} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 3} maxDistance={12} minDistance={2} />
          </Canvas>
        </div>
      </motion.div>
    </section>
  )
}

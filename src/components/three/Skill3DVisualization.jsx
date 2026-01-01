import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'

/**
 * 3D Skill Visualization Component
 * Interactive 3D representation of skills
 */

function SkillCube({ position, color, skill, index }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * (0.2 + index * 0.05)
      meshRef.current.rotation.y = state.clock.elapsedTime * (0.3 + index * 0.05)
    }
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

function Skill3DVisualization({ skills = [] }) {
  const groupRef = useRef()
  
  const positions = useMemo(() => {
    return skills.map((_, i) => {
      const angle = (i / skills.length) * Math.PI * 2
      const radius = 3
      return [
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 1.5,
        Math.sin(angle) * radius
      ]
    })
  }, [skills.length])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#06b6d4']

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <SkillCube
          key={skill}
          position={positions[index]}
          color={colors[index % colors.length]}
          skill={skill}
          index={index}
        />
      ))}
    </group>
  )
}

export default Skill3DVisualization


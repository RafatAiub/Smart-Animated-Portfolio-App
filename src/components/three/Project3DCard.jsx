import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'

/**
 * 3D Project Card Component
 * Interactive 3D card for project showcase
 */

function Project3DCard({ position, color, project, index }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * (0.1 + index * 0.02)
      if (hovered) {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.1
      }
    }
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={hovered ? 1 : 0.5}
      floatIntensity={hovered ? 1 : 0.5}
      position={position}
    >
      <mesh
        ref={meshRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2, 1.5, 0.2]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
    </Float>
  )
}

export default Project3DCard


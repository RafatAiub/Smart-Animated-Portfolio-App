import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Text3D, Float, MeshWobbleMaterial, Environment, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

/**
 * Advanced 3D Hero Scene Component
 * Features:
 * - Custom shader materials
 * - Post-processing effects
 * - Interactive 3D elements
 * - Performance optimized
 */

// Custom shader material for animated gradient sphere
const GradientShaderMaterial = {
  uniforms: {
    time: { value: 0 },
    color1: { value: new THREE.Color('#6366f1') },
    color2: { value: new THREE.Color('#8b5cf6') },
    color3: { value: new THREE.Color('#ec4899') }
  },
  vertexShader: `
    varying vec3 vPosition;
    varying vec3 vNormal;
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    void main() {
      vec3 normal = normalize(vNormal);
      float t = sin(time * 0.5) * 0.5 + 0.5;
      
      // Create gradient based on position and time
      vec3 color = mix(color1, color2, normal.y * 0.5 + 0.5);
      color = mix(color, color3, sin(vPosition.y * 2.0 + time) * 0.5 + 0.5);
      
      // Add fresnel effect
      float fresnel = pow(1.0 - dot(normal, vec3(0.0, 0.0, 1.0)), 2.0);
      color += fresnel * 0.5;
      
      gl_FragColor = vec4(color, 0.9);
    }
  `
}

function AnimatedGradientSphere() {
  const meshRef = useRef()
  const materialRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
      <shaderMaterial
        ref={materialRef}
        attach="material"
        args={[GradientShaderMaterial]}
        transparent
      />
    </Sphere>
  )
}

function FloatingTechIcons() {
  const positions = useMemo(() => {
    const pos = []
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const radius = 4 + Math.random() * 2
      pos.push([
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 3,
        Math.sin(angle) * radius
      ])
    }
    return pos
  }, [])

  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981']

  return (
    <>
      {positions.map((pos, i) => (
        <Float
          key={i}
          speed={1.5 + Math.random()}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={pos}
        >
          <Sphere args={[0.15, 16, 16]}>
            <meshStandardMaterial
              color={colors[i % 4]}
              emissive={colors[i % 4]}
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

function RotatingRing() {
  const ringRef = useRef()
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[3, 0.05, 16, 100]} />
      <meshStandardMaterial
        color="#6366f1"
        emissive="#6366f1"
        emissiveIntensity={0.3}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  )
}

function ParticleField() {
  const particles = useRef()
  const particleCount = 500
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#6366f1" transparent opacity={0.6} />
    </points>
  )
}

function AdvancedHeroScene({ theme = 'dark' }) {
  const { gl } = useThree()
  
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      {/* Environment */}
      <Environment preset="night" />
      <Stars radius={100} depth={50} count={2000} factor={4} fade speed={1} />

      {/* Main 3D Elements */}
      <AnimatedGradientSphere />
      <RotatingRing />
      <FloatingTechIcons />
      <ParticleField />

      {/* Interactive Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        enableDamping
        dampingFactor={0.05}
      />

      {/* Post-Processing Effects */}
      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.9}
          height={300}
        />
        <ChromaticAberration
          offset={[0.0005, 0.0012]}
        />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>
    </>
  )
}

export default AdvancedHeroScene


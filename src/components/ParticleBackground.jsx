import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count, theme }) {
  const mesh = useRef()
  const light = useRef()

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const x = Math.random() * 2000 - 1000
      const y = Math.random() * 2000 - 1000
      const z = Math.random() * 2000 - 1000

      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle

      const t = (particle.time += speed)

      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * factor) * 0.5),
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * 0.5),
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * 0.5)
      )

      const s = Math.cos(t)
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()

      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color={theme === 'dark' ? '#6366f1' : '#8b5cf6'} />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color={theme === 'dark' ? '#6366f1' : '#8b5cf6'} />
      </instancedMesh>
    </>
  )
}

function ParticleBackground({ theme }) {
  return (
    <div className="particle-background">
      <Canvas camera={{ position: [0, 0, 30] }}>
        <Particles count={200} theme={theme} />
      </Canvas>
    </div>
  )
}

export default ParticleBackground


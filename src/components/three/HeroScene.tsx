import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const count = 800

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.02
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#2dd4bf"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  )
}

function WireframeShape() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.08
    ref.current.rotation.y = state.clock.elapsedTime * 0.12
  })

  return (
    <mesh ref={ref} position={[3, 0.5, -2]}>
      <icosahedronGeometry args={[2.2, 1]} />
      <meshBasicMaterial color="#2dd4bf" wireframe transparent opacity={0.12} />
    </mesh>
  )
}

function WireframeTorus() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.06
    ref.current.rotation.z = state.clock.elapsedTime * 0.04
  })

  return (
    <mesh ref={ref} position={[-3.5, -0.5, -1]}>
      <torusGeometry args={[1.8, 0.5, 12, 48]} />
      <meshBasicMaterial color="#14b8a6" wireframe transparent opacity={0.1} />
    </mesh>
  )
}

export function HeroSceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <ParticleField />
      <WireframeShape />
      <WireframeTorus />
    </>
  )
}

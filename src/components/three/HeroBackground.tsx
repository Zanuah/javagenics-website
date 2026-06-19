import { Suspense, useSyncExternalStore } from 'react'
import { Canvas } from '@react-three/fiber'
import { HeroSceneContent } from './HeroScene'

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getServerSnapshot() {
  return false
}

export function HeroBackground() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerSnapshot,
  )

  if (prefersReducedMotion) {
    return (
      <div
        className="gradient-fallback absolute inset-0 -z-10"
        aria-hidden="true"
      />
    )
  }

  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <div className="gradient-fallback absolute inset-0" />
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Suspense fallback={null}>
          <HeroSceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}

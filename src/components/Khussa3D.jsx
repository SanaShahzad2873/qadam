import { Suspense, useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles, Environment, useGLTF, ContactShadows } from '@react-three/drei'
import { Vector2, Box3, Vector3 } from 'three'
import ModelErrorBoundary from './ModelErrorBoundary'

// Drop your real file at public/models/khussa.glb — it will be picked up automatically.
const MODEL_PATH = '/models/khussa.glb'

function GLTFKhussa() {
  const { scene } = useGLTF(MODEL_PATH)
  const ref = useRef()

  // Auto-center and normalize scale so any model (regardless of its native
  // units) fills the same amount of the viewport.
  const centered = useMemo(() => {
    const clone = scene.clone(true)
    const box = new Box3().setFromObject(clone)
    const size = new Vector3()
    box.getSize(size)
    const center = new Vector3()
    box.getCenter(center)
    clone.position.set(-center.x, -box.min.y, -center.z)
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const scale = 1.6 / maxDim
    return { clone, scale }
  }, [scene])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15
  })

  return (
    <group ref={ref} position={[0, -0.6, 0]} scale={centered.scale}>
      <primitive object={centered.clone} />
    </group>
  )
}

function PlaceholderKhussa() {
  // Stylised silhouette used until the real model is uploaded.
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2
  })

  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 20; i++) {
      const t = i / 20
      const x = Math.sin(t * Math.PI) * (0.55 - t * 0.15) + 0.15
      const y = t * 1.5 - 0.75
      pts.push(new Vector2(x, y))
    }
    return pts
  }, [])

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <latheGeometry args={[points, 32]} />
        <meshStandardMaterial color="#c8a35d" metalness={0.6} roughness={0.35} />
      </mesh>
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 1.4 - 0.7
        return (
          <mesh key={i} position={[Math.cos(angle) * 0.5, Math.sin(angle) * 0.15, 0.35]}>
            <sphereGeometry args={[0.025, 12, 12]} />
            <meshStandardMaterial color="#f8f4ed" emissive="#e8c98a" emissiveIntensity={0.4} />
          </mesh>
        )
      })}
    </group>
  )
}

export default function Khussa3D({ height = '70vh' }) {
  return (
    <div style={{ height }} className="relative w-full">
      <Canvas camera={{ position: [2.2, 1.2, 2.6], fov: 40 }} dpr={[1, 1.8]}>
        <color attach="background" args={['#0b0b0b']} />
        <ambientLight intensity={0.4} />
        <spotLight position={[3, 5, 3]} angle={0.3} penumbra={0.6} intensity={1.2} color="#e8c98a" castShadow />
        <spotLight position={[-3, 2, -2]} angle={0.4} penumbra={0.8} intensity={0.4} color="#c8a35d" />

        <Suspense fallback={null}>
          <ModelErrorBoundary fallback={<PlaceholderKhussa />}>
            <GLTFKhussa />
          </ModelErrorBoundary>
          <Environment preset="apartment" />
        </Suspense>

        <Sparkles count={60} scale={[4, 3, 4]} size={2} speed={0.25} color="#e8c98a" opacity={0.5} />
        <ContactShadows position={[0, -0.9, 0]} opacity={0.5} scale={6} blur={2.5} far={2} />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={1.8}
          maxDistance={4}
          autoRotate
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  )
}

try {
  useGLTF.preload?.(MODEL_PATH)
} catch {
  // model not present yet — placeholder will be used
}

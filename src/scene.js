import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'
import Avatar from '../src/avatar'

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 35] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Avatar />
      </Suspense>
    </Canvas>
  )
}

export default Scene

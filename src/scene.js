import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'
import Avatar from '../src/avatar'

import styled from 'styled-components'

const Cnvs = styled('div')`
  position: absolute;
  width: 100vw;
  height: 100vh;
`

const Scene = () => {
  return (
    <Cnvs>
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Avatar />
        </Suspense>
      </Canvas>
    </Cnvs>
  )
}

export default Scene

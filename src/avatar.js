import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Avatar = () => {
  const gltf = useLoader(GLTFLoader, '/glb/lowpolydudetest3.glb')
  const group = useRef()
  const [mixer] = useState(() => new THREE.AnimationMixer())

  useEffect(
    () => void mixer.clipAction(gltf.animations[3], group.current).play(),
    [gltf.animations, mixer]
  )

  useFrame((state, delta) => {
    mixer.update(delta)
  })

  return (
    <primitive ref={group} object={gltf.scene} dispose={null} />
  )
}

export default Avatar

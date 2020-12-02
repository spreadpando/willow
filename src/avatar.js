import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader, useUpdate } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Avatar = () => {
  const gltf = useLoader(GLTFLoader, '/glb/lowpolydudetest3.glb')

  const [animation, setAnimation] = useState(0)

  const [mixer] = useState(() => new THREE.AnimationMixer())

  const group = useUpdate(
    () => void mixer.clipAction(gltf.animations[animation], group.current).play(),
    [animation, gltf.animations, mixer])

  const handleKeyPress = (e) => {
    const { key, keyCode } = e
    console.log(keyCode)
    switch (keyCode) {
      case (87):
        return setAnimation(1)
      case (83):
        return setAnimation(2)
      case (68):
        return setAnimation(3)
      case (65):
        return setAnimation(4)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  useEffect(
    () => void mixer.clipAction(gltf.animations[animation], group.current).play(),
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

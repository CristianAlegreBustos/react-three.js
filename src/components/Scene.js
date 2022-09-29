import { useFrame,Canvas,useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {useRef,useState} from 'react'
import { XR, ARButton} from '@react-three/xr'
import Tarjeta from '../models/Tarjeta'

//import Scene from './Scene'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Scene=({Onclick})=>{
    return(
      <>
      <ARButton onClick={()=>Onclick()}/>
      <Canvas id="Canvas" >
        <XR
        referenceSpace="local">
        <ambientLight />
         <pointLight position={[10, 10, 10]} />
          {/* <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />   */}
          <Tarjeta onSelect={console.log("HOLA")} position={[0,0,-1]} />
          </XR>
      </Canvas>
      </>
    )
}

export default Scene


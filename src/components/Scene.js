import { useFrame,Canvas,useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {useRef,useState} from 'react'
import { XR, ARButton, Interactive} from '@react-three/xr'
import Tarjeta from '../models/Tarjeta'



const Scene=({Onclick})=>{
    return(
      <>
      <ARButton onClick={()=>Onclick()}/>
      <Canvas id="Canvas" >
        <XR
        referenceSpace="local">
        <ambientLight />
         <pointLight position={[10, 10, 10]} />
          <Interactive onSelect={()=>console.log("HOLA")}>
          <Tarjeta  position={[0,0,-1.5]}  />
          </Interactive>
         
          </XR>
      </Canvas>
      </>
    )
}

export default Scene


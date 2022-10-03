import React, {useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

export default function Tarjeta(props) {
    const obj = useLoader(OBJLoader, 'https://cristianalegrebustos.github.io/react-three.js/src/assets/CajaSorpresa.obj')

  const tarjeta= useRef()

  useFrame((state)=>{
    const t = state.clock.getElapsedTime()
    tarjeta.current.rotation.y =  (1 + Math.sin(t)) / 3
}
  ) 

  return (
   <primitive object={obj} ref={tarjeta}/>
  );
}

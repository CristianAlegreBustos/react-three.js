import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

export default function Tarjeta(props) {
  const { nodes, materials } = useGLTF(
    "https://cristianalegrebustos.github.io/WebAr/webxlWorkshop/assets/tarjeta3d.glb"
  );

  const tarjeta= useRef()

  useFrame((state)=>{
    const t = state.clock.getElapsedTime()
    tarjeta.current.rotation.y =  (1 + Math.sin(t)) / 3
}

  )

  return (
    <group  {...props} dispose={null} ref={tarjeta} >
      {/* <group position={[0, 0, 0.28]} scale={[0.33, 0.51, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id5.geometry}
          material={materials["33"]}
        />
      </group> */}
      <group position={[0, 0, 0.25]} scale={[0.31, 0.49, 0.24]}>
        <mesh
          onClick={()=>console.log("HOLA")}
          castShadow
          receiveShadow
          geometry={nodes.node_id8.geometry}
          material={materials["32"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://cristianalegrebustos.github.io/WebAr/webxlWorkshop/assets/tarjeta3d.glb"
);

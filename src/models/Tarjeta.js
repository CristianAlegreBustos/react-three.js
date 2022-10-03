import React, {useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Tarjeta(props) {
const { nodes, materials } = useGLTF("src/assets/caja.gltf");

  const tarjeta= useRef()

  useFrame((state)=>{
    const t = state.clock.getElapsedTime()
    tarjeta.current.rotation.y =  (1 + Math.sin(t)) / 3
}
  ) 

  return (
    <group {...props} dispose={null} ref={tarjeta}>
    <group position={[63.97, -52.53, -79.97]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Caja_sorpresa_1.geometry}
        material={materials.diffuse_White}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Caja_sorpresa_2.geometry}
        material={materials.diffuse_0}
      />
    </group>
  </group>
  );
}

useGLTF.preload("src/assets/caja.gltf");
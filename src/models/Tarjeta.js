import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Tarjeta(props) {
  const { nodes, materials } = useGLTF(
    "https://cristianalegrebustos.github.io/WebAr/webxlWorkshop/assets/tarjeta3d.glb"
  );
  let i=0;
// This reference will give us direct access to the card
const tarjeta = useRef();
// Subscribe this component to the render-loop, rotate the mesh every frame
useFrame((state, delta) => {
  
    console.log(tarjeta.current.rotation.z);
    console.log(i)

    
   tarjeta.current.rotation.y = Math.sin(Date.now() * 0.001) * Math.PI * 0.2;

})
  return (
    <group  onSelect={console.log("HOLA3")} {...props} dispose={null} ref={tarjeta} >
      {/* <group position={[0, 0, 0.28]} scale={[0.33, 0.51, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id5.geometry}
          material={materials["33"]}
        />
      </group> */}
      <group  onSelect={console.log("HOLA2")} position={[0, 0, 0.25]} scale={[0.31, 0.49, 0.24]}>
        <mesh
          onSelect={console.log("HOLA")}
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

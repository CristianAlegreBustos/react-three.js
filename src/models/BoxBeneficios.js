/* eslint-disable no-undef */
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"

function BoxBeneficios(props) {
  const cubo =useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)



  useFrame(({clock})=>{
    const a = clock.getElapsedTime();
    cubo.current.scale.z = 0.2 + 0.019 * Math.sin(a * 3);
    cubo.current.scale.x = 0.2 + 0.019 * Math.sin(a * 3);
    cubo.current.scale.y = 0.2 + 0.019 * Math.sin(a * 3);
}
)


// Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={cubo}
        scale={0.1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : '#7600bc'} />
      </mesh>
    )
  }



export default BoxBeneficios;
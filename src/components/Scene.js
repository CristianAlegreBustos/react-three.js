import { Canvas} from '@react-three/fiber'
import { XR, ARButton, Interactive} from '@react-three/xr'
import Tarjeta from '../models/Tarjeta.js'
import BoxBeneficios from '../models/BoxBeneficios.js'


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
          <BoxBeneficios position={[-0.35,0.2,-1.5]} />
          <BoxBeneficios position={[0.5,0.2,-1.5]}  />
          <BoxBeneficios position={[0.5,-0.2,-1.5]}  />
          <BoxBeneficios position={[-0.35,-0.2,-1.5]}  /> 
          </XR>
      </Canvas>
      </>
    )
}

export default Scene


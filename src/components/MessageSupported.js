//import css from 'src/Root.scss'
import {useState} from 'react'
import Scene from './Scene'


const MessageSupported=()=>{
  const [display,setDisplay]=useState(true);
    return(
      <>
       {display && 
       <div id="enter-ar" >
        <h2>Bienvenido a esta Experiencia de Realidad Aumentada</h2>
        <div >
          <p>Autoriza el uso de la camara</p>
          <p>Descargate la app sobre servicios de google para AR</p>
          <p>Dale click al boton y DISFRUTA !</p>
        </div>
      </div>}
       
      <Scene Onclick={setDisplay}/>

      </>
    )
}

export default MessageSupported
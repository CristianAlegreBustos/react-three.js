// import * as THREE from 'three'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// let camera, scene, renderer
// let controller

// export const init = () => {
//   const container = document.createElement('div')
//   document.body.appendChild(container)
//   //crear scene
//   scene = new THREE.Scene()
//   //crear camara
//   camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.25,
//     1000
//   )

//   //camera.position.set(-5, 0, 0)
//   const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
//   light.position.set(0, 0, 0)
//   scene.add(light)

//   //Agregar el renderer
//   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
//   renderer.setPixelRatio(window.devicePixelRatio)
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   renderer.xr.enabled = true
//   container.appendChild(renderer.domElement)

//   //Agregar Boton para RA
//   let button = ARButton.createButton(renderer)
//   button.className = 'ar_button'
//   button.style.color = 'white'
//   button.style.backgroundColor = 'red'
//   button.style.fontWeight = '600'
//   button.addEventListener("onClick",()=>init())

//   //agregar camera helper
//   let camaraHelper = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     3,
//     10
//   )
//   let helper = new THREE.CameraHelper(camaraHelper)

//   scene.add(helper)

//   camera.lookAt(camaraHelper.position)

//   //Cargar Material
//   const loader = new GLTFLoader()
//   let model

//   loader.load(
//     'https://cristianalegrebustos.github.io/WebAr/webxlWorkshop/assets/tarjeta3d.glb',
//     gltf => {
//       debugger
//       model = gltf.scene
//       model.scale.x = 1.2
//       model.scale.y = 1.2
//       model.position.z = -2
//       scene.add(model)

//       let step=0; 
//       const ani = function () {
//         model.rotation.z += 1
//         model.rotation.z -= 1

//         step+=0.04;
//         requestAnimationFrame(ani)

//         renderer.setAnimationLoop(render)
//       }
//       ani()
//     }
//   )
//   controller = renderer.xr.getController(0)
//   scene.add(controller)

//   //
//   window.addEventListener('resize', onWindowResize)
// }

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight
//   camera.updateProjectionMatrix()

//   renderer.setSize(window.innerWidth, window.innerHeight)
// }

// function render() {
//   renderer.render(scene, camera)
// }

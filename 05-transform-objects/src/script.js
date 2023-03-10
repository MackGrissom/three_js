import './style.css'
import * as THREE from 'three'
import { MeshToonMaterial, Vector3 } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1,),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1,),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1,),
    new THREE.MeshBasicMaterial({ color: 0xff00ff })
)
group.add(cube1, cube2, cube3)
cube1.position.set(0,0,0)
cube2.position.set(-2,0,0)
cube3.position.set(2,0,0)
group.position.set(1,1,0)
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

// // position
// mesh.position.set(0.7, -0.6, 1)
// // scale
// mesh.scale.set(2, 0.5, 0.5)
// // rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25


// mesh.rotation.set(0,0.5,0)


const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)
/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 1
camera.position.x = 1
scene.add(camera)
// camera.lookAt(mesh.position)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
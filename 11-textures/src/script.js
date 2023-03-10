import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { AlphaFormat, ArrowHelper } from 'three'

const loadingManager = new THREE.LoadingManager()
// loadingManager.onStart = () =>
//  {
//     console.log('onStart')
//  }
// loadingManager.onLoad = () =>
//  {
//     console.log('onLoad')
//  }
// loadingManager.onProgress = () =>
//  {
//     console.log('onProgress')
//  }
// loadingManager.onError = () =>
//  {
//     console.log('onError')
//  }

const textureLoader = new THREE.TextureLoader(loadingManager) 
const colortexture = textureLoader.load('textures/door/color.jpg')
const alphatexture = textureLoader.load('textures/door/alpha.jpg')
const heighttexture = textureLoader.load('textures/door/height.jpg')
const ambientOcculsiontexture = textureLoader.load('textures/door/ambientOcullusion.jpg')
const normaltexture = textureLoader.load('textures/door/normal.jpg')
const metalnesstexture = textureLoader.load('textures/door/metalness.jpg')
const roughnesstexture = textureLoader.load('textures/door/roughness.jpg')

// colortexture.repeat.x = 2
// colortexture.repeat.y = 3
// colortexture.wrapS = THREE.RepeatWrapping
// colortexture.wrapT = THREE.RepeatWrapping
// colortexture.offset.x = 0.5
// colortexture.rotation = 1

// colortexture.rotation = Math.PI /4
// colortexture.center.x = 0.5
// colortexture.center.y = 0.5







// const image = new Image()
// const texture = new THREE.Texture(image)
// image.addEventListener('load', () =>
// {
//     texture.needsUpdate = true
// })
// image.src = '/textures/door/color.jpg'
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
console.log(geometry.attributes.uv)
const material = new THREE.MeshBasicMaterial({ map: colortexture })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 1
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
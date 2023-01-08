const canvas = document.querySelector('canvas.webgl')

// sizes
const sizes = {
    width: 800,
    height: 600
}
// scene - the set of the movie set. 
const scene = new THREE.Scene()

// OBJECT 
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color:'#ff0000'})
const cubeMesh = new THREE.Mesh(cubeGeometry,cubeMaterial)
scene.add(cubeMesh)



// camera
const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene,camera)
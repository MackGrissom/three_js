import './style.css'
import ReactDOM from 'react-dom/client'
import {Canvas} from '@react-three/fiber'
import { MeshNormalMaterial } from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
      <Canvas> 

        <mesh>
            <torusKnotGeometry />
            <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
)
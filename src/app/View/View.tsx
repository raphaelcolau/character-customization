import { OrbitControls, Stats, useGLTF } from '@react-three/drei';
import {  Canvas } from '@react-three/fiber';
import {  Camera, Euler, Vector3 } from 'three';

function GLTFModel({ url, position, rotation }: { url: string, position?: number[], rotation?: number[] }) {
    const { scene } = useGLTF(url, true);
    return <primitive position={position} rotation={rotation} object={scene} />;
}

function Scene() {
    const Steve = {name: 'Steve', url: 'assets/models/steve.glb'};
    let cam: Camera | undefined;

    return (
        <div style={{width: '100%', height: '100%'}}>
            <Canvas 
                camera={{
                    fov: 35,
                    near: 0.1,
                    far: 100,
                    position: new Vector3(1.3, 1, 1.5),
                    rotation: new Euler(0, 0, 0),
                }}
                onCreated={({ camera }) => {
                    cam = camera;
                }}
            >
                <OrbitControls 
                    enableZoom={false}
                    enableDamping={true}
                    enablePan={false}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                    target={new Vector3(0, 1, 0)}
                    camera={cam as Camera}
                    onStart={() => console.log(cam?.rotation)}
                />
                <Stats />

                <ambientLight />
                <pointLight position={[10, 10, 10]} />

                <GLTFModel position={[0, 0.85, 0]} url={Steve.url} />

            </Canvas>
        </div>
    )
}

export default function View() {
    return (
        <div
            style={{
                width: '50%',
                height: '100vh',
                boxSizing: 'border-box',
            }}
        >
            <Scene />
        </div>
    )
}
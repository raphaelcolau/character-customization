import { OrbitControls, Stats, useGLTF } from '@react-three/drei';
import {  Canvas } from '@react-three/fiber';
import {  Camera, Euler, SkinnedMesh, Vector3 } from 'three';
import { useState, useEffect } from 'react';
import { RootState } from '../../store/store';
import { Character } from '../../type/type';
import { useSelector } from 'react-redux';
import { generateTexture } from './GenerateTexture';
import * as THREE from 'three';

function GLTFModel({ url, position, rotation, character }: { url: string, position?: number[], rotation?: number[], character: Character }) {
    const { scene } = useGLTF(url, true);
    const [texture, setTexture] = useState<THREE.Texture>();

    useEffect(() => {
        const generateTextureAsync = async () => {
            const generatedTexture = await generateTexture(character);
            setTexture(generatedTexture);
        };

        generateTextureAsync();
    }, [character]);

    useEffect(() => {
        if (texture) {
            texture.name = 'customTexture';
            texture.minFilter = texture.magFilter = 1003;
            texture.flipY = false;
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.needsUpdate = true;

            scene.traverse((o) => {
                if (o instanceof SkinnedMesh) {
                    const material = o.material.clone();
                    material.map = texture;
                    material.skinning = true;
                    o.material = material;
                }
            });
        }
    }, [texture, scene]);

    return <primitive
        position={position}
        rotation={rotation}
        object={scene}
    />;
}

function Scene() {
    const Steve = {name: 'Steve', url: 'assets/models/steve.glb'};
    let cam: Camera | undefined;
    const currentCharacter = useSelector((state: RootState) => state.character);
    const [customCharacter, setCustomerCharacter] = useState<Character>(currentCharacter);

    useEffect(() => {
        setCustomerCharacter(currentCharacter);
    }, [currentCharacter]);

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
                gl={{
                    antialias: true,
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
                />
                <Stats />

                <ambientLight />
                <pointLight position={[10, 10, 10]} />

                <GLTFModel 
                    position={[0, 0.85, 0]}
                    url={Steve.url}
                    character={customCharacter}
                />

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
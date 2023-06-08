import { extend } from '@react-three/fiber';
import { Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';

extend({ UnrealBloomPass });

const CanvasEffect = () => {
    return (
        <>
            <directionalLight
                castShadow
                position={[0, 10, 0]}
                intensity={0.03}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-100}
                shadow-camera-right={100}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
            />
            <Effects>
                <unrealBloomPass threshold={0.77} strength={0.51} radius={0.77} />
            </Effects>
        </>
    );
};

export default CanvasEffect;

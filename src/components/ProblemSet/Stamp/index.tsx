import { Canvas } from '@react-three/fiber';
import { Color } from 'three';
import StampSuccess from 'assets/3D-Model-Stamp/StampSuccess';
import StampFailed from 'assets/3D-Model-Stamp/StampFailed';
import * as Styled from './style';

interface StampProps {
    isAnswer: boolean;
    isAction: boolean;
    actionAnimations: (isAction: boolean) => void;
    animationTimeCheck: (time: boolean) => void;
}

const Stamp = ({ isAnswer, actionAnimations, animationTimeCheck, isAction }: StampProps) => {
    return (
        <Styled.StampWrapper aria-hidden="true">
            <Styled.Stamp>
                <Canvas>
                    <directionalLight color={new Color(0xffffff)} intensity={2} position={[-1, 1, 1]} />
                    {isAnswer ? (
                        <StampSuccess
                            actionAnimations={actionAnimations}
                            animationTimeCheck={animationTimeCheck}
                            isAction={isAction}
                        />
                    ) : (
                        <StampFailed
                            actionAnimations={actionAnimations}
                            animationTimeCheck={animationTimeCheck}
                            isAction={isAction}
                        />
                    )}
                </Canvas>
            </Styled.Stamp>
        </Styled.StampWrapper>
    );
};

export default Stamp;

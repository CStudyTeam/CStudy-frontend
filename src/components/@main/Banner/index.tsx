import { useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { Model } from 'assets/3D-Model/Earth-ver2';
import CanvasEffect from '../CanvasEffect';
import StyleLink from 'components/@shared/StyleLink';

import * as Styled from './style';

interface BannerProps {
    hasViewModel: boolean;
}

const Banner = ({ hasViewModel }: BannerProps) => {
    const [isModelLoaded, setIsModelLoaded] = useState(false);

    const handleModelLoad = () => {
        setIsModelLoaded(true);
    };

    return (
        <>
            {isModelLoaded && (
                <Styled.BannerContent>
                    <Styled.BannerTitle>
                        CS;tudy에
                        <br />
                        오신 것을 환영합니다.
                        <br />
                        <span>CS 지식이 편해지는 그날 까지 함께! 재밌게!! 해결해요</span>
                    </Styled.BannerTitle>
                    <StyleLink to="/problemset" className="xl2 navy style">
                        문제 풀러 가기
                    </StyleLink>
                </Styled.BannerContent>
            )}
            <Canvas
                camera={{
                    zoom: 2,
                    position: [4, 1, 7],
                }}
            >
                <CanvasEffect />
                <Model onLoad={handleModelLoad} hasViewModel={hasViewModel} />
            </Canvas>
        </>
    );
};

export default Banner;

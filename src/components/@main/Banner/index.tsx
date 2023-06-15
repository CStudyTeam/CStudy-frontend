import React from 'react';
import * as Styled from './style';
import { Canvas } from '@react-three/fiber';
import { Model } from 'assets/3D-Model/Earth-ver2';
import { Link } from 'react-router-dom';
import Button from 'components/@shared/Button';
import { COLOR } from 'constants/Color';
import CanvasEffect from '../CanvasEffect';
import { FONT } from 'constants/Font';

const Banner = () => {
    return (
        <>
            <Styled.BannerContent>
                <Styled.BannerTitle>
                    CS;tudy에
                    <br />
                    오신 것을 환영합니다.
                    <br />
                    <span>CS 지식이 편해지는 그날 까지 함께! 재밌게!! 해결해요</span>
                </Styled.BannerTitle>
                <Link to="/problemset">
                    <Button main backgroundColor={COLOR.NAVY_200} color={COLOR.WHITE} fontSize={FONT.REGULAR_20}>
                        문제 풀러 가기
                    </Button>
                </Link>
            </Styled.BannerContent>
            <Canvas
                camera={{
                    zoom: 2,
                    position: [4, 1, 7],
                }}
            >
                <CanvasEffect />
                <Model />
            </Canvas>
        </>
    );
};

export default Banner;

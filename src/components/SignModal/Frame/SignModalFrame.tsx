import React from 'react';
import * as Styled from './style';
import GoogleLogoImage from 'assets/Google_Logo.png';

interface Props {
    children: JSX.Element;
}

const SignModalFrame = ({ children }: Props) => {
    return (
        <Styled.Container>
            <Styled.XButton>X</Styled.XButton>
            <Styled.Title>CSTUDY에 오신 것을 환영합니다!</Styled.Title>
            {children}
            <Styled.Hr>소셜 로그인</Styled.Hr>
            <Styled.SocialLogin>
                <Styled.GoogleLogo src={GoogleLogoImage} alt="구글로 로그인" />
            </Styled.SocialLogin>
        </Styled.Container>
    );
};

export default SignModalFrame;

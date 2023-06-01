import React from 'react';
import * as Styled from './style';
import SignModalFrame from '../Frame/SignModalFrame';

const SigninModal = () => {
    return (
        <SignModalFrame>
            <>
                <Styled.Input type="text" placeholder="이메일" />
                <Styled.Input type="text" placeholder="비밀번호" />
                <Styled.Button type="submit">로그인</Styled.Button>
            </>
        </SignModalFrame>
    );
};

export default SigninModal;

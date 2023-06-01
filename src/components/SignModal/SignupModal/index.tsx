import React from 'react';
import * as Styled from './style';
import SignModalFrame from '../Frame/SignModalFrame';

const SignupModal = () => {
    return (
        <SignModalFrame>
            <>
                <Styled.Input type="text" placeholder="이름" />
                <Styled.Input type="text" placeholder="이메일" />
                <Styled.Input type="text" placeholder="비밀번호" />
                <Styled.Button type="submit">회원가입</Styled.Button>
            </>
        </SignModalFrame>
    );
};

export default SignupModal;

import React from 'react';
import * as Styled from './style';
import Container from '../Container';
import Logo from 'assets/Logo.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Styled.Wrapper>
                <Styled.LogoWrap>
                    <Styled.LogoImg src={Logo} alt="CStudy 로고" />
                </Styled.LogoWrap>
                <Styled.Nav>
                    <Link to="board">게시판</Link>
                    <Link to="problemset">문제풀이</Link>
                    <Link to="contest">대회</Link>
                    <Link to="workbook">문제집</Link>
                </Styled.Nav>
                <Styled.Sign>
                    <Button>로그인</Button>
                    <Button>회원가입</Button>
                </Styled.Sign>
            </Styled.Wrapper>
        </Container>
    );
};

export default Header;

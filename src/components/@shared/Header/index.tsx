import React from 'react';
import * as Styled from './style';
import Logo from 'assets/Logo.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Styled.Wrapper>
            <Styled.LogoWrap>
                <Link to="/">
                    <img src={Logo} alt="CStudy 로고" />
                </Link>
            </Styled.LogoWrap>
            <Styled.Nav>
                <Styled.NavList>
                    <Styled.NavItem>
                        <Link to="board">게시판</Link>
                    </Styled.NavItem>
                    <Styled.NavItem>
                        <Link to="problemset">문제풀이</Link>
                    </Styled.NavItem>
                    <Styled.NavItem>
                        <Link to="contest">대회</Link>
                    </Styled.NavItem>
                    <Styled.NavItem>
                        <Link to="workbook">문제집</Link>
                    </Styled.NavItem>
                </Styled.NavList>
            </Styled.Nav>
            <Styled.Sign>
                <Button>로그인</Button>
                <Button>회원가입</Button>
            </Styled.Sign>
        </Styled.Wrapper>
    );
};

export default Header;

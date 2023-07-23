import { memo } from 'react';
import { Link } from 'react-router-dom';

import { useSignOut } from 'hooks/@query/useSignOut';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import useRegisterModal from 'hooks/@zustand/useRegisterModal';
import { isLogin } from 'utils/auth';
import { resetAllFilters } from 'utils/resetAllFilter';

import Button from '../Button';
import { StyleNavLink } from '../NavLinkStyles';

import Logo_Webp from 'assets/Logo.webp';
import Logo_Png from 'assets/Logo.png';

import * as Styled from './style';

const Header = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const { mutate: signOut } = useSignOut();

    const handleNavigationClick = () => {
        resetAllFilters();
    };

    const handleLinkClick = (event: React.MouseEvent, path: string) => {
        if (window.location.pathname === path) {
            event.preventDefault();
        }
        handleNavigationClick();
    };

    return (
        <>
            <Styled.Wrapper>
                <Styled.LogoWrap>
                    <Link to="/" onClick={(event) => handleLinkClick(event, '/')}>
                        <picture>
                            <source srcSet={Logo_Webp} type="image/webp" />
                            <source srcSet={Logo_Png} type="image/png" />
                            <img src={Logo_Png} alt="CStudy 로고" />
                        </picture>
                    </Link>
                </Styled.LogoWrap>
                <Styled.Nav>
                    <Styled.NavList>
                        <Styled.NavItem>
                            <StyleNavLink to="/board" onClick={(event) => handleLinkClick(event, '/board')}>
                                게시판
                            </StyleNavLink>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <StyleNavLink to="/problemset" onClick={(event) => handleLinkClick(event, '/problemset')}>
                                문제풀이
                            </StyleNavLink>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <StyleNavLink to="/contest" onClick={(event) => handleLinkClick(event, '/contest')}>
                                대회
                            </StyleNavLink>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <StyleNavLink to="/workbook" onClick={(event) => handleLinkClick(event, '/workbook')}>
                                문제집
                            </StyleNavLink>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <StyleNavLink
                                to="/membersranks"
                                onClick={(event) => handleLinkClick(event, '/membersranks')}
                            >
                                전체랭킹
                            </StyleNavLink>
                        </Styled.NavItem>
                    </Styled.NavList>
                </Styled.Nav>
                <Styled.Sign>
                    {isLogin() ? (
                        <>
                            <Button onClick={() => signOut()}>로그아웃</Button>
                            <StyleNavLink
                                to="mypage"
                                className="mypage"
                                onClick={(event) => handleLinkClick(event, 'mypage')}
                            >
                                마이페이지
                            </StyleNavLink>
                        </>
                    ) : (
                        <>
                            <Button onClick={loginModal.onOpen}>로그인</Button>
                            <Button onClick={registerModal.onOpen}>회원가입</Button>
                        </>
                    )}
                </Styled.Sign>
            </Styled.Wrapper>
        </>
    );
};

export default memo(Header);

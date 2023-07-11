import * as Styled from './style';
import Logo from 'assets/Logo.png';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { isLogin } from 'utils/auth';
import { useSignOut } from 'hooks/@query/useSignOut';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import useRegisterModal from 'hooks/@zustand/useRegisterModal';
import StyleLink from '../StyleLink';
import { StyleNavLink } from '../NavLinkStyles';

const Header = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const { mutate: signOut } = useSignOut();

    return (
        <>
            <Styled.Wrapper>
                <Styled.LogoWrap>
                    <Link to="/">
                        <img src={Logo} alt="CStudy 로고" />
                    </Link>
                </Styled.LogoWrap>
                <Styled.Nav>
                    <Styled.NavList>
                        <Styled.NavItem>
                            <StyleNavLink to="board">게시판</StyleNavLink>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <StyleNavLink to="problemset">문제풀이</StyleNavLink>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <StyleNavLink to="contest">대회</StyleNavLink>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <StyleNavLink to="workbook">문제집</StyleNavLink>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <StyleNavLink to="membersranks">전체랭킹</StyleNavLink>
                        </Styled.NavItem>
                    </Styled.NavList>
                </Styled.Nav>
                <Styled.Sign>
                    {isLogin() ? (
                        <>
                            <Button onClick={() => signOut()}>로그아웃</Button>
                            <StyleLink to="mypage" className="fs--sm">
                                마이페이지
                            </StyleLink>
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

export default Header;

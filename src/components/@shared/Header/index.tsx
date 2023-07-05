import * as Styled from './style';
import Logo from 'assets/Logo.png';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { isAdmin, isLogin } from 'utils/auth';
import { useSignOut } from 'hooks/@query/useSignOut';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import useRegisterModal from 'hooks/@zustand/useRegisterModal';

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
                    {isLogin() ? (
                        <>
                            <Button onClick={() => signOut()}>로그아웃</Button>
                            <Button>
                                <Link to="mypage">마이페이지</Link>
                            </Button>
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

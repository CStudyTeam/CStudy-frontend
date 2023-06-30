import * as Styled from './style';
import Logo from 'assets/Logo.png';
import { Link } from 'react-router-dom';
import { isLogin } from 'utils/auth';
import { useSignOut } from 'hooks/@query/useSignOut';
import Button from 'components/@shared/Button';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import useRegisterModal from 'hooks/@zustand/useRegisterModal';

const AdminHeader = () => {
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
                            <Link to="CreateProblem">문제생성</Link>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <Link to="CreateContest">대회생성</Link>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <Link to="CreateWorkbook">문제집생성</Link>
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

export default AdminHeader;

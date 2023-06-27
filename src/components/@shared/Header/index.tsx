import * as Styled from './style';
import Logo from 'assets/Logo.png';
import Button from '../Button';
import { Link } from 'react-router-dom';
import useModal from 'hooks/@shared/useModal';
import SignInModal from 'components/SignModal/SignInModal';
import SignUpModal from 'components/SignModal/SignUpModal';
import Modal from '../modal';
import { isLogin } from 'utils/auth';
import { useSignOut } from 'hooks/@query/useSignOut';

const Header = () => {
    const {
        openModalHandler: openSignInModal,
        closeModalHandler: closeSignInModal,
        isOpenModal: isOpenSignInModal,
    } = useModal();
    const {
        openModalHandler: openSignUpModal,
        closeModalHandler: closeSignUpModal,
        isOpenModal: isOpenSignUpModal,
    } = useModal();

    const { mutate: signOut } = useSignOut();

    return (
<<<<<<< HEAD
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
                            <Button onClick={openSignInModal}>로그인</Button>
                            <Button onClick={openSignUpModal}>회원가입</Button>
                        </>
                    )}
                </Styled.Sign>
            </Styled.Wrapper>
            {isOpenSignInModal && (
                <Modal isOpenModal={isOpenSignInModal} closeModalHandler={closeSignInModal}>
                    <SignInModal closeSignInModal={closeSignInModal} />
                </Modal>
            )}
            {isOpenSignUpModal && (
                <Modal isOpenModal={isOpenSignUpModal} closeModalHandler={closeSignUpModal}>
                    <SignUpModal closeSignUpModal={closeSignUpModal} />
                </Modal>
            )}
        </>
=======
        <Styled.Wrapper>
            <Styled.LogoWrap>
                <Link to="/">
                    <Styled.LogoImg src={Logo} alt="CStudy 로고" />
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
                        <Styled.ContestCategory>
                            <li>
                                <Link to="open">참가가능한 대회</Link>
                            </li>
                            <li>
                                <Link to="end">종료된 대회</Link>
                            </li>
                        </Styled.ContestCategory>
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
>>>>>>> 0d9e784976b2e1ec669d2cced42723ac1331d281
    );
};

export default Header;

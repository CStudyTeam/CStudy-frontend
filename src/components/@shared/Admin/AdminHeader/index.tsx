import * as Styled from './style';
import Logo from 'assets/Logo.png';
import { Link } from 'react-router-dom';
import useModal from 'hooks/@shared/useModal';
import SignInModal from 'components/SignModal/SignInModal';
import SignUpModal from 'components/SignModal/SignUpModal';
import { isLogin } from 'utils/auth';
import { useSignOut } from 'hooks/@query/useSignOut';
import Button from 'components/@shared/Button';
import Modal from 'components/@shared/modal';

const AdminHeader = () => {
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
    );
};

export default AdminHeader;

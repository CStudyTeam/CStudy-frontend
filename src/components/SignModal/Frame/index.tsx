import * as Styled from './style';
import GoogleLogoImage from 'assets/Google_Logo.png';
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose';

interface Props {
    children: JSX.Element;
    closeModalHandler: VoidFunction;
}

const SignModalFrame = ({ children, closeModalHandler }: Props) => {
    return (
        <Styled.Container>
            <Styled.XButton onClick={closeModalHandler}>
                <IoMdClose size={30} />
            </Styled.XButton>
            <Styled.Title>CSTUDY에 오신 것을 환영합니다!</Styled.Title>
            {children}
            <Styled.Line>
                <Styled.Hr></Styled.Hr>
                <Styled.TextSocialLogin>소셜 로그인</Styled.TextSocialLogin>
                <Styled.Hr></Styled.Hr>
            </Styled.Line>
            <Styled.SocialLogin>
                <a href="http://localhost:8080/oauth2/authorization/google" rel="noopener noreferrer">
                    <Styled.GoogleLogo src={GoogleLogoImage} alt="구글로 로그인" />
                </a>
            </Styled.SocialLogin>
        </Styled.Container>
    );
};

export default SignModalFrame;

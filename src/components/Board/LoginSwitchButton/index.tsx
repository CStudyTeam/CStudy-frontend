import Button from 'components/@shared/Button';
import StyleLink from 'components/@shared/StyleLink';
import { isLogin } from 'utils/auth';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import { Filter } from 'components/@shared/FilterStyles';

interface LoginSwitchButtonProps {
    handleToggle: () => void;
    isActive: string;
}

const LoginSwitchButton = ({ isActive, handleToggle }: LoginSwitchButtonProps) => {
    const loginModal = useLoginModal();
    return (
        <>
            {isLogin() ? (
                <>
                    <div>
                        <Filter className={isActive} onClick={handleToggle}>
                            내가 낸 문제
                        </Filter>
                    </div>
                    <StyleLink to="request" className="xl navy style">
                        게시글 작성하기
                    </StyleLink>
                </>
            ) : (
                <Button className="xl navy style" onClick={loginModal.onOpen}>
                    게시글 작성하기
                </Button>
            )}
        </>
    );
};

export default LoginSwitchButton;

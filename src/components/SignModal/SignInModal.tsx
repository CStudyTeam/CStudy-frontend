import { useForm } from 'react-hook-form';
import { useSignIn } from 'hooks/@query/useSignIn';
import useRegisterModal from 'hooks/@zustand/useRegisterModal';
import { SignInForm } from 'types/Form';
import SignModalFrame from './Frame';
import Button from 'components/@shared/Button';
import * as Styled from './style';

const SignInModal = ({ closeSignInModal }: { closeSignInModal: VoidFunction }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<SignInForm>();
    const { onOpen: registerModalOpen } = useRegisterModal();

    const { mutate: SignIn } = useSignIn(closeSignInModal);

    const submitForm = (FormData: SignInForm) => {
        SignIn({ ...FormData });
    };

    const changeModalHandler = () => {
        closeSignInModal();
        registerModalOpen();
    };

    return (
        <SignModalFrame closeModalHandler={closeSignInModal}>
            <>
                <Styled.Form onSubmit={handleSubmit(submitForm)}>
                    <Styled.Input
                        type="email"
                        placeholder="이메일"
                        {...register('email', {
                            required: '이메일을 입력해주세요.',
                            pattern: {
                                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                                message: '올바른 이메일을 입력해주세요.',
                            },
                            onChange: (e) => {
                                setValue('email', e.target.value, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                    shouldTouch: true,
                                });
                            },
                        })}
                    />
                    <Styled.ErrorMessage>{errors.email?.message}</Styled.ErrorMessage>
                    <Styled.Input
                        type="password"
                        placeholder="비밀번호"
                        {...register('password', {
                            required: '비밀번호를 입력해주세요.',
                            pattern: {
                                value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/,
                                message: '문자, 숫자, 기호를 포함한 8~20자를 입력해주세요.',
                            },
                            onChange: (e) => {
                                setValue('password', e.target.value, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                    shouldTouch: true,
                                });
                            },
                        })}
                    />
                    <Styled.ErrorMessage>{errors.password?.message}</Styled.ErrorMessage>
                    <Styled.Button type="submit">로그인</Styled.Button>
                </Styled.Form>
                <Styled.Suggestion>
                    <Styled.TextSuggestionLabel>아직 가입하지 않으셨나요?</Styled.TextSuggestionLabel>
                    <Button className="bold" onClick={changeModalHandler}>
                        회원가입
                    </Button>
                </Styled.Suggestion>
            </>
        </SignModalFrame>
    );
};

export default SignInModal;

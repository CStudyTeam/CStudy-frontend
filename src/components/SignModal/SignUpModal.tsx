import { useForm } from 'react-hook-form';
import { useSignUp } from 'hooks/@query/useSignUp';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import { SignUpForm } from 'types/Form';
import SignModalFrame from './Frame';
import Button from 'components/@shared/Button';
import * as Styled from './style';

const SignUpModal = ({ closeSignUpModal }: { closeSignUpModal: VoidFunction }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<SignUpForm>();

    const { onOpen: loginModalOpen } = useLoginModal();

    const { mutate: signUp } = useSignUp(closeSignUpModal);

    const submitForm = (formValues: SignUpForm) => {
        signUp({ ...formValues });
    };

    const changeModalHandler = () => {
        closeSignUpModal();
        loginModalOpen();
    };

    return (
        <SignModalFrame closeModalHandler={closeSignUpModal}>
            <>
                <Styled.Form onSubmit={handleSubmit(submitForm)}>
                    <Styled.Input
                        type="text"
                        placeholder="이름"
                        {...register('name', {
                            required: '이름을 입력해주세요.',
                            onChange: (e) =>
                                setValue('name', e.target.value, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                    shouldTouch: true,
                                }),
                        })}
                    />

                    <Styled.ErrorMessage>{errors.name?.message}</Styled.ErrorMessage>
                    <Styled.Input
                        type="email"
                        placeholder="이메일"
                        {...register('email', {
                            required: '이메일을 입력해주세요.',
                            pattern: {
                                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                                message: '올바른 이메일 형식을 입력해주세요.',
                            },
                            onChange: (e) =>
                                setValue('email', e.target.value, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                    shouldTouch: true,
                                }),
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
                            onChange: (e) =>
                                setValue('password', e.target.value, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                    shouldTouch: true,
                                }),
                        })}
                    />
                    <Styled.ErrorMessage>{errors.password?.message}</Styled.ErrorMessage>
                    <Styled.Button type="submit">회원가입</Styled.Button>
                </Styled.Form>
                <Styled.Suggestion>
                    <Styled.TextSuggestionLabel>회원이신가요?</Styled.TextSuggestionLabel>
                    <Button className="bold" onClick={changeModalHandler}>
                        로그인
                    </Button>
                </Styled.Suggestion>
            </>
        </SignModalFrame>
    );
};

export default SignUpModal;

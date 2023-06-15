import * as Styled from './style';
import SignModalFrame from './Frame';
import { useForm } from 'react-hook-form';
import { SignInForm } from 'types/Form';
import { useSignIn } from 'hooks/@query/useSignIn';

const SignInModal = ({ closeSignInModal }: { closeSignInModal: VoidFunction }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInForm>();

    const { mutate: SignIn } = useSignIn(closeSignInModal);

    const submitForm = (FormData: SignInForm) => {
        SignIn({ ...FormData });
    };

    return (
        <SignModalFrame closeModalHandler={closeSignInModal}>
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
                    })}
                />
                <Styled.ErrorMessage>{errors.password?.message}</Styled.ErrorMessage>
                <Styled.Button type="submit">로그인</Styled.Button>
            </Styled.Form>
        </SignModalFrame>
    );
};

export default SignInModal;

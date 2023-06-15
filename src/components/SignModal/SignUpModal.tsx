import * as Styled from './style';
import SignModalFrame from './Frame';
import { useForm } from 'react-hook-form';
import { SignUpForm } from 'types/Form';
import { useSignUp } from 'hooks/@query/useSignUp';

const SignUpModal = ({ closeSignUpModal }: { closeSignUpModal: VoidFunction }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpForm>();

    const { mutate: signUp } = useSignUp(closeSignUpModal);

    const submitForm = (formValues: SignUpForm) => {
        signUp({ ...formValues });
    };

    return (
        <SignModalFrame closeModalHandler={closeSignUpModal}>
            <Styled.Form onSubmit={handleSubmit(submitForm)}>
                <Styled.Input
                    type="text"
                    placeholder="이름"
                    {...register('name', {
                        required: '이름을 입력해주세요.',
                    })}
                />

                <Styled.ErrorMessage></Styled.ErrorMessage>
                <Styled.Input
                    type="email"
                    placeholder="이메일"
                    {...register('email', {
                        required: '이메일을 입력해주세요.',
                        pattern: {
                            value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                            message: '올바른 이메일 형식을 입력해주세요.',
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
                <Styled.Button type="submit">회원가입</Styled.Button>
            </Styled.Form>
        </SignModalFrame>
    );
};

export default SignUpModal;

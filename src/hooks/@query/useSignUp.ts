import { useMutation } from '@tanstack/react-query';
import { signUp } from 'api/auth';

export const useSignUp = () => {
    return useMutation(signUp, {
        onSuccess: () => {
            alert('회원가입 되었습니다.');
        },
        onError: () => {
            alert('회원가입에 실패했습니다.');
        },
    });
};

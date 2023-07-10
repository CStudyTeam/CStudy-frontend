import { useMutation } from '@tanstack/react-query';
import { signUp } from 'api/auth';
import toast from 'provider/Toast';

export const useSignUp = (closeSignUpModal: VoidFunction) => {
    return useMutation(signUp, {
        onSuccess: () => {
            toast.success('회원가입 되었습니다.');
            closeSignUpModal();
        },
        onError: () => {
            toast.error('회원가입에 실패했습니다.');
        },
    });
};

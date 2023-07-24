import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn } from 'api/auth';
import { userStorage } from 'utils/userStorage';
import toast from 'provider/Toast';

export const useSignIn = (closeSignInModal: VoidFunction) => {
    const queryClient = useQueryClient();

    return useMutation(signIn, {
        onSuccess: (response) => {
            queryClient.invalidateQueries();
            userStorage.set({
                accessToken: response.accessToken,
                refreshToken: response.refreshToken,
            });
            toast.success('로그인 되었습니다.');
            closeSignInModal();
        },
        onError: () => {
            toast.error('로그인에 실패했습니다.');
        },
    });
};

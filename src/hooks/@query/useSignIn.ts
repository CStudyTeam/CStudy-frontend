import { useMutation } from '@tanstack/react-query';
import { signIn } from 'api/auth';
import { userStorage } from 'utils/userStorage';

export const useSignIn = (closeSignInModal: VoidFunction) => {
    return useMutation(signIn, {
        onSuccess: (response) => {
            userStorage.set({
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
            });
            alert('로그인 되었습니다.');
            closeSignInModal();
        },
        onError: () => {
            alert('로그인에 실패했습니다.');
        },
    });
};

import { useMutation } from '@tanstack/react-query';
import { signOut } from 'api/auth';
import { userStorage } from 'utils/userStorage';

export const useSignOut = () => {
    return useMutation(signOut, {
        onSuccess: () => {
            userStorage.remove();
            window.location.replace('/');
            alert('로그아웃 되었습니다.');
        },
        onError: () => {
            alert('로그아웃에 실패했습니다.');
        },
    });
};

import { useMutation } from '@tanstack/react-query';
import { signOut } from 'api/auth';
import { userStorage } from 'utils/userStorage';
import toast from 'provider/Toast';
import { useNavigate } from 'react-router';

export const useSignOut = () => {
    const navigate = useNavigate();
    return useMutation(signOut, {
        onSuccess: () => {
            userStorage.remove();
            navigate('/', { replace: true });
            toast.success('로그아웃 되었습니다.');
        },
        onError: () => {
            toast.error('로그아웃에 실패했습니다.');
        },
    });
};

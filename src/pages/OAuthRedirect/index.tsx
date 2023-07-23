import toast from 'provider/Toast';
import { useEffect } from 'react';
import { userStorage } from 'utils/userStorage';

const OAuthRedirect = () => {
    useEffect(() => {
        const parsedUrl = new URL(window.location.href);
        const accessToken = parsedUrl.searchParams.get('accessToken');
        const refreshToken = parsedUrl.searchParams.get('refreshToken');

        if (!accessToken || !refreshToken) return toast.error('로그인에 실패했습니다.');

        userStorage.set({
            accessToken,
            refreshToken,
        });

        window.location.replace(`${process.env.REACT_APP_API_URL}`);
    }, []);

    return <div>Login...</div>;
};

export default OAuthRedirect;

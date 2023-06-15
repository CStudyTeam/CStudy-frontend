import { useEffect } from 'react';
import { userStorage } from 'utils/userStorage';

const OAuthRedirect = () => {
    useEffect(() => {
        const parsedUrl = new URL(window.location.href);
        const accessToken = parsedUrl.searchParams.get('accessToken');
        const refreshToken = parsedUrl.searchParams.get('refreshToken');

        if (!accessToken || !refreshToken) return alert('로그인 실패: 토큰 없음');

        userStorage.set({
            accessToken,
            refreshToken,
        });

        window.location.replace('http://localhost:3000');
    }, []);

    return <div>Login...</div>;
};

export default OAuthRedirect;

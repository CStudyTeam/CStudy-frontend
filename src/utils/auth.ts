import jwtDecode from 'jwt-decode';
import { userStorage } from './userStorage';
import { jwtDecodeProps } from 'types/utils';

export const getUserTokens = () => {
    const userTokens = userStorage.get();
    if (!userTokens) return null;

    const { accessToken, refreshToken } = userTokens;
    return { accessToken, refreshToken };
};

export const isLogin = () => {
    const user = userStorage.get();
    if (!user) return false;

    const { accessToken } = user;
    return !!accessToken;
};

export const isAdmin = () => {
    const userToken = userStorage.get();
    if (!userToken) {
        return false;
    }
    const { roles }: jwtDecodeProps = jwtDecode(userToken.accessToken);

    if (roles[0] === 'ROLE_ADMIN') return true;
    return false;
};

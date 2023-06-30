import axios from 'axios';
import { getUserTokens } from 'utils/auth';
import { userStorage } from 'utils/userStorage';
import { retryToken } from './auth';

export const instance = axios.create({
    baseURL: 'http://localhost:8080',
});

instance.interceptors.request.use(
    (config) => {
        const tokens = getUserTokens();
        if (tokens) {
            config.headers.Authorization = `Bearer ${tokens.accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const { config, response } = error;

        if (response.data.code == 401) {
            const originalRequest = config;
            const tokens = getUserTokens();

            if (!tokens) throw new Error('저장된 토큰이 없습니다.');

            const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await retryToken(
                tokens.refreshToken,
            );

            const newUser = {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            };

            userStorage.set(newUser);

            axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
        }

        if (error.response.data.code == 403) {
            throw new Error('접근 권한이 없습니다.');
        }

        throw error.response.data.code;
    },
);

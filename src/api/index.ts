import axios from 'axios';
import { LoginResponse } from 'types/api';
import { getUserTokens } from 'utils/auth';
import { userStorage } from 'utils/userStorage';

export const instance = axios.create({
    baseURL: 'http://localhost:8080',
});

instance.interceptors.request.use(
    (config) => {
        const tokens = getUserTokens();
        config.headers.accessToken = `Bearer ${tokens?.accessToken}`;
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
        const { config } = error;
        if (error.status === 401) {
            const originalRequest = config;
            const tokens = getUserTokens();
            if (!tokens) throw new Error('저장된 토큰이 없습니다.');
            const { refreshToken } = tokens;

            try {
                const { data } = await instance.post<LoginResponse>('/api/refreshToken', {
                    refreshToken: refreshToken,
                });
                const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;

                const user = userStorage.get();
                if (!user) throw new Error('유저를 찾을 수 없습니다.');
                const newUser = {
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken,
                };
                userStorage.set(newUser);

                axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axios(originalRequest);
            } catch (e) {
                // 로그아웃
            }
        }
        throw new Error(error);
    },
);

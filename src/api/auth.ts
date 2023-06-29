import { instance } from 'api';
import { SignInForm, SignUpForm } from 'types/Form';
import { LoginResponse } from 'types/api';
import { userStorage } from 'utils/userStorage';

// 회원가입
export const signUp = async (formData: SignUpForm) => {
    const response = await instance.post('/api/signup', formData);
    return response.data;
};

// 로그인
export const signIn = async (formData: SignInForm) => {
    const response = await instance.post<LoginResponse>('/api/login', formData);
    return response.data;
};

// 로그아웃
export const signOut = async () => {
    const user = userStorage.get();
    const response = await instance.delete('/api/logout', {
        data: {
            refreshToken: user?.refreshToken,
        },
    });
    return response.data;
};

// 비밀번호 수정
export const modifyPassword = async (formData: any) => {
    const response = await instance.post('/api/refreshToken', formData);
    return response.data;
};

// 재발급
export const retryToken = async () => {
    const user = userStorage.get();
    const response = await instance.post('/api/refreshToken', {
        refreshToken: user?.refreshToken,
    });
    return response.data;
};

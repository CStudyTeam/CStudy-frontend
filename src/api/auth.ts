import { instance } from 'api';
import { SignInForm, SignUpForm } from 'types/Form';
import { LoginResponse } from 'types/api';
import { userStorage } from 'utils/userStorage';

export const signUp = async (formData: SignUpForm) => {
    const response = await instance.post('/api/signup', formData);
    return response;
};

export const signIn = async (formData: SignInForm) => {
    const response = await instance.post<LoginResponse>('/api/login', formData);
    return response;
};

export const signOut = async () => {
    const user = userStorage.get();
    const response = await instance.delete('/api/logout', {
        data: {
            refreshToken: user?.refreshToken,
        },
    });
    return response;
};

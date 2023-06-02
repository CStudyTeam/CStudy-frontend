import { instance } from 'api';
import { SignInForm, SignUpForm } from 'types/Form';
import { LoginResponse } from 'types/api';

export const signUp = async (formData: SignUpForm) => {
    const response = await instance.post('/api/signup', formData);
    return response;
};

export const signIn = async (formData: SignInForm) => {
    const response = await instance.post<LoginResponse>('/api/login', formData);
    return response;
};

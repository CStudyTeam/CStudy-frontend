import { instance } from 'api';

export const problemSet = async (formData: any) => {
    const response = await instance.post('/api/question', formData);
    return response;
};

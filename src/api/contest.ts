import { instance } from 'api';

export const contestSet = async (formData: any) => {
    const response = await instance.post('/api/competition', formData);
    return response;
};

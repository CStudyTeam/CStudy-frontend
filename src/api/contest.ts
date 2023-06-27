import { instance } from 'api';
import { ContestSetForm } from 'types/Form';

export const contestSet = async (formData: ContestSetForm) => {
    const response = await instance.post('/api/competition', formData);
    return response;
};

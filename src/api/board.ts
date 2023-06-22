import { instance } from 'api';
import { RequestDetail, RequestForm } from 'types/board';

export const createRequest = (RequestForm: RequestForm) => {
    const response = instance.post('/api/request/create', { ...RequestForm });
    return response;
};

export const getAllRequest = async () => {
    const reponse = await instance.get('/api/request/list');
    return reponse.data;
};

export const getRequest = async (id: string | undefined) => {
    const response = await instance.get<RequestDetail>(`/api/request/${id}`);
    return response.data;
};

import { instance } from 'api';

export const problemSet = async (formData: any) => {
    if (formData.length === 1) {
        const response = await instance.post('/api/question', formData[0]);
        return response;
    }

    if (formData.length > 1) {
        const response = await instance.post('/api/questions', formData);
        return response;
    }

    throw new Error('문제 생성에 실패했습니다.');
};

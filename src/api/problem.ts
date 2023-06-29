import { instance } from 'api';
import { QuestionDataProps } from 'types/problemForm';

export const problemSet = async (formData: QuestionDataProps[]) => {
    if (formData.length === 1) {
        const response = await instance.post('/api/question', formData[0]);
        return response.data;
    }

    if (formData.length > 1) {
        const response = await instance.post('/api/questions', formData);
        return response.data;
    }

    throw new Error('문제 생성에 실패했습니다.');
};

export const getProblem = async ({ categoryTitle = '', questionSuccess = -1, page = 0, size = 10 }) => {
    const response = await instance.get(
        `/api/questions?categoryTitle=${categoryTitle}&questionSuccess=${questionSuccess}&page=${page}&size=${size}`,
    );

    return response.data;
};

import { instance } from 'api';
import { QuestionDataProps, selectAnswerProblemFromProps } from 'types/problem';

/* -------- Get 요청 -------- */

//  전체 문제 페이징 / 내가 푼 문제 조회
export const getProblem = async ({ categoryTitle = '', questionSuccess = -1, page = 0, size = 10, query = '' }) => {
    const response = await instance.get(
        `/api/questions${query}?${
            query === ''
                ? `categoryTitle=${categoryTitle}&questionSuccess=${questionSuccess}&page=${page}&size=${size}`
                : `page=${page}&size=${size}`
        }`,
    );

    return response.data;
};

//  단일 문제 찾기
export const getOneProblem = async (problemId: string) => {
    const response = await instance.get(`/api/question/${problemId}`);
    return response.data;
};

/* -------- POST 요청 -------- */

// 문제 생성하기 & 대량 문제 생성하기
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

// 단일 문제 정답 선택하기
export const selectAnswerProblem = async ({ problemId, formData }: selectAnswerProblemFromProps) => {
    const response = await instance.post(`/api/question/${problemId}`, formData);
    return response;
};

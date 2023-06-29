import { instance } from 'api';
import { WorkbookSetForm } from 'types/Form';
import { Workbook } from 'types/workbookList';

/* -------- Get 요청 -------- */

// 문제집리스트
export const getWorkbookList = async ({ page = 0, size = 8 }) => {
    const response = await instance.get<Workbook>(`/api/workbook/list?page=${page}&size=${size}`);
    return response.data;
};

// 문제집 정보 요청
export const getWorkbook = async ({ id }: any) => {
    const response = await instance.get(`/api/workbook/${id}`);
    return response.data;
};

// 문제집 문제 요청
export const getWorkbookQuestion = async ({ id, page = 0, size = 10 }: any) => {
    const response = await instance.get(`/api/workbook/question/${id}?page=${page}&size=${size}`);
    return response.data;
};

/* -------- POST 요청 -------- */

// 문제집 생성
export const workbookSet = async (formData: WorkbookSetForm) => {
    const response = await instance.post('/api/workbook/create', formData);
    return response;
};

// 문제집 정보 수정
export const updateWorkbook = async ({ formData }: any) => {
    const response = await instance.post(`/api/workbook/update`, formData);
    return response;
};

// 문제집 정보 추가
export const addWorkbookQuestion = async () => {
    const response = await instance.post(`/api/workbook/question/add`);
    return response;
};

/* -------- DELETE 요청 -------- */

// 문제집 정보 삭제
export const workbookQuestionDelete = async () => {
    const response = await instance.delete(`/api/workbook/question/delete`);
    return response;
};

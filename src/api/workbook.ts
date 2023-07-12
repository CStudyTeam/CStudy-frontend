import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { WorkbookSetForm } from 'types/Form';
import { Workbook, WorkbookList, WorkbookQuestion } from 'types/api';

/* -------- Get 요청 -------- */

// 문제집리스트
export const getWorkbookList = async ({ page = 0, size = 8, title = '', description = '' }): Promise<WorkbookList> => {
    const response = await instance.get(
        `/api/workbook/list?page=${page}&size=${size}&title=${title}&description=${description}`,
    );
    return response.data;
};

// 문제집 정보 요청
export const getWorkbook = async (id: string): Promise<Workbook> => {
    const response = await instance.get(`/api/workbook/${id}`);
    return response.data;
};

// 문제집 문제 요청
export const getWorkbookQuestion = async (workbookPageId = '', page = 0, size = 10) => {
    const response = await instance.get<WorkbookQuestion>(
        `/api/workbook/question/${workbookPageId}?page=${page}&size=${size}`,
    );
    return response.data;
};

/* -------- POST 요청 -------- */

// 문제집 생성
export const workbookSet = async (formData: WorkbookSetForm) => {
    const response = await instance.post('/api/workbook/create', formData);
    return response;
};

// 문제집 정보 수정
export const updateWorkbook = async (formData: FieldValues) => {
    const response = await instance.post(`/api/workbook/update`, formData);
    return response;
};

// 문제집 문제 추가
export const addWorkbookQuestion = async (formData: FieldValues) => {
    const response = await instance.post(`/api/workbook/question/add`, formData);
    return response;
};

/* -------- DELETE 요청 -------- */

// 문제집 정보 삭제
export const workbookQuestionDelete = async (formData: FieldValues) => {
    const response = await instance.post(`/api/workbook/question/delete`, formData);
    return response;
};

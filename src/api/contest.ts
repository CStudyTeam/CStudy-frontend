import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { ContestSetForm } from 'types/Form';
import { Contest, ContestList, ContestMyRanking, ContestProblem, ContestRanking, ContestResult } from 'types/api';

/* -------- Get 요청 -------- */

// 대회 정보
export const getContest = async (competitionId: string): Promise<Contest> => {
    const response = await instance.get(`/api/competition/${competitionId}`);
    return response.data;
};

// 대회 문제 조회
export const getContestProblem = async (competitionId: string): Promise<ContestProblem[]> => {
    const response = await instance.get(`/api/competition/question/${competitionId}`);
    return response.data;
};

// 참여 가능 대회 리스트 + 종료된 대회 리스트
export const getContestList = async ({ page = 0, size = 10, query = '' }): Promise<ContestList> => {
    const response = await instance.get(`/api/competition/list${query}?page=${page}&size=${size}`);
    return response.data;
};

// 대회 랭킹
export const getContestRanking = async ({ contestId = '', page = 0, size = 10 }): Promise<ContestRanking> => {
    const response = await instance.get(`/api/competition/ranking/${contestId}?page=${page}&size=${size}`);
    return response.data;
};

// 대회 나의 랭킹
export const getContestMyRanking = async (memberId: number): Promise<ContestMyRanking> => {
    const response = await instance.get(`/api/competition/myranking/${memberId}`);
    return response.data;
};

// 대회 점수 조회
export const getContestResult = async (competitionId: string): Promise<ContestResult> => {
    const response = await instance.get(`/api/competition/result/${competitionId}`);
    return response.data;
};

/* -------- POST 요청 -------- */

// 대회 생성하기
export const contestSet = async (formData: ContestSetForm) => {
    const response = await instance.post('/api/competition', formData);
    return response;
};

// 대회 참여하기
export const joinContest = (competitionId: number | string) => {
    const response = instance.post(`/api/competition/join/${competitionId}`);
    return response;
};

// 대회 답안 제출
export const submitContest = (ContestAnswerForm: FieldValues) => {
    const response = instance.post('/api/competition/submit', ContestAnswerForm);
    return response;
};

// 대회 문제 추가
export const addContestProblem = (AddContestProblemForm: FieldValues) => {
    const response = instance.post('/api/competition/question/add', AddContestProblemForm);
    return response;
};

// 대회 문제 삭제
export const deleteContestProblem = (DeleteContestProblemForm: FieldValues) => {
    const response = instance.post('/api/competition/question/delete', DeleteContestProblemForm);
    return response;
};

// ### Competition(대회)

// - [ ]  **GET 대회 정보**

// http://localhost:8080/api/competition/:competitionId

// - [ ]  **POST 대회 답안 제출**

// http://localhost:8080/api/competition/submit

// - [ ]  **GET 대회 랭킹**

// http://localhost:8080/api/competition/ranking/:id?page=<integer>&size=<integer>

// - [ ]  **GET 종료된 대회 리스트**

// http://localhost:8080/api/competition/list/finish?page=<integer>&size=<integer>

// - [ ]  **GET 참여 가능 대회 리스트**

// http://localhost:8080/api/competition/list?page=<integer>&size=<integer>

// - [ ]  **POST 대회 참여하기**

// http://localhost:8080/api/competition/join/:competitionId

// - [ ]  **GET 대회 문제 조회**

// http://localhost:8080/api/competition/question/:competitionId

// - [ ]  **GET 대회 점수 조회**

// http://localhost:8080/api/competition/result/:competitionId

// - [ ]  **POST 대회 생성하기**

// http://localhost:8080/api/competition

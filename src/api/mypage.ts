import { instance } from 'api';
import { FieldValues } from 'react-hook-form';
import { MyImageProps, MyPage } from 'types/api';

/* -------- Get 요청 -------- */

// 마이페이지
export const getMyPage = async (): Promise<MyPage> => {
    const response = await instance.get(`/api/mypage`);
    return response.data;
};

// S3 이미지 불러오기 (백엔드 협의 후 나중에 구현하기로 결정)
export const getMyImage = async ({ memberId, roles }: MyImageProps) => {
    const response = await instance.get(`/api/image?memberId=${memberId}&roles=${roles}`);
    return response.data;
};

/* -------- POST 요청 -------- */

// 비밀번호 수정
export const updatePassword = async (formData: FieldValues) => {
    const response = await instance.post('/api/mypage/password', formData);
    return response;
};

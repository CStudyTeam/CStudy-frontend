import { instance } from 'api';
import { MyImageProps, MyPage } from 'types/api';

export const getMyPage = async (): Promise<MyPage> => {
    const response = await instance.get(`/api/mypage`);
    return response.data;
};

export const getMyImage = async ({ memberId, roles }: MyImageProps) => {
    const response = await instance.get(`/api/image?memberId=${memberId}&roles=${roles}`);
    return response.data;
};

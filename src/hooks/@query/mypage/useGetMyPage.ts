import { useQuery } from '@tanstack/react-query';
import { getMyPage } from 'api/mypage';

export const useGetMyPage = () => {
    const { data: myPage } = useQuery(['getMyPage'], getMyPage);

    return myPage;
};

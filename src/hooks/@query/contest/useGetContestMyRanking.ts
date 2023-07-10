import { useQuery } from '@tanstack/react-query';
import { getContestMyRanking } from './../../../api/contest';
import { isLogin } from 'utils/auth';

const useGetContestMyRanking = (memberId: number) => {
    const { data: contestMyRanking } = useQuery(['contestRanking', { memberId }], () => getContestMyRanking(memberId), {
        enabled: isLogin(),
    });
    return contestMyRanking;
};

export default useGetContestMyRanking;

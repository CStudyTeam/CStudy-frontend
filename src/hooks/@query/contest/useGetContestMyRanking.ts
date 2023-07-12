import { useQuery } from '@tanstack/react-query';
import { getContestMyRanking } from './../../../api/contest';
import { isLogin } from 'utils/auth';

const useGetContestMyRanking = (contestId: string) => {
    const { data: contestMyRanking } = useQuery(
        ['contestRanking', { contestId }],
        () => getContestMyRanking(contestId),
        {
            enabled: isLogin(),
        },
    );
    return contestMyRanking;
};

export default useGetContestMyRanking;

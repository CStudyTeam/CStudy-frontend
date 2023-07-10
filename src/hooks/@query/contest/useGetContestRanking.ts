import { useQuery } from '@tanstack/react-query';
import { getContestRanking } from 'api/contest';

export interface GetContestRankingProps {
    page: number;
    contestId: string;
}

const useGetContestRanking = ({ contestId, page }: GetContestRankingProps) => {
    const { data: contestRanking } = useQuery(['contestRanking', { contestId, page }], () =>
        getContestRanking({ contestId, page }),
    );
    return contestRanking;
};

export default useGetContestRanking;

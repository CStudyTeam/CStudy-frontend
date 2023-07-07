import { useQuery } from '@tanstack/react-query';
import { getContestRanking } from 'api/contest';
import { ContestRanking } from 'types/api';

export interface GetContestRankingProps {
    page: number;
    contestId: string;
}

const useGetContestRanking = ({ contestId, page }: GetContestRankingProps) => {
    const { data: contestRanking } = useQuery<ContestRanking>(['contestRanking', { contestId, page }], () =>
        getContestRanking({ contestId, page }),
    );
    return contestRanking;
};

export default useGetContestRanking;

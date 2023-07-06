import { useQuery } from '@tanstack/react-query';
import { getContestProblem } from 'api/contest';
import { ContestProblem } from 'types/api';

const useGetContestProblem = (contestId: string) => {
    const { data: contestProblem } = useQuery<ContestProblem[]>(['contestProblem', { contestId }], () =>
        getContestProblem(contestId),
    );
    return contestProblem;
};

export default useGetContestProblem;

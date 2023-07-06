import { useQuery } from '@tanstack/react-query';
import { getContestResult } from 'api/contest';
import { ContestResult } from 'types/api';

const useGetContestResult = (contestId: string) => {
    const { data: contestResult } = useQuery<ContestResult>(['contestResult', { contestId }], () =>
        getContestResult(contestId),
    );
    return contestResult;
};

export default useGetContestResult;

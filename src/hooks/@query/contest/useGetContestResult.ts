import { useQuery } from '@tanstack/react-query';
import { getContestResult } from 'api/contest';
import { ContestResult } from 'types/api';

const useGetContestResult = (contestId: string, hasParticipatedInContest: boolean | undefined = undefined) => {
    const { data: contestResult } = useQuery<ContestResult>(
        ['contestResult', { contestId }],
        () => getContestResult(contestId),
        { enabled: (hasParticipatedInContest as boolean) || false },
    );
    return contestResult;
};

export default useGetContestResult;

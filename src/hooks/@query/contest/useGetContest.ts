import { useQuery } from '@tanstack/react-query';
import { getContest } from 'api/contest';
import { Contest } from 'types/api';

const useGetContest = (contestId: string) => {
    const { data: contest } = useQuery<Contest>(['contest', { contestId }], () => getContest(contestId));
    return contest;
};

export default useGetContest;

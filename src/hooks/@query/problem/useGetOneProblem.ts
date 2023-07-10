import { useQuery } from '@tanstack/react-query';
import { getOneProblem } from 'api/problem';

export const useGetOneProblem = (problemId: string) => {
    const { data: oneProblem } = useQuery(['getOneProblem', { problemId }], () => getOneProblem(problemId));

    return oneProblem;
};

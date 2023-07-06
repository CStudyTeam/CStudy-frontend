import { useQuery } from '@tanstack/react-query';
import { getOneProblem } from 'api/problem';
import { OneProblem } from 'types/api';

export const useGetOneProblem = (problemId: string) => {
    const { data: oneProblem } = useQuery<OneProblem>(['getOneProblem', { problemId }], () => getOneProblem(problemId));

    return oneProblem;
};

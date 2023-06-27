import { useQuery } from '@tanstack/react-query';
import { getProblem } from 'api/problem';

interface UseGetProblemProps {
    categoryTitle: string;
    questionSuccess: number;
    page: number;
}

export const useGetProblem = ({ categoryTitle, questionSuccess, page }: UseGetProblemProps) => {
    return useQuery(
        ['getProblem', { categoryTitle, questionSuccess, page }],
        () => getProblem({ categoryTitle, questionSuccess, page }),
        { keepPreviousData: true },
    );
};
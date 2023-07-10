import { useQuery } from '@tanstack/react-query';
import { getProblem } from 'api/problem';

interface UseGetProblemProps {
    categoryTitle?: string;
    status?: number;
    page?: number;
    query?: string;
}

export const useGetProblem = ({ categoryTitle, status, page, query }: UseGetProblemProps) => {
    const { data: problemList } = useQuery(
        ['getProblem', { categoryTitle, status, page, query }],
        () => getProblem({ categoryTitle, status, page, query }),
        { keepPreviousData: true },
    );

    return problemList;
};

import { useQuery } from '@tanstack/react-query';
import { getProblem } from 'api/problem';

interface UseGetProblemProps {
    categoryTitle?: string;
    questionSuccess?: number;
    page?: number;
    query?: string;
}

export const useGetProblem = ({ categoryTitle, questionSuccess, page, query }: UseGetProblemProps) => {
    const { data: problemList } = useQuery(
        ['getProblem', { categoryTitle, questionSuccess, page, query }],
        () => getProblem({ categoryTitle, questionSuccess, page, query }),
        { keepPreviousData: true },
    );

    return problemList;
};

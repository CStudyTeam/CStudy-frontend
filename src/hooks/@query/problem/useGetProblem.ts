import { useQuery } from '@tanstack/react-query';
import { getProblem } from 'api/problem';
import { Problem } from 'types/api';

interface UseGetProblemProps {
    categoryTitle?: string;
    questionSuccess?: number;
    page?: number;
    query?: string;
}

export const useGetProblem = ({ categoryTitle, questionSuccess, page, query }: UseGetProblemProps) => {
    const { data: problemList } = useQuery<Problem>(
        ['getProblem', { categoryTitle, questionSuccess, page, query }],
        () => getProblem({ categoryTitle, questionSuccess, page, query }),
        { keepPreviousData: true },
    );

    return problemList;
};

import { useQueries } from '@tanstack/react-query';
import { getProblem } from 'api/problem';
import { getContestProblem } from 'api/contest';

interface MixQueryProps {
    categoryTitle?: string;
    status?: number;
    page?: number;
    query?: string;
    contestId: string;
}

export const useMixProblemContestProblem = ({ categoryTitle, status, page, query, contestId }: MixQueryProps) => {
    const [problemListResult, contestProblemResult] = useQueries({
        queries: [
            {
                queryKey: ['getProblem', { categoryTitle, status, page, query }],
                queryFn: () => getProblem({ categoryTitle, status, page, query }),
            },
            {
                queryKey: ['contestProblem', { contestId }],
                queryFn: () => getContestProblem(contestId),
            },
        ],
    });

    const problem = problemListResult?.data;
    const contestQuestion = contestProblemResult?.data;

    return { problem, contestQuestion };
};

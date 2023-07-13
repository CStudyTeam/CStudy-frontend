import { useQueries } from '@tanstack/react-query';
import { getProblem } from 'api/problem';
import { getWorkbookQuestion } from 'api/workbook';

interface MixQueryProps {
    categoryTitle?: string;
    status?: number;
    page?: number;
    query?: string;
    questionId: string;
}

export const useMixProblemWorkbookQuestion = ({ categoryTitle, status, page, query, questionId }: MixQueryProps) => {
    const [problemListResult, workbookQuestionResult] = useQueries({
        queries: [
            {
                queryKey: ['getProblem', { categoryTitle, status, page, query }],
                queryFn: () => getProblem({ categoryTitle, status, page, query }),
            },
            {
                queryKey: ['workbookQuestion', { questionId }],
                queryFn: () => getWorkbookQuestion(questionId),
            },
        ],
    });

    const problem = problemListResult?.data;
    const workbookQuestion = workbookQuestionResult?.data;

    return { problem, workbookQuestion };
};

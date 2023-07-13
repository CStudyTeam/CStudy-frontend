import { useQueries } from '@tanstack/react-query';
import { getProblem } from 'api/problem';
import { getMyPage } from 'api/mypage';
import { getToggleRequestList } from 'api/board';

interface MixQueryProps {
    requestPage: number;
    query: string;
    problemPage: number;
}

export const useMixMyPageAllData = ({ requestPage, query, problemPage }: MixQueryProps) => {
    const [myPageListResult, requestListListResult, problemListListResult] = useQueries({
        queries: [
            {
                queryKey: ['getMyPage'],
                queryFn: getMyPage,
            },
            {
                queryKey: ['requestList', { page: requestPage, query }],
                queryFn: () => getToggleRequestList({ page: requestPage, query }),
                keepPreviousData: true,
            },
            {
                queryKey: ['contest', { page: problemPage }],
                queryFn: () => getProblem({ page: problemPage }),
                keepPreviousData: true,
            },
        ],
    });

    const myPage = myPageListResult?.data;
    const requestList = requestListListResult?.data;
    const problemList = problemListListResult?.data;

    return { myPage, requestList, problemList };
};

// export const useGetMyPage = () => {
//     const { data: myPage } = useQuery(['getMyPage'], getMyPage);

//     return myPage;
// };

// const useGetToggleRequestList = ({ page, query }: GetRequestList) => {
//     const { data: requestList } = useQuery(
//         ['requestList', { page, query }],
//         () => getToggleRequestList({ page, query }),
//         { keepPreviousData: true },
//     );
//     return requestList;
// };

// export const useGetProblem = ({ categoryTitle, status, page, query }: UseGetProblemProps) => {
//     const { data: problemList } = useQuery(
//         ['getProblem', { categoryTitle, status, page, query }],
//         () => getProblem({ categoryTitle, status, page, query }),
//         { keepPreviousData: true },
//     );

//     return problemList;
// };

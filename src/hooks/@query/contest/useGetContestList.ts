import { useQuery } from '@tanstack/react-query';
import { getContestList } from 'api/contest';
import { ContestList } from 'types/api';

interface GetContestListProps {
    page: number;
    query: string;
}

const useGetContestList = ({ page, query }: GetContestListProps) => {
    const { data: contestList } = useQuery<ContestList>(
        ['contestList', { page, query }],
        () => getContestList({ page, query }),
        { keepPreviousData: true },
    );
    return contestList;
};

export default useGetContestList;

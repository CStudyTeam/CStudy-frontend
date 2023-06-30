import { useQuery } from '@tanstack/react-query';
import { getToggleRequestList } from 'api/board';

interface GetRequestList {
    page: number;
    query: string;
}

const useGetToggleRequestList = ({ page, query }: GetRequestList) => {
    const { data: requestList } = useQuery(['requestList', { page, query }], () =>
        getToggleRequestList({ page, query }),
    );
    return requestList;
};

export default useGetToggleRequestList;

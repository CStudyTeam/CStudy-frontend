import { useQuery } from '@tanstack/react-query';
import { getToggleRequestList } from 'api/board';
import { ToggleRequestList } from 'types/api';

interface GetRequestList {
    page: number;
    query: string;
}

const useGetToggleRequestList = ({ page, query }: GetRequestList) => {
    const { data: requestList } = useQuery<ToggleRequestList>(['requestList', { page, query }], () =>
        getToggleRequestList({ page, query }),
    );
    return requestList;
};

export default useGetToggleRequestList;

import { useQuery } from '@tanstack/react-query';
import { getRequests } from 'api/board';
import { RequestPost } from 'types/board';

const useGetRequests = (query: string) => {
    const { data, refetch } = useQuery<RequestPost>(['request', query], () => getRequests(query));
    return { data, refetch };
};

export default useGetRequests;

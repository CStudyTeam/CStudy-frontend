import { useQuery } from '@tanstack/react-query';
import { getRequest } from 'api/board';
import { RequestDetail } from 'types/api';

const useGetRequest = (id: string | undefined) => {
    const { data: request } = useQuery<RequestDetail>(['request', { id }], () => getRequest(id));
    return request;
};

export default useGetRequest;

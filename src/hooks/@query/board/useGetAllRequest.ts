import { useQuery } from '@tanstack/react-query';
import { getAllRequest } from 'api/board';
import { RequestPost } from 'types/board';

const useGetAllRequest = () => {
    const { data: myRequest } = useQuery<RequestPost>(['request'], getAllRequest);
    return myRequest;
};

export default useGetAllRequest;

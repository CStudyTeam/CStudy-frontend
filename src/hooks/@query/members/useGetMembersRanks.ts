import { useQuery } from '@tanstack/react-query';
import { getMembersRanks } from 'api/members';

export const useGetMembersRanks = () => {
    const { data: membersRanks } = useQuery(['membersRanks'], getMembersRanks);

    return membersRanks;
};

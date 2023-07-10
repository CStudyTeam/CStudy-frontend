import { instance } from 'api';
import { MembersRanks } from 'types/api';

export const getMembersRanks = async (): Promise<MembersRanks[]> => {
    const response = await instance.get(`/api/members/ranks`);
    return response.data;
};

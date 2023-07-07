import { instance } from 'api';

export const getMembersRanks = async () => {
    const response = await instance.get(`/api/members/ranks`);
    return response.data;
};

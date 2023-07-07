import { useQuery } from '@tanstack/react-query';
import { getMyImage } from 'api/mypage';
import { MyImageProps } from 'types/api';

export const useGetMyImage = ({ memberId, roles }: MyImageProps) => {
    const { data: myImage } = useQuery(['getMyImage', { memberId, roles }], () => getMyImage({ memberId, roles }));

    return myImage;
};

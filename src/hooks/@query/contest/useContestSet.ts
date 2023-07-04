import { useMutation } from '@tanstack/react-query';
import { contestSet } from 'api/contest';
import { Dispatch, SetStateAction } from 'react';
import toast from 'provider/Toast';

interface useContestSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useContestSet = ({ setIsLoading }: useContestSetProps) => {
    const { mutate: ContestSet } = useMutation(contestSet, {
        onSuccess: () => {
            toast.success('대회 생성에 성공했습니다');
        },
        onError: (error) => {
            toast.error(error as string);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return ContestSet;
};

import { useMutation } from '@tanstack/react-query';
import { contestSet } from 'api/contest';
import { Dispatch, SetStateAction } from 'react';

interface useProblemSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useContestSet = ({ setIsLoading }: useProblemSetProps) => {
    return useMutation(contestSet, {
        onSuccess: () => {
            alert('대회 생성에 성공했습니다');
        },
        onError: (error) => {
            alert(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};

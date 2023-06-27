import { useMutation } from '@tanstack/react-query';
import { contestSet } from 'api/contest';
import { Dispatch, SetStateAction } from 'react';

interface useProblemSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useContestSet = ({ setIsLoading }: useProblemSetProps) => {
    return useMutation(contestSet, {
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.log('에러지롱', error);
            alert(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};

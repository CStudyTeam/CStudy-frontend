import { useMutation } from '@tanstack/react-query';
import { problemSet } from './../../../api/problem';
import { Dispatch, SetStateAction } from 'react';

interface useProblemSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useProblemSet = ({ setIsLoading }: useProblemSetProps) => {
    return useMutation(problemSet, {
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            alert(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};

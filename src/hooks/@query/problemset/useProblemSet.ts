import { useMutation } from '@tanstack/react-query';
import { problemSet } from './../../../api/problem';
import { Dispatch, SetStateAction } from 'react';

interface useProblemSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useProblemSet = ({ setIsLoading }: useProblemSetProps) => {
    const { mutate: ProblemSet } = useMutation(problemSet, {
        onSuccess: () => {
            alert('문제 생성에 성공했습니다');
        },
        onError: (error) => {
            alert(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return ProblemSet;
};

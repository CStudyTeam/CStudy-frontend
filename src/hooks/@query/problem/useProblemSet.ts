import { useMutation } from '@tanstack/react-query';
import { problemSet } from '../../../api/problem';
import { Dispatch, SetStateAction } from 'react';
import toast from 'provider/Toast';

interface useProblemSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useProblemSet = ({ setIsLoading }: useProblemSetProps) => {
    const { mutate: ProblemSet } = useMutation(problemSet, {
        onSuccess: () => {
            toast.success('문제 생성에 성공했습니다.');
        },
        onError: (error) => {
            toast.error('문제 생성에 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return ProblemSet;
};

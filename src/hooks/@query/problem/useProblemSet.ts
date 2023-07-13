import { useMutation } from '@tanstack/react-query';
import { problemSet } from '../../../api/problem';
import toast from 'provider/Toast';

interface useProblemSetProps {
    handleIsLoading: (isLoading: boolean) => void;
}

export const useProblemSet = ({ handleIsLoading }: useProblemSetProps) => {
    const { mutate: ProblemSet } = useMutation(problemSet, {
        onSuccess: () => {
            toast.success('문제 생성에 성공했습니다.');
        },
        onError: () => {
            toast.error('문제 생성에 실패했습니다.');
        },
        onSettled: () => {
            handleIsLoading(false);
        },
    });

    return ProblemSet;
};

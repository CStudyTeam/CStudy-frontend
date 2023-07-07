import { useMutation } from '@tanstack/react-query';
import { selectAnswerProblem } from 'api/problem';
import toast from 'provider/Toast';
import { Dispatch, SetStateAction } from 'react';

interface useProblemSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useSelectAnswerProblem = ({ setIsLoading }: useProblemSetProps) => {
    const { mutate: SelectAnswerProblem } = useMutation(selectAnswerProblem, {
        onSuccess: (response) => {
            if (!response?.data?.answer) {
                return toast.error('오답입니다!');
            }
            return toast.success('정답입니다!');
        },
        onError: (error) => {
            switch (error) {
                case '3000':
                    toast.error('이미 풀은 문제입니다.');
                    break;

                default:
                    toast.error('채점 하는데 실패했습니다.');
                    break;
            }
            console.log('에러스', error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return SelectAnswerProblem;
};

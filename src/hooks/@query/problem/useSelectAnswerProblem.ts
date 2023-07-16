import { useMutation } from '@tanstack/react-query';
import { selectAnswerProblem } from 'api/problem';
import toast from 'provider/Toast';

interface useProblemSetProps {
    handleIsLoading: (isLoading: boolean) => void;
    handleIsAnswer: (isAnswer: boolean) => void;
    actionAnimations: (isActions: boolean) => void;
}

export const useSelectAnswerProblem = ({ handleIsLoading, handleIsAnswer, actionAnimations }: useProblemSetProps) => {
    const { mutate: SelectAnswerProblem } = useMutation(selectAnswerProblem, {
        onSuccess: (response) => {
            const isAnswer = !!response?.data?.answer;
            handleIsAnswer(isAnswer);
            actionAnimations(true);
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
        },
        onSettled: () => {
            handleIsLoading(false);
        },
    });

    return SelectAnswerProblem;
};

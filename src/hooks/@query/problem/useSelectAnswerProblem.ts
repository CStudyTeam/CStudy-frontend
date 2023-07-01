import { useMutation } from '@tanstack/react-query';
import { selectAnswerProblem } from 'api/problem';
import { Dispatch, SetStateAction } from 'react';

interface useProblemSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useSelectAnswerProblem = ({ setIsLoading }: useProblemSetProps) => {
    const { mutate: SelectAnswerProblem } = useMutation(selectAnswerProblem, {
        onSuccess: (response) => {
            console.log('석세스', response);
            alert('정답입니다!');
        },
        onError: (error) => {
            console.log('에러스', error);
            alert(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return SelectAnswerProblem;
};

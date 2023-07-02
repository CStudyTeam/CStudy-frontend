import { useMutation } from '@tanstack/react-query';
import { addWorkbookQuestion } from 'api/workbook';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface AddWorkbookQuestionProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useAddWorkbookQuestion = ({ setIsLoading }: AddWorkbookQuestionProps) => {
    const navigate = useNavigate();
    const { mutate: AddWorkbookQuestion } = useMutation(addWorkbookQuestion, {
        onSuccess: () => {
            navigate(-1);
            alert('문제집 문제 추가에 성공했습니다.');
        },
        onError: (error) => {
            alert(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return AddWorkbookQuestion;
};

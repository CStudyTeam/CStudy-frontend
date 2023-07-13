import { useMutation } from '@tanstack/react-query';
import { addWorkbookQuestion } from 'api/workbook';
import { useNavigate } from 'react-router-dom';
import toast from 'provider/Toast';

interface AddWorkbookQuestionProps {
    handleIsLoading: (isLoading: boolean) => void;
}

export const useAddWorkbookQuestion = ({ handleIsLoading }: AddWorkbookQuestionProps) => {
    const navigate = useNavigate();
    const { mutate: AddWorkbookQuestion } = useMutation(addWorkbookQuestion, {
        onSuccess: () => {
            toast.success('문제집 문제 추가에 성공했습니다.');
            navigate(-1);
        },
        onError: () => {
            toast.error('문제집 문제 추가에 실패했습니다.');
        },
        onSettled: () => {
            handleIsLoading(false);
        },
    });

    return AddWorkbookQuestion;
};

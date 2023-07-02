import { useMutation } from '@tanstack/react-query';
import { workbookQuestionDelete } from 'api/workbook';
import { Dispatch, SetStateAction } from 'react';

interface WorkbookQuestionDeleteProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useWorkbookQuestionDelete = ({ setIsLoading }: WorkbookQuestionDeleteProps) => {
    const { mutate: WorkbookQuestionDelete } = useMutation(workbookQuestionDelete, {
        onSuccess: () => {
            alert('문제집 문제 삭제에 성공했습니다.');
        },
        onError: (error) => {
            alert(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return WorkbookQuestionDelete;
};

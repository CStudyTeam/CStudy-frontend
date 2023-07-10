import { useMutation, useQueryClient } from '@tanstack/react-query';
import { workbookQuestionDelete } from 'api/workbook';
import { Dispatch, SetStateAction } from 'react';
import toast from 'provider/Toast';

interface WorkbookQuestionDeleteProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useWorkbookQuestionDelete = ({ setIsLoading }: WorkbookQuestionDeleteProps) => {
    const queryClient = useQueryClient();
    const { mutate: WorkbookQuestionDelete } = useMutation(workbookQuestionDelete, {
        onSuccess: () => {
            toast.success('문제집 문제 삭제에 성공했습니다.');
            queryClient.invalidateQueries(['workbookQuestion']);
        },
        onError: () => {
            toast.error('문제집 문제 삭제에 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return WorkbookQuestionDelete;
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateWorkbook } from 'api/workbook';
import { Dispatch, SetStateAction } from 'react';
import toast from 'provider/Toast';

interface UpdateWorkbookProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const useUpdateWorkbook = ({ setIsLoading, setIsActive }: UpdateWorkbookProps) => {
    const queryClient = useQueryClient();
    const { mutate: UpdateWorkbook } = useMutation(updateWorkbook, {
        onSuccess: () => {
            toast.success('문제집 정보 수정에 성공했습니다.');
            queryClient.invalidateQueries(['workbook']);
        },
        onError: () => {
            toast.error('문제집 정보 수정에 실패했습니다.');
        },
        onSettled: () => {
            setIsActive(false);
            setIsLoading(false);
        },
    });

    return UpdateWorkbook;
};

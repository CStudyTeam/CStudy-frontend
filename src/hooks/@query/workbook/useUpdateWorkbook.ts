import { useMutation } from '@tanstack/react-query';
import { updateWorkbook } from 'api/workbook';
import { Dispatch, SetStateAction } from 'react';

interface UpdateWorkbookProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const useUpdateWorkbook = ({ setIsLoading, setIsActive }: UpdateWorkbookProps) => {
    const { mutate: UpdateWorkbook } = useMutation(updateWorkbook, {
        onSuccess: () => {
            setIsActive(false);
            alert('문제집 정보 수정에 성공했습니다.');
        },
        onError: (error) => {
            alert(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return UpdateWorkbook;
};

import { useMutation } from '@tanstack/react-query';
import { workbookSet } from 'api/workbook';
import { Dispatch, SetStateAction } from 'react';
import toast from 'provider/Toast';

interface useWorkbookSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useWorkbookSet = ({ setIsLoading }: useWorkbookSetProps) => {
    const { mutate: WorkbookSet } = useMutation(workbookSet, {
        onSuccess: () => {
            toast.success('문제집 생성에 성공했습니다.');
        },
        onError: () => {
            toast.error('문제집 생성에 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return WorkbookSet;
};

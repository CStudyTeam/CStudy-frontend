import { useMutation } from '@tanstack/react-query';
import { workbookSet } from 'api/workbook';
import toast from 'provider/Toast';

interface useWorkbookSetProps {
    handleIsLoading: (isLoading: boolean) => void;
}

export const useWorkbookSet = ({ handleIsLoading }: useWorkbookSetProps) => {
    const { mutate: WorkbookSet } = useMutation(workbookSet, {
        onSuccess: () => {
            toast.success('문제집 생성에 성공했습니다.');
        },
        onError: () => {
            toast.error('문제집 생성에 실패했습니다.');
        },
        onSettled: () => {
            handleIsLoading(false);
        },
    });

    return WorkbookSet;
};

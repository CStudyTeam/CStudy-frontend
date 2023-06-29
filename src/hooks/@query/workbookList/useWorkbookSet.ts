import { useMutation } from '@tanstack/react-query';
import { workbookSet } from 'api/workbookList';
import { Dispatch, SetStateAction } from 'react';

interface useWorkbookSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useWorkbookSet = ({ setIsLoading }: useWorkbookSetProps) => {
    const { mutate: WorkbookSet } = useMutation(workbookSet, {
        onSuccess: () => {
            alert('문제집 생성에 성공했습니다.');
        },
        onError: (error) => {
            alert(error);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return WorkbookSet;
};

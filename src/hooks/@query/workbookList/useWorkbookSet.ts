import { useMutation } from '@tanstack/react-query';
import { workbookSet } from 'api/workbookList';
import { Dispatch, SetStateAction } from 'react';

interface useProblemSetProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useWorkbookSet = ({ setIsLoading }: useProblemSetProps) => {
    return useMutation(workbookSet, {
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
};

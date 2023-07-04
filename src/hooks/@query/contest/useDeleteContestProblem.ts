import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteContestProblem } from 'api/contest';
import toast from 'provider/Toast';
import { Dispatch, SetStateAction } from 'react';

interface useJoinContestProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useDeleteContestProblem = ({ setIsLoading }: useJoinContestProps) => {
    const queryClient = useQueryClient();
    const { mutate: DeleteContestProblem } = useMutation(deleteContestProblem, {
        onSuccess: () => {
            toast.success('문제 삭제에 성공했습니다.');
            queryClient.invalidateQueries(['contestProblem']);
        },
        onError: () => {
            toast.error('문제 삭제에 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return DeleteContestProblem;
};

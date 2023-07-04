import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addContestProblem } from 'api/contest';
import toast from 'provider/Toast';
import { Dispatch, SetStateAction } from 'react';

interface useJoinContestProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const useAddContestProblem = ({ setIsLoading }: useJoinContestProps) => {
    const queryClient = useQueryClient();

    const { mutate: AddContestProblem } = useMutation(addContestProblem, {
        onSuccess: () => {
            toast.success('문제 추가에 성공했습니다.');
            queryClient.invalidateQueries(['contestProblem']);
        },
        onError: () => {
            toast.error('문제 추가에 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return AddContestProblem;
};

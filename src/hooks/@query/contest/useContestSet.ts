import { useMutation } from '@tanstack/react-query';
import { contestSet } from 'api/contest';
import toast from 'provider/Toast';

interface useContestSetProps {
    handleIsLoading: (isLoading: boolean) => void;
}

export const useContestSet = ({ handleIsLoading }: useContestSetProps) => {
    const { mutate: ContestSet } = useMutation(contestSet, {
        onSuccess: () => {
            toast.success('대회 생성에 성공했습니다');
        },
        onError: (error) => {
            toast.error(error as string);
        },
        onSettled: () => {
            handleIsLoading(false);
        },
    });

    return ContestSet;
};

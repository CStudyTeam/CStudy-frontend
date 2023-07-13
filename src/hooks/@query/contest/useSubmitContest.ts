import { useMutation } from '@tanstack/react-query';
import { submitContest } from 'api/contest';
import toast from 'provider/Toast';
import { useNavigate } from 'react-router-dom';

interface useSubmitContestProps {
    contestId: string;
    handleIsLoading: (isLoading: boolean) => void;
}

export const useSubmitContest = ({ handleIsLoading, contestId }: useSubmitContestProps) => {
    const navigate = useNavigate();
    const { mutate: SubmitContest } = useMutation(submitContest, {
        onSuccess: () => {
            toast.success('대회에 참여에 성공했습니다.');
            navigate(`/contest/${contestId}`, { replace: true });
        },
        onError: () => {
            toast.error('답안 제출에 실패했습니다.');
        },
        onSettled: () => {
            handleIsLoading(false);
        },
    });

    return SubmitContest;
};

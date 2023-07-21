import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import useCongratulation from 'hooks/@zustand/useCongratulation';
import { submitContest } from 'api/contest';
import toast from 'provider/Toast';

interface useSubmitContestProps {
    contestId: string;
    handleIsLoading: (isLoading: boolean) => void;
}

export const useSubmitContest = ({ handleIsLoading, contestId }: useSubmitContestProps) => {
    const navigate = useNavigate();
    const { setCongratulation } = useCongratulation();
    const { mutate: SubmitContest } = useMutation(submitContest, {
        onSuccess: () => {
            toast.success('대회 참여에 성공했습니다.');
            setCongratulation(true);
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

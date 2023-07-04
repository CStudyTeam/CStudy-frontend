import { useMutation } from '@tanstack/react-query';
import { joinContest } from 'api/contest';
import toast from 'provider/Toast';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface useJoinContestProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const useJoinContest = ({ setIsLoading, setIsModalOpen }: useJoinContestProps) => {
    const navigate = useNavigate();
    const { mutate: JoinContest } = useMutation(joinContest, {
        onSuccess: () => {
            toast.success('대회에 참여에 성공했습니다.');
            navigate('contestproblem');
        },
        onError: (error) => {
            switch (error) {
                case '5001':
                    toast.error('대회 정보를 찾을 수 없습니다.');
                    break;
                case '5002':
                    toast.error('해당 대회에 등록한 회원이 없습니다.');
                    break;
                case '5003':
                    toast.error('참여가능한 인원이 초과되었습니다.');
                    break;
                case '5004':
                    toast.error('대회에 이미 참여한 인원입니다.');
                    break;
                default:
                    toast.error('대회 참여에 실패했습니다.');
                    break;
            }
        },
        onSettled: () => {
            setIsLoading(false);
            setIsModalOpen(false);
        },
    });

    return JoinContest;
};

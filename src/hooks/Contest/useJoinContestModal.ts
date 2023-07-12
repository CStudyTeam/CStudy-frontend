import { useState, Dispatch, SetStateAction } from 'react';
import { useJoinContest } from 'hooks/@query/contest/useJoinContest';
import { UseJoinContestProps } from 'types/contest';

interface JoinContestProps {
    contestId: string;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const useJoinContestModal = ({ setIsLoading, contestId }: JoinContestProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const JoinContest = useJoinContest({ contestId, setIsLoading, setIsModalOpen } as UseJoinContestProps);

    const handleConfirm = () => {
        JoinContest(contestId as string);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleJoinContestModal = () => {
        setIsModalOpen(true);
    };
    return {
        isModalOpen,
        handleConfirm,
        handleCancel,
        handleJoinContestModal,
    };
};

export default useJoinContestModal;

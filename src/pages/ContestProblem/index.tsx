import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import useGetContestProblem from 'hooks/@query/contest/useGetContestProblem';
import { ContestProblem as ContestProblemType } from 'types/api';

import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Quiz from 'components/Contest/Quiz';
import usePlayContest from 'hooks/@zustand/usePlayContest';
import ConfirmModal from 'components/Contest/ConfirmModal';

const ContestProblem = () => {
    const history = createBrowserHistory();
    const { contestId } = useParams();
    const navigate = useNavigate();
    const contestProblem = useGetContestProblem(contestId as string);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { setIsPlaying } = usePlayContest();

    const handleConfirm = useCallback(() => {
        setIsModalOpen(false);
        navigate(`/contest/${contestId}`, { replace: true });
    }, [navigate, contestId]);

    const handleCancel = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    useEffect(() => {
        setIsPlaying(true);
        return () => {
            setIsPlaying(false);
        };
    }, [setIsPlaying, contestId, navigate]);

    useEffect(() => {
        const unlisten = history.listen(({ action }) => {
            if (action === 'POP') {
                history.forward();
                setIsModalOpen(true);
            }
        });

        return () => {
            unlisten();
        };
    }, [history]);

    return (
        <>
            <ConfirmModal
                title="대회 참가를 포기하시겠습니까?"
                confirmText="예"
                cancelText="아니오"
                isOpen={isModalOpen}
                handleConfirm={handleConfirm}
                handleCancel={handleCancel}
            />
            <ContentContainer>
                <ContentHeaderWrapper title="문제" />
                <ContentBodyWrapper>
                    <Quiz quizData={contestProblem as ContestProblemType[]} competitionId={contestId as string} />
                </ContentBodyWrapper>
            </ContentContainer>
        </>
    );
};

export default ContestProblem;

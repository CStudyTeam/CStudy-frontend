import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import { isLogin } from 'utils/auth';
import { ProblemContent } from 'types/api';
import StatusLabel from '../StatusLabel';
import { TBodyTd } from '../Table/style';

interface ProgramFilterTBodyListProps {
    problem: ProblemContent;
}

const ProgramFilterTBodyList = ({ problem }: ProgramFilterTBodyListProps) => {
    const { questionId, status, questionTitle, categoryTitle } = problem;
    const loginModal = useLoginModal();

    const checkAndDisplayLoginModal = useCallback(
        (e: React.MouseEvent) => {
            if (!isLogin()) {
                e.preventDefault();
                loginModal.onOpen();
            }
        },
        [loginModal],
    );
    return (
        <tr>
            <TBodyTd>{questionId}</TBodyTd>
            <TBodyTd>
                <StatusLabel status={status} />
            </TBodyTd>
            <TBodyTd className="title">
                <Link to={`${questionId}`} onClick={checkAndDisplayLoginModal}>
                    {questionTitle}
                </Link>
            </TBodyTd>
            <TBodyTd>{categoryTitle}</TBodyTd>
        </tr>
    );
};

export default ProgramFilterTBodyList;

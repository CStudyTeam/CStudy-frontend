import { TBodyTd } from '../Table/style';
import StatusLabel from '../StatusLabel';
import { Link } from 'react-router-dom';
import { ProblemContent } from 'types/api';

interface ProgramFilterTBodyListProps {
    problem: ProblemContent;
    checkAndDisplayLoginModal: (e: React.MouseEvent) => void;
}

const ProgramFilterTBodyList = ({ problem, checkAndDisplayLoginModal }: ProgramFilterTBodyListProps) => {
    const { questionId, status, questionTitle, categoryTitle } = problem;
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

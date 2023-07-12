import { TBodyTd } from 'components/ProblemSet/Table/style';
import { Link } from 'react-router-dom';
import { ProblemContent } from 'types/api';
import { ProblemList } from 'types/problem';

interface FinishedDetailContestTBodyListProps {
    question: ProblemList;
}

const FinishedDetailContestTBodyList = ({ question }: FinishedDetailContestTBodyListProps) => {
    return (
        <tr key={question.questionId}>
            <TBodyTd>{question.questionId}</TBodyTd>
            <TBodyTd className="bold">
                <Link to={`/problemset/${question.questionId}`}>{question.questionTitle}</Link>
            </TBodyTd>
            <TBodyTd>{question.categoryTitle}</TBodyTd>
        </tr>
    );
};

export default FinishedDetailContestTBodyList;

import { Link } from 'react-router-dom';
import { ProblemList } from 'types/problem';
import { TBodyTd } from 'components/ProblemSet/Table/style';

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

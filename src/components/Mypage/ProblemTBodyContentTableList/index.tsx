import { Link } from 'react-router-dom';
import { ProblemContent } from 'types/api';
import { COLOR } from 'constants/Color';
import { AiFillCheckCircle } from '@react-icons/all-files/ai/AiFillCheckCircle';
import { BiError } from '@react-icons/all-files/bi/BiError';
import { TBodyTd } from 'components/ProblemSet/Table/style';

interface ProblemTBodyContentTableListProps {
    problem: ProblemContent;
}

const ProblemTBodyContentTableList = ({ problem }: ProblemTBodyContentTableListProps) => {
    const { questionId, questionTitle, categoryTitle, status } = problem;
    return (
        <tr>
            <TBodyTd white narrow>
                {questionId}
            </TBodyTd>
            <TBodyTd white narrow className="title">
                <Link to={`/problemset/${questionId}`}>{questionTitle}</Link>
            </TBodyTd>
            <TBodyTd white narrow>
                {categoryTitle}
            </TBodyTd>
            <TBodyTd white narrow>
                {status === 1 ? <AiFillCheckCircle size={30} color={COLOR.GREEN} /> : ''}
            </TBodyTd>
            <TBodyTd white narrow>
                {status === 2 ? <BiError size={30} color={COLOR.RED} /> : ''}
            </TBodyTd>
        </tr>
    );
};

export default ProblemTBodyContentTableList;

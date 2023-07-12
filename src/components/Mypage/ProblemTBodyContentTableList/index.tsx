import { TBodyTd } from 'components/ProblemSet/Table/style';
import { COLOR } from 'constants/Color';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiSolidError } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { ProblemContent } from 'types/api';

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
                {status === 2 ? <BiSolidError size={30} color={COLOR.RED} /> : ''}
            </TBodyTd>
        </tr>
    );
};

export default ProblemTBodyContentTableList;

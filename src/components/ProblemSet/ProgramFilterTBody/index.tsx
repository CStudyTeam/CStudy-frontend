import { memo } from 'react';
import { Problem } from 'types/api';
import NoData from 'components/@shared/NoData';
import ProgramFilterTBodyList from '../ProgramFilterTBodyList';

interface ProgramFilterTBodyProps {
    problemList: Problem;
}

const ProgramFilterTBody = ({ problemList }: ProgramFilterTBodyProps) => {
    return (
        <>
            {problemList?.totalElements === 0 && (
                <tr>
                    <td colSpan={4}>
                        <NoData>문제풀이 문제가 없습니다.</NoData>
                    </td>
                </tr>
            )}
            {problemList?.content?.map((problem) => (
                <ProgramFilterTBodyList key={problem.questionId} problem={problem} />
            ))}
        </>
    );
};

export default memo(ProgramFilterTBody);

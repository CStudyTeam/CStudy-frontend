import { Problem } from 'types/api';
import ProblemTBodyContentTableList from '../ProblemTBodyContentTableList';
import { memo } from 'react';

interface ProblemTBodyContentTableListsProps {
    problemList: Problem;
}

const ProblemTBodyContentTableLists = ({ problemList }: ProblemTBodyContentTableListsProps) => {
    return (
        <>
            {problemList?.content?.map((problem) => (
                <ProblemTBodyContentTableList key={problem.questionId} problem={problem} />
            ))}
        </>
    );
};

export default memo(ProblemTBodyContentTableLists);
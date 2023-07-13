import { ProblemList } from 'types/problem';
import FinishedDetailContestTBodyList from '../FinishedDetailContestTBodyList';
import { ProblemContent } from 'types/api';
import { memo } from 'react';

interface FinishedDetailContestTBodyListsProps {
    filterQuestion: ProblemContent[];
}

const FinishedDetailContestTBodyLists = ({ filterQuestion }: FinishedDetailContestTBodyListsProps) => {
    return (
        <>
            {filterQuestion?.map((question: ProblemList) => (
                <FinishedDetailContestTBodyList key={question.questionId} question={question} />
            ))}
        </>
    );
};

export default memo(FinishedDetailContestTBodyLists);

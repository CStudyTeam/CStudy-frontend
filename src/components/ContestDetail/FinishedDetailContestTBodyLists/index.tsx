import { memo } from 'react';
import { ProblemList } from 'types/problem';
import { ProblemContent } from 'types/api';
import FinishedDetailContestTBodyList from '../FinishedDetailContestTBodyList';

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

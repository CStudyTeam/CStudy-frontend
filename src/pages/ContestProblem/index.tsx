import { useParams } from 'react-router-dom';
import useGetContestProblem from 'hooks/@query/contest/useGetContestProblem';
import { ContestProblem as ContestProblemType } from 'types/api';

import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Quiz from 'components/Contest/Quiz';

const ContestProblem = () => {
    const { contestId } = useParams();
    const contestProblem = useGetContestProblem(contestId as string);

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="문제" />
            <ContentBodyWrapper>
                <Quiz quizData={contestProblem as ContestProblemType[]} competitionId={contestId as string} />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default ContestProblem;

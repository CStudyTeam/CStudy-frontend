import ContentContainer from 'components/@shared/ContentContainer';
import { useParams } from 'react-router-dom';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import useGetContestProblem from 'hooks/@query/contest/useGetContestProblem';
import Quiz from 'components/Contest/Quiz';

const ContestProblem = () => {
    const { contestId } = useParams();
    const contestProblem = useGetContestProblem(contestId as string);

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="문제" />
            <ContentBodyWrapper>
                <Quiz quizData={contestProblem} competitionId={contestId as string} />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default ContestProblem;

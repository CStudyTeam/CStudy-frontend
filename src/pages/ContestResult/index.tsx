import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import { useNavigate, useParams } from 'react-router-dom';
import QuizResult from 'components/Contest/QuizResult';
import useGetContestResult from 'hooks/@query/contest/useGetContestResult';
import Button from 'components/@shared/Button';
import { ContestResult as ContestResultType } from 'types/api';

const ContestResult = () => {
    const { contestId } = useParams();
    const navigate = useNavigate();
    const contestResult = useGetContestResult(contestId as string);

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="대회 결과">
                <Button type="button" onClick={() => navigate(-1)}>
                    돌아가기
                </Button>
            </ContentHeaderWrapper>
            <ContentBodyWrapper>
                <QuizResult testResultData={contestResult as ContestResultType} />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default ContestResult;

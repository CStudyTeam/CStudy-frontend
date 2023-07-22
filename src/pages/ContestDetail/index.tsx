import { useCallback, useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useMixContestDetailAllData } from 'hooks/@query/@GETmixed/useMixContestDetailAllData';
import useCongratulation from 'hooks/@zustand/useCongratulation';
import { isAdmin } from 'utils/auth';
import { Contest, ContestMyRanking, ContestRanking, ProblemContent } from 'types/api';

import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Button from 'components/@shared/Button';
import AdminContestAddDeleteProblem from 'components/ContestDetail/AdminContestAddDeleteProblem';
import ContestDetailInfoHeader from 'components/ContestDetail/ContestDetailInfoHeader';
import FinishedDetailContestTable from 'components/ContestDetail/FinishedDetailContestTable';
import ContestDetailInfoTable from 'components/ContestDetail/ContestDetailInfoTable';
import ContestDetailRankingTable from 'components/ContestDetail/ContestDetailRankingTable';
import * as Styled from './style';

const ContestDetail = () => {
    const { contestId } = useParams();
    const navigate = useNavigate();
    const { state: finishContest } = useLocation();

    const { isCongratulation, setCongratulation } = useCongratulation();
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);

    const { problem, contestQuestion, myRanking, contest, contestRanking } = useMixContestDetailAllData({
        contestId,
        page,
    } as { contestId: string });
    const filterQuestion = problem?.content?.filter(({ questionId: problemQuestionId }: { questionId: number }) => {
        return contestQuestion?.some(
            ({ questionId: contestQuestionId }: { questionId: number }) => problemQuestionId === contestQuestionId,
        );
    });
    const totalQuestion = filterQuestion?.length;

    const handleIsLoading = useCallback((isLoading: boolean) => {
        setIsLoading(isLoading);
    }, []);

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    useEffect(() => {
        if (isCongratulation) {
            setTimeout(() => {
                setCongratulation(false);
            }, 3500);
        }
    }, [isCongratulation, setCongratulation]);

    return (
        <ContentContainer>
            <ContentHeaderWrapper title={contest?.title as string}>
                <Button className="xl gray style" onClick={() => navigate('/contest')}>
                    돌아가기
                </Button>
            </ContentHeaderWrapper>
            {isAdmin() && !finishContest && (
                <AdminContestAddDeleteProblem
                    contestId={contestId as string}
                    handleIsLoading={handleIsLoading}
                    isLoading={isLoading}
                    filterQuestion={filterQuestion as ProblemContent[]}
                />
            )}

            <ContentBodyWrapper>
                <ContestDetailInfoHeader
                    myRanking={!!myRanking?.['ranking'] as boolean}
                    isLoading={isLoading}
                    handleIsLoading={handleIsLoading}
                    contestId={contestId as string}
                    finishContest={finishContest}
                />
                {finishContest && <FinishedDetailContestTable filterQuestion={filterQuestion as ProblemContent[]} />}
                <Styled.ContestInfoBodyWrapper>
                    <ContestDetailInfoTable contest={contest as Contest} />
                    <ContestDetailRankingTable
                        contestRanking={contestRanking as ContestRanking}
                        totalQuestion={totalQuestion as number}
                        myRanking={myRanking as ContestMyRanking}
                        handlePage={handlePage}
                        page={page}
                    />
                </Styled.ContestInfoBodyWrapper>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default ContestDetail;

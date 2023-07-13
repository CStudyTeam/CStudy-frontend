import { useCallback, useState } from 'react';
import ContentContainer from 'components/@shared/ContentContainer';
import * as Styled from './style';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import useGetContest from 'hooks/@query/contest/useGetContest';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useJoinContest } from 'hooks/@query/contest/useJoinContest';
import Button from 'components/@shared/Button';
import { isAdmin } from 'utils/auth';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import ConfirmModal from 'components/Contest/ConfirmModal';
import Table from 'components/ProblemSet/Table';
import { TBodyTd, TBodyTh } from 'components/ProblemSet/Table/style';
import AdminInput from 'components/@shared/Admin/AdminInput';
import useGetContestProblem from 'hooks/@query/contest/useGetContestProblem';
import { useDeleteContestProblem } from 'hooks/@query/contest/useDeleteContestProblem';
import { useGetProblem } from 'hooks/@query/problem/useGetProblem';
import { ProblemList } from 'types/problem';
import { UseJoinContestProps } from 'types/contest';
import StyleLink from 'components/@shared/StyleLink';
import useGetContestRanking from 'hooks/@query/contest/useGetContestRanking';
import { GetContestRankingProps } from './../../hooks/@query/contest/useGetContestRanking';
import Pagination from 'components/ProblemSet/Pagination';
import useGetContestMyRanking from 'hooks/@query/contest/useGetContestMyRanking';
import AdminContestAddDeleteProblem from 'components/ContestDetail/AdminContestAddDeleteProblem';
import { Contest, ContestMyRanking, ContestRanking, ProblemContent } from 'types/api';
import ContestDetailInfoHeader from 'components/ContestDetail/ContestDetailInfoHeader';
import FinishedDetailContestTable from 'components/ContestDetail/FinishedDetailContestTable';
import ContestDetailInfoTable from 'components/ContestDetail/ContestDetailInfoTable';
import ContestDetailRankingTable from 'components/ContestDetail/ContestDetailRankingTable';

const ContestDetail = () => {
    const { contestId } = useParams();
    const navigate = useNavigate();
    const { state: finishContest } = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);

    const problem = useGetProblem({});
    const contestQuestion = useGetContestProblem(contestId as string);
    const myRanking = useGetContestMyRanking(contestId as string);
    const contest = useGetContest(contestId as string);
    const contestRanking = useGetContestRanking({ contestId, page } as GetContestRankingProps);

    const filterQuestion = problem?.content?.filter(({ questionId: problemQuestionId }: { questionId: number }) => {
        return contestQuestion?.some(
            ({ questionId: contestQuestionId }: { questionId: number }) => problemQuestionId === contestQuestionId,
        );
    });
    const totalQuestion = filterQuestion?.length;

    const handleIsLoading = (isLoading: boolean) => {
        setIsLoading(isLoading);
    };

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    return (
        <ContentContainer>
            <ContentHeaderWrapper title={contest?.title as string}>
                <Button className="xl gray style" onClick={() => navigate(-1)}>
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

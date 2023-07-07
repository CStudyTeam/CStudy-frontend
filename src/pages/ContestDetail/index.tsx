import { useCallback, useState } from 'react';
import ContentContainer from 'components/@shared/ContentContainer';
import * as Styled from './style';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import useGetContest from 'hooks/@query/contest/useGetContest';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useJoinContest } from 'hooks/@query/contest/useJoinContest';
import Button from 'components/@shared/Button';
import { FONT } from 'constants/Font';
import { isAdmin } from 'utils/auth';
import { COLOR } from 'constants/Color';
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

const ContestDetail = () => {
    const { contestId } = useParams();
    const navigate = useNavigate();
    const { state: finishContest } = useLocation();
    const [page, setPage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const problem = useGetProblem({});
    const contestQuestion = useGetContestProblem(contestId as string);
    const filterQuestion = problem?.content?.filter(({ questionId: problemQuestionId }: { questionId: number }) => {
        return contestQuestion?.some(
            ({ questionId: contestQuestionId }: { questionId: number }) => problemQuestionId === contestQuestionId,
        );
    });
    const totalQuestion = filterQuestion?.length;

    const columns = [
        { field: 'name', headerName: '이름' },
        { field: 'score', headerName: '점수(맞은 개수/총개수)' },
        { field: 'endTime', headerName: '끝난 시간' },
    ];

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            questionIds: [],
        },
    });

    const contest = useGetContest(contestId as string);
    const contestRanking = useGetContestRanking({ contestId, page } as GetContestRankingProps);

    const JoinContest = useJoinContest({ contestId, setIsLoading, setIsModalOpen } as UseJoinContestProps);
    const DeleteContestProblem = useDeleteContestProblem({ setIsLoading });

    const handleConfirm = () => {
        JoinContest(contestId as string);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const isArray = Array.isArray(data.questionIds);
        const customQuestionIds = isArray
            ? data.questionIds.map((questionId: (string | number)[]) => ({ id: +questionId }))
            : (data.questionIds = [{ id: +data.questionIds }]);

        const formData = {
            competitionId: parseInt(contestId as string),
            questionIds: customQuestionIds,
        };

        DeleteContestProblem(formData);
        reset();
    };

    return (
        <ContentContainer>
            <ContentHeaderWrapper title={contest?.title as string}>
                <Button className="xl gray style" onClick={() => navigate(-1)}>
                    돌아가기
                </Button>
            </ContentHeaderWrapper>
            {isAdmin() && !finishContest && (
                <ContentBodyWrapper>
                    <Styled.Label>관리자</Styled.Label>
                    <Styled.AdminWrapper>
                        <div>
                            <StyleLink to="adminadd" className="xl navy style">
                                대회문제 추가하기
                            </StyleLink>
                            <Button
                                className="xl revert--red style"
                                onClick={handleSubmit(onSubmit)}
                                disabled={isLoading}
                            >
                                대회문제 삭제하기
                            </Button>
                        </div>
                    </Styled.AdminWrapper>
                    <Table
                        colRate={['15%', '50%', '15%', '20%']}
                        title={['문제번호', '문제이름', '카테고리', '문제삭제']}
                    >
                        {filterQuestion?.map(({ questionId, questionTitle, categoryTitle }: ProblemList) => (
                            <tr key={questionId}>
                                <TBodyTd>{questionId}</TBodyTd>
                                <TBodyTd className="bold">
                                    <Link to={`/problemset/${questionId}`}>{questionTitle}</Link>
                                </TBodyTd>
                                <TBodyTd>{categoryTitle}</TBodyTd>
                                <TBodyTd>
                                    <AdminInput
                                        type="checkbox"
                                        name="questionIds"
                                        register={register}
                                        errors={errors}
                                        value={`${questionId}`}
                                        required
                                    />
                                </TBodyTd>
                            </tr>
                        ))}
                    </Table>
                </ContentBodyWrapper>
            )}

            <ContentBodyWrapper>
                <Styled.ContestInfoHeaderWrapper>
                    <Styled.Label>대회정보</Styled.Label>
                    <Styled.ButtonWrapper>
                        <StyleLink to="contestresult" className="xl green style">
                            나의 대회 결과보기
                        </StyleLink>
                        {!finishContest && (
                            <Button type="button" className="xl navy style" onClick={() => setIsModalOpen(true)}>
                                대회 참여하기
                            </Button>
                        )}
                        <ConfirmModal
                            title="대회에 참가하시겠습니까?"
                            isOpen={isModalOpen}
                            handleConfirm={handleConfirm}
                            handleCancel={handleCancel}
                            isLoading={isLoading}
                        />
                    </Styled.ButtonWrapper>
                </Styled.ContestInfoHeaderWrapper>
                {finishContest && (
                    <Styled.FinishContestTableWrapper>
                        <Table colRate={['20%', '60%', '20%']} title={['문제번호', '문제이름', '카테고리']}>
                            {filterQuestion?.map(({ questionId, questionTitle, categoryTitle }: ProblemList) => (
                                <tr key={questionId}>
                                    <TBodyTd>{questionId}</TBodyTd>
                                    <TBodyTd className="bold">
                                        <Link to={`/problemset/${questionId}`}>{questionTitle}</Link>
                                    </TBodyTd>
                                    <TBodyTd>{categoryTitle}</TBodyTd>
                                </tr>
                            ))}
                        </Table>
                    </Styled.FinishContestTableWrapper>
                )}
                <Styled.ContestInfoBodyWrapper>
                    <Table maxHeight colRate={['50%', '50%']} title={['대회 시작일', '대회 종료일']}>
                        <tr>
                            <TBodyTd>{contest?.startTime}</TBodyTd>
                            <TBodyTd>{contest?.endTime}</TBodyTd>
                        </tr>
                        <tr>
                            <TBodyTh>최대인원수</TBodyTh>
                            <TBodyTh>현재 참가자수</TBodyTh>
                        </tr>
                        <tr>
                            <TBodyTd>{contest?.maxParticipants}</TBodyTd>
                            <TBodyTd>{contest?.participants}</TBodyTd>
                        </tr>
                    </Table>
                    <Styled.ContestRanking>
                        <Styled.RankingTitle>랭킹 테이블</Styled.RankingTitle>
                        <Styled.StyledTable>
                            <Styled.StyledThead>
                                <Styled.StyledTr>
                                    {columns.map((column) => (
                                        <Styled.StyledTh key={column.field}>{column.headerName}</Styled.StyledTh>
                                    ))}
                                </Styled.StyledTr>
                            </Styled.StyledThead>
                            <Styled.StyledTbody>
                                {contestRanking?.content?.map(({ memberId, name, score, endTime }) => (
                                    <Styled.StyledTr key={memberId}>
                                        <Styled.StyledTd>{name}</Styled.StyledTd>
                                        <Styled.StyledTd>
                                            {score} / {totalQuestion}
                                        </Styled.StyledTd>
                                        <Styled.StyledTd>
                                            {endTime ? endTime : '제출한 시험지가 없습니다'}
                                        </Styled.StyledTd>
                                    </Styled.StyledTr>
                                ))}
                            </Styled.StyledTbody>
                        </Styled.StyledTable>
                        <Styled.PaginationWrapper>
                            <Pagination
                                white
                                totalPages={contestRanking?.totalPages as number}
                                handlePage={handlePage}
                                page={page}
                            />
                        </Styled.PaginationWrapper>
                    </Styled.ContestRanking>
                </Styled.ContestInfoBodyWrapper>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default ContestDetail;

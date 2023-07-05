import { useState } from 'react';
import ContentContainer from 'components/@shared/ContentContainer';
import * as Styled from './style';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import useGetContest from 'hooks/@query/contest/useGetContest';
import { Link, useParams } from 'react-router-dom';
import { useJoinContest } from 'hooks/@query/contest/useJoinContest';
import Button from 'components/@shared/Button';
import { FONT } from 'constants/Font';
import { isAdmin } from 'utils/auth';
import { COLOR } from 'constants/Color';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import ConfirmModal from 'components/Contest/ConfirmModal';
import Table from 'components/ProblemSet/Table';
import { TBodyTd } from 'components/ProblemSet/Table/style';
import AdminInput from 'components/@shared/Admin/AdminInput';
import useGetContestProblem from 'hooks/@query/contest/useGetContestProblem';
import { useDeleteContestProblem } from 'hooks/@query/contest/useDeleteContestProblem';
import { useGetProblem } from 'hooks/@query/problem/useGetProblem';
import { ProblemList } from 'types/problem';
import { UseJoinContestProps } from 'types/contest';
import StyleLink from 'components/@shared/StyleLink';

const ContestDetail = () => {
    const { contestId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const problem = useGetProblem({});
    const contestQuestion = useGetContestProblem(contestId as string);
    const filterQuestion = problem?.content?.filter(({ questionId: problemQuestionId }: { questionId: number }) => {
        return contestQuestion?.some(
            ({ questionId: contestQuestionId }: { questionId: number }) => problemQuestionId === contestQuestionId,
        );
    });

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
    const JoinContest = useJoinContest({ contestId, setIsLoading, setIsModalOpen } as UseJoinContestProps);
    const DeleteContestProblem = useDeleteContestProblem({ setIsLoading });

    const handleConfirm = () => {
        JoinContest(contestId as string);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
            <ContentHeaderWrapper title={contest?.title} />
            {isAdmin() && (
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
                            대회 결과보기
                        </StyleLink>
                        <Button type="button" className="xl navy style" onClick={() => setIsModalOpen(true)}>
                            대회 참여하기
                        </Button>
                        <ConfirmModal
                            title="대회에 참가하시겠습니까?"
                            isOpen={isModalOpen}
                            handleConfirm={handleConfirm}
                            handleCancel={handleCancel}
                            isLoading={isLoading}
                        />
                    </Styled.ButtonWrapper>
                </Styled.ContestInfoHeaderWrapper>
                <Table
                    colRate={['35%', '35%', '15%', '15%']}
                    title={['대회 시작일', '대회 종료일', '최대인원수', '현재 참가자수']}
                >
                    <tr>
                        <TBodyTd>{contest?.startTime}</TBodyTd>
                        <TBodyTd>{contest?.endTime}</TBodyTd>
                        <TBodyTd>{contest?.maxParticipants}</TBodyTd>
                        <TBodyTd>{contest?.participants}</TBodyTd>
                    </tr>
                </Table>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default ContestDetail;

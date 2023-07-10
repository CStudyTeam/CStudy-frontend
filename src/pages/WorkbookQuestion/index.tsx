import { Link, useParams } from 'react-router-dom';
import { useState, useCallback } from 'react';
import * as Styled from './style';
import useGetWorkbook from 'hooks/@query/workbook/useGetWorkbook';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Table from 'components/ProblemSet/Table';
import { TBodyTd } from 'components/ProblemSet/Table/style';
import useGetWorkbookQuestion from 'hooks/@query/workbook/useGetWorkbookQuestion';
import { isAdmin, isLogin } from 'utils/auth';
import Button from 'components/@shared/Button';
import Pagination from 'components/ProblemSet/Pagination';
import { PaginationWrapper } from 'pages/Workbook/style';
import AdminInput from 'components/@shared/Admin/AdminInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useWorkbookQuestionDelete } from 'hooks/@query/workbook/useWorkbookQuestionDelete';
import StyleLink from 'components/@shared/StyleLink';
import useLoginModal from 'hooks/@zustand/useLoginModal';

const WorkbookQuestion = () => {
    const { questionId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    const loginModal = useLoginModal();

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

    const workbook = useGetWorkbook(questionId as string);
    const workbookQuestion = useGetWorkbookQuestion(questionId as string, page);
    const WorkbookQuestionDelete = useWorkbookQuestionDelete({ setIsLoading });

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const isArray = Array.isArray(data.questionIds);
        const customQuestionIds = isArray
            ? data.questionIds.map((questionId: (string | number)[]) => ({ id: +questionId }))
            : (data.questionIds = [{ id: +data.questionIds }]);

        const formData = {
            workbookId: parseInt(questionId as string),
            questionIds: customQuestionIds,
        };

        WorkbookQuestionDelete(formData);
        reset();
    };

    return (
        <ContentContainer>
            <ContentHeaderWrapper admin title={workbook?.title as string} desc={workbook?.description}>
                <Styled.CreateInfo>출시일: {workbook?.createdAt}</Styled.CreateInfo>
            </ContentHeaderWrapper>
            <ContentBodyWrapper>
                <Styled.AdminWrapper>
                    {isAdmin() && (
                        <>
                            <StyleLink to="adminadd" className="navy xl style">
                                문제 추가하기
                            </StyleLink>
                            <Button
                                className="revert--red xl style"
                                onClick={handleSubmit(onSubmit)}
                                disabled={isLoading}
                            >
                                문제 삭제하기
                            </Button>
                        </>
                    )}
                </Styled.AdminWrapper>

                <Table
                    colRate={isAdmin() ? ['20%', '60%', '20%'] : ['30%', '70%']}
                    title={isAdmin() ? ['문제번호', '문제이름', '문제삭제'] : ['문제번호', '문제이름']}
                >
                    {workbookQuestion?.content?.map(({ questionId, title, workbookQuestionId }) => (
                        <tr key={workbookQuestionId}>
                            <TBodyTd>{questionId}</TBodyTd>
                            <TBodyTd className="bold">
                                {isLogin() ? (
                                    <StyleLink to={`/problemset/${questionId}`}>{title}</StyleLink>
                                ) : (
                                    <Button onClick={loginModal.onOpen}>{title}</Button>
                                )}
                            </TBodyTd>
                            {isAdmin() && (
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
                            )}
                        </tr>
                    ))}
                </Table>
                <PaginationWrapper>
                    <Pagination
                        totalPages={workbookQuestion?.totalPages as number}
                        handlePage={handlePage}
                        page={page}
                    />
                </PaginationWrapper>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default WorkbookQuestion;

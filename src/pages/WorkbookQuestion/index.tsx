import { useNavigate, useParams } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { isAdmin } from 'utils/auth';
import { WorkbookQuestionContent } from 'types/api';

import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Table from 'components/ProblemSet/Table';
import Button from 'components/@shared/Button';
import Pagination from 'components/ProblemSet/Pagination';
import WorkbookQuestionAdminOptionGroup from 'components/WorkbookQuestion/WorkbookQuestionAdminOption';
import WorkbookQuestionTableLists from 'components/WorkbookQuestion/WorkbookQuestionTableLists';
import { useMixWorkbookWorkbookQuestion } from 'hooks/@query/@GETmixed/useMixWorkbookWorkbookQuestion';
import { PaginationWrapper } from 'pages/Workbook/style';
import * as Styled from './style';

const WorkbookQuestion = () => {
    const { questionId } = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(0);

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

    const { workbook, workbookQuestion } = useMixWorkbookWorkbookQuestion({ questionId, page } as {
        questionId: string;
        page: number;
    });

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    return (
        <ContentContainer>
            <ContentHeaderWrapper admin title={workbook?.title as string} desc={workbook?.description}>
                <Styled.CreateInfo>
                    출시일: {workbook?.createdAt}
                    <Button type="button" className="gray style mt xl2" onClick={() => navigate(-1)}>
                        돌아가기
                    </Button>
                </Styled.CreateInfo>
            </ContentHeaderWrapper>
            <ContentBodyWrapper>
                <Styled.AdminWrapper>
                    <WorkbookQuestionAdminOptionGroup
                        handleSubmit={handleSubmit}
                        reset={reset}
                        questionId={questionId as string}
                    />
                </Styled.AdminWrapper>

                <Table
                    colRate={isAdmin() ? ['20%', '60%', '20%'] : ['30%', '70%']}
                    title={isAdmin() ? ['문제번호', '문제이름', '문제삭제'] : ['문제번호', '문제이름']}
                >
                    <WorkbookQuestionTableLists
                        workbookContent={workbookQuestion?.content as WorkbookQuestionContent[]}
                        register={register}
                        errors={errors}
                    />
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

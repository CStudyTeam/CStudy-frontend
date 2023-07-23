import { useMemo } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { useDeleteContestProblem } from 'hooks/@query/contest/useDeleteContestProblem';
import { ProblemContent } from 'types/api';

import Button from 'components/@shared/Button';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import StyleLink from 'components/@shared/StyleLink';
import Table from 'components/ProblemSet/Table';
import AdminContestTableTBodyLists from '../AdminContestTableTBodyLists';
import * as Styled from './style';

interface AdminContestAddDeleteProblemProps {
    contestId: string;
    filterQuestion: ProblemContent[];
    handleIsLoading: (isLoading: boolean) => void;
    isLoading: boolean;
}

const AdminContestAddDeleteProblem = ({
    contestId,
    filterQuestion,
    isLoading,
    handleIsLoading,
}: AdminContestAddDeleteProblemProps) => {
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

    const DeleteContestProblem = useDeleteContestProblem({ handleIsLoading });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const isArray = Array.isArray(data.questionIds);
        const customQuestionIds = isArray
            ? data.questionIds?.map((questionId: (string | number)[]) => ({ id: +questionId }))
            : (data.questionIds = [{ id: +data.questionIds }]);

        const formData = {
            competitionId: parseInt(contestId as string),
            questionIds: customQuestionIds,
        };

        DeleteContestProblem(formData);
        reset();
    };

    const tableColRate = useMemo(() => ['15%', '50%', '15%', '20%'], []);
    const tableTitle = useMemo(() => ['문제번호', '문제이름', '카테고리', '문제삭제'], []);

    return (
        <ContentBodyWrapper>
            <Styled.Label>관리자</Styled.Label>
            <Styled.AdminWrapper>
                <div>
                    <StyleLink to="adminadd" className="xl navy style">
                        대회문제 추가하기
                    </StyleLink>
                    <Button className="xl revert--red style" onClick={handleSubmit(onSubmit)} disabled={isLoading}>
                        대회문제 삭제하기
                    </Button>
                </div>
            </Styled.AdminWrapper>
            <Table colRate={tableColRate} title={tableTitle}>
                <AdminContestTableTBodyLists filterQuestion={filterQuestion} register={register} errors={errors} />
            </Table>
        </ContentBodyWrapper>
    );
};

export default AdminContestAddDeleteProblem;

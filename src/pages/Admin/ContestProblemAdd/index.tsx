import { useState } from 'react';
import { Form, useNavigate, useParams } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Button from 'components/@shared/Button';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import FormBody from 'components/@shared/Admin/FormBody';

import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import Table from 'components/ProblemSet/Table';
import { useAddContestProblem } from 'hooks/@query/contest/useAddContestProblem';
import { useMixProblemContestProblem } from 'hooks/@query/@GETmixed/useMixProblemContestProblem';
import AdminContestTableLists from 'components/Admin/AdminContestTableLists';
import { ProblemContent } from 'types/api';

const ContestProblemAdd = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { contestId } = useParams();
    const { problem, contestQuestion } = useMixProblemContestProblem({ contestId } as { contestId: string });
    const filterQuestion = problem?.content?.filter(({ questionId: problemQuestionId }) => {
        return !contestQuestion?.some(
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

    const handleIsLoading = (isLoading: boolean) => {
        setIsLoading(isLoading);
    };

    const AddContestQuestion = useAddContestProblem({ handleIsLoading });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const isArray = Array.isArray(data.questionIds);
        const customQuestionIds = isArray
            ? data.questionIds.map((questionId: (string | number)[]) => ({ id: +questionId }))
            : (data.questionIds = [{ id: +data.questionIds }]);
        const formData = {
            competitionId: parseInt(contestId as string),
            questionIds: customQuestionIds,
        };
        AddContestQuestion(formData);
        reset();
    };

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="대회 문제추가" />
            <ContentBodyWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormBody>
                        <Table white colRate={['15%', '65%', '20%']} title={['선택', '문제목록', '카테고리']}>
                            <AdminContestTableLists
                                filterQuestion={filterQuestion as ProblemContent[]}
                                register={register}
                                errors={errors}
                            />
                        </Table>
                        <Button type="submit" className="mt navy xl style" disabled={isLoading}>
                            문제등록하기
                        </Button>
                        <Button
                            type="button"
                            className="gray style ml xl"
                            onClick={() => navigate(-1)}
                            disabled={isLoading}
                        >
                            돌아가기
                        </Button>
                    </FormBody>
                </Form>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default ContestProblemAdd;

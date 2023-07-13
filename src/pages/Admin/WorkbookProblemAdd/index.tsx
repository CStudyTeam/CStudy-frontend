import { useState } from 'react';
import { Form, useParams } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Button from 'components/@shared/Button';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import AdminInput from 'components/@shared/Admin/AdminInput';
import FormBody from 'components/@shared/Admin/FormBody';

import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import Table from 'components/ProblemSet/Table';
import { TBodyTd } from 'components/ProblemSet/Table/style';
import { useAddWorkbookQuestion } from 'hooks/@query/workbook/useAddWorkbookQuestion';
import { useMixProblemWorkbookQuestion } from 'hooks/@query/@GETmixed/useMixProblemWorkbookQuestion';

const WorkbookProblemAdd = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { questionId } = useParams();
    const { problem, workbookQuestion } = useMixProblemWorkbookQuestion({ questionId } as { questionId: string });
    const filterQuestion = problem?.content?.filter(({ questionId: problemQuestionId }: { questionId: number }) => {
        return !workbookQuestion?.content?.some(
            ({ questionId: workbookQuestionId }: { questionId: number }) => problemQuestionId === workbookQuestionId,
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

    const AddWorkbookQuestion = useAddWorkbookQuestion({ handleIsLoading });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const isArray = Array.isArray(data.questionIds);
        const customQuestionIds = isArray
            ? data.questionIds.map((questionId: (string | number)[]) => ({ id: +questionId }))
            : (data.questionIds = [{ id: +data.questionIds }]);

        const formData = {
            workbookId: parseInt(questionId as string),
            questionIds: customQuestionIds,
        };

        AddWorkbookQuestion(formData);
        reset();
    };

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="문제집 문제추가" />
            <ContentBodyWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormBody>
                        <Table white colRate={['15%', '65%', '20%']} title={['선택', '문제목록', '카테고리']}>
                            {filterQuestion?.map(({ questionId, questionTitle, categoryTitle }, index: number) => (
                                <tr key={index}>
                                    <TBodyTd white>
                                        <AdminInput
                                            type="checkbox"
                                            name="questionIds"
                                            register={register}
                                            errors={errors}
                                            value={`${questionId}`}
                                            required
                                        />
                                    </TBodyTd>
                                    <TBodyTd white className="title">
                                        {questionTitle}
                                    </TBodyTd>
                                    <TBodyTd white>{categoryTitle}</TBodyTd>
                                </tr>
                            ))}
                        </Table>
                        <Button type="submit" className="mt navy xl style" disabled={isLoading}>
                            문제등록하기
                        </Button>
                    </FormBody>
                </Form>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default WorkbookProblemAdd;

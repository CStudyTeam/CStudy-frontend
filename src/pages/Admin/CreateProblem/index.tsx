import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { useProblemSet } from 'hooks/@query/problemset/useProblemSet';

import { useCallback, useState } from 'react';
import ContentContainer from 'components/@shared/ContentContainer';
import ProblemForm from 'components/CreateProblem/ProblemForm';
import Button from 'components/@shared/Button';
import AdminContentHeaderWrapper from 'components/@shared/Admin/AdminContentHeaderWrapper';
import AdminContentBodyWrapper from 'components/@shared/Admin/AdminContentBodyWrapper';

import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';
import { QuestionDataProps } from 'types/problemForm';

const CreateProblem = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { mutate: ProblemSet } = useProblemSet({ setIsLoading });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        const transformedData = [];

        for (let i = 0; i < Object.keys(data).length / 10; i++) {
            const [answerStr, answerNum] = data[`answer${i}`]?.split(' ');

            const questionData: QuestionDataProps = {
                createQuestionRequestDto: {
                    questionTitle: data[`questionTitle${i}`],
                    questionDesc: data[`questionDesc${i}`],
                    questionExplain: data[`questionExplain${i}`],
                },
                categoryRequestDto: {
                    category: data[`category${i}`],
                },
                createChoicesAboutQuestionDto: Array.from({ length: 5 }, (_, index) => ({
                    number: index + 1,
                    content: data[`content${i * 5 + index}`],
                })),
            };

            questionData.createChoicesAboutQuestionDto[answerNum].answer = answerStr;

            transformedData.push(questionData);
        }

        ProblemSet(transformedData);
    };

    const [problemForms, setProblemForms] = useState([
        {
            id: 0,
            titleNumber: 1,
            basicInfoNumber: 0,
            contentNumber: [0, 1, 2, 3, 4],
        },
    ]);

    const handleClick = useCallback(() => {
        setProblemForms((forms) => [
            ...forms,
            {
                id: forms.length,
                titleNumber: forms[forms.length - 1].titleNumber + 1,
                basicInfoNumber: forms[forms.length - 1].basicInfoNumber + 1,
                contentNumber: forms[forms.length - 1].contentNumber.map((number) => number + 5),
            },
        ]);
    }, []);

    return (
        <ContentContainer>
            <AdminContentHeaderWrapper title="문제생성">
                <Button
                    type="submit"
                    width="12rem"
                    fontSize={FONT.REGULAR_14}
                    backgroundColor={COLOR.NAVY_200}
                    color={COLOR.WHITE}
                    onClick={handleClick}
                >
                    문제 추가하기
                </Button>
            </AdminContentHeaderWrapper>
            <AdminContentBodyWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {problemForms.map((form) => (
                        <ProblemForm
                            key={form.id}
                            isLoading={isLoading}
                            register={register}
                            errors={errors}
                            titleNumber={form.titleNumber}
                            basicInfoNumber={form.basicInfoNumber}
                            contentNumber={form.contentNumber}
                        />
                    ))}
                    <Button
                        type="submit"
                        width="16rem"
                        fontSize={FONT.REGULAR_16}
                        backgroundColor={COLOR.NAVY_200}
                        color={COLOR.WHITE}
                        margin="2rem 0 0 0"
                        disabled={isLoading}
                    >
                        문제 등록하기
                    </Button>
                </Form>
            </AdminContentBodyWrapper>
        </ContentContainer>
    );
};

export default CreateProblem;

import Button from 'components/@shared/Button';
import * as Styled from './style';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useForm, useFieldArray, SubmitHandler, FieldValues } from 'react-hook-form';
import formatDate from 'utils/formatDate';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { useParams } from 'react-router-dom';
import { useSubmitContest } from './../../../hooks/@query/contest/useSubmitContest';
import debounce from 'utils/debounce';
import { QuizAppProps, UseSubmitContestProps } from 'types/contest';

const Quiz = ({ quizData, competitionId }: QuizAppProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const { contestId } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            competitionId,
            endTime: '2023-01-01 00-00',
            questions: quizData?.map(() => ({
                questionId: 0,
                choiceNumber: 0,
            })),
        },
    });

    const { fields } = useFieldArray({ control, name: 'questions' });
    const SubmitContest = useSubmitContest({ setIsLoading, contestId } as UseSubmitContestProps);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        SubmitContest(data);
    };

    const handleNextClick = debounce(() => {
        if (currentIndex < quizData.length - 1) {
            setCurrentIndex((curIndex) => curIndex + 1);
        }
    }, 0);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex((curIndex) => curIndex - 1);
        }
    };

    useEffect(() => {
        reset({
            competitionId,
            endTime: formatDate(new Date(), { second: true }),
            questions: quizData?.map((question) => ({
                questionId: question.questionId,
            })),
        });
    }, [quizData, competitionId, reset]);

    return (
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
            {fields?.map((field, index) => (
                <div key={field.id} style={{ display: currentIndex === index ? 'block' : 'none' }}>
                    <Styled.ContestProblemDesc>
                        {index + 1}. {quizData[index].description}
                    </Styled.ContestProblemDesc>
                    <Styled.ContestFieldWrapper>
                        {quizData[index].choices.map((choice) => (
                            <Styled.ContestField key={choice.number}>
                                <Styled.ContestInput
                                    type="radio"
                                    {...register(`questions.${index}.choiceNumber`)}
                                    value={choice.number}
                                    errors={errors}
                                    data-count={choice.number}
                                />
                                <span>{choice.content}</span>
                            </Styled.ContestField>
                        ))}
                    </Styled.ContestFieldWrapper>
                    <input
                        type="hidden"
                        {...register(`questions.${index}.questionId`, { required: true })}
                        value={quizData[index].questionId}
                    />
                    <Styled.ButtonWrapper>
                        {currentIndex > 0 && (
                            <Button
                                type="button"
                                backgroundColor={COLOR.WHITE}
                                color={COLOR.BLACK}
                                width="12rem"
                                fontSize={FONT.REGULAR_14}
                                borderRadius="1.6rem"
                                shadow
                                disabled={isLoading}
                                onClick={handlePrevClick}
                            >
                                이전
                            </Button>
                        )}
                        {currentIndex < quizData.length - 1 ? (
                            <Button
                                type="button"
                                backgroundColor={COLOR.NAVY_200}
                                color={COLOR.WHITE}
                                width="12rem"
                                fontSize={FONT.REGULAR_14}
                                borderRadius="1.6rem"
                                shadow
                                disabled={isLoading}
                                onClick={handleNextClick}
                            >
                                다음
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                backgroundColor={COLOR.GREEN}
                                color={COLOR.WHITE}
                                width="12rem"
                                fontSize={FONT.REGULAR_14}
                                borderRadius="1.6rem"
                                disabled={isLoading}
                                shadow
                            >
                                제출
                            </Button>
                        )}
                    </Styled.ButtonWrapper>
                </div>
            ))}
        </Styled.Form>
    );
};

export default Quiz;
import { Dispatch, SetStateAction } from 'react';
import { FieldValues, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import ProblemRenderSubmit from '../ProblemRenderSubmit';
import ProblemRenderContent from '../ProblemRenderContent';
import ProblemRenderTitle from '../ProblemRenderTitle';
import { OneProblem } from 'types/api';
import * as Styled from './style';

interface ProblemRenderProps {
    problem: OneProblem;
    Answer: string;
    isAnswer: boolean;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onSubmit: SubmitHandler<FieldValues>;
    isLoading: boolean;
}

const ProblemRender = ({
    isLoading,
    problem,
    isAnswer,
    Answer,
    register,
    handleSubmit,
    onSubmit,
}: ProblemRenderProps) => {
    return (
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
            <ProblemRenderTitle problem={problem} />
            <ProblemRenderContent problem={problem} register={register} />
            <ProblemRenderSubmit isAnswer={isAnswer} Answer={Answer} isLoading={isLoading} />
        </Styled.Form>
    );
};

export default ProblemRender;

import { PropsWithChildren, memo } from 'react';
import { FieldValues, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { OneProblem } from 'types/api';
import ProblemRenderSubmit from '../ProblemRenderSubmit';
import ProblemRenderContent from '../ProblemRenderContent';
import ProblemRenderTitle from '../ProblemRenderTitle';
import ResultImage from 'components/@shared/ResultImage';
import * as Styled from './style';

interface ProblemRenderProps {
    problem: OneProblem;
    Answer: string;
    isAnswer: boolean;
    isAction: boolean;
    timeCheck: boolean;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onSubmit: SubmitHandler<FieldValues>;
    isLoading: boolean;
}

const ProblemRender = ({
    isLoading,
    problem,
    isAnswer,
    isAction,
    timeCheck,
    Answer,
    register,
    handleSubmit,
    onSubmit,
    children,
}: PropsWithChildren<ProblemRenderProps>) => {
    return (
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
            <ProblemRenderTitle problem={problem} />
            {children}
            <ResultImage isAnswer={isAnswer} isAction={isAction} timeCheck={timeCheck} />
            <ProblemRenderContent problem={problem} register={register} />
            <ProblemRenderSubmit timeCheck={timeCheck} isAnswer={isAnswer} Answer={Answer} isLoading={isLoading} />
        </Styled.Form>
    );
};

export default memo(ProblemRender);

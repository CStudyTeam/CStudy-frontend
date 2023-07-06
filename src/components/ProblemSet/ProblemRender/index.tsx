import * as Styled from './style';
import { FieldValues, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import ProblemRenderSubmit from '../ProblemRenderSubmit';
import ProblemRenderContent from '../ProblemRenderContent';
import ProblemRenderTitle from '../ProblemRenderTitle';
import { OneProblem } from 'types/api';

interface ProblemRenderProps {
    problem: OneProblem;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onSubmit: SubmitHandler<FieldValues>;
    isLoading: boolean;
}

const ProblemRender = ({ isLoading, problem, register, handleSubmit, onSubmit }: ProblemRenderProps) => {
    return (
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
            <ProblemRenderTitle problem={problem} />
            <ProblemRenderContent problem={problem} register={register} />
            <ProblemRenderSubmit isLoading={isLoading} />
        </Styled.Form>
    );
};

export default ProblemRender;

import { memo } from 'react';
import { OneProblem } from 'types/api';
import ChoiceList from '../ChoiceList';
import * as Styled from './style';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface ProblemFormProps {
    problem: OneProblem;
    register: UseFormRegister<FieldValues>;
}

const ProblemRenderContent = ({ problem, register }: ProblemFormProps) => {
    return (
        <Styled.ProblemContentWrapper>
            <Styled.ProblemContentTitle>{problem?.description}</Styled.ProblemContentTitle>
            <ChoiceList choiceList={problem?.choices} register={register} />
        </Styled.ProblemContentWrapper>
    );
};

export default memo(ProblemRenderContent);

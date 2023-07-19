import { memo } from 'react';
import { OneProblem } from 'types/api';
import * as Styled from './style';

interface ProblemRenderTitleProps {
    problem: OneProblem;
}

const ProblemRenderTitle = ({ problem }: ProblemRenderTitleProps) => {
    return (
        <Styled.BodyTitleWrapper>
            <Styled.ProblemBodyTitle>{problem?.title}</Styled.ProblemBodyTitle>
            <Styled.ProblemCategory>{problem?.categoryTitle}</Styled.ProblemCategory>
        </Styled.BodyTitleWrapper>
    );
};

export default memo(ProblemRenderTitle);

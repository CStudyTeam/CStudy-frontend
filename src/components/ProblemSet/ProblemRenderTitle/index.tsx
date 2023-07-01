import { OneProblemProps } from 'types/problem';
import * as Styled from './style';

interface ProblemRenderTitleProps {
    problem: OneProblemProps;
}

const ProblemRenderTitle = ({ problem }: ProblemRenderTitleProps) => {
    return (
        <Styled.BodyTitleWrapper>
            <Styled.ProblemBodyTitle>{problem?.title}</Styled.ProblemBodyTitle>
            <Styled.ProblemCategory>{problem?.categoryTitle}</Styled.ProblemCategory>
        </Styled.BodyTitleWrapper>
    );
};

export default ProblemRenderTitle;

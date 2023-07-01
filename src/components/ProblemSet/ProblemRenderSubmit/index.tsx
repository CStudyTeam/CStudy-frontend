import * as Styled from './style';

interface ProblemRenderSubmitProps {
    isLoading: boolean;
}

const ProblemRenderSubmit = ({ isLoading }: ProblemRenderSubmitProps) => {
    return (
        <Styled.ProblemSubmitWrapper>
            <Styled.SubmitButton disabled={isLoading}>제출</Styled.SubmitButton>
            <Styled.ProblemAnswerWrapper>
                <Styled.ProblemAnswerTitle>정답:</Styled.ProblemAnswerTitle>
                <Styled.ProblemAnswerNumber></Styled.ProblemAnswerNumber>
            </Styled.ProblemAnswerWrapper>
        </Styled.ProblemSubmitWrapper>
    );
};

export default ProblemRenderSubmit;

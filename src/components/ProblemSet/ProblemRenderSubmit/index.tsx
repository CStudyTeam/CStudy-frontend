import Button from 'components/@shared/Button';
import * as Styled from './style';

interface ProblemRenderSubmitProps {
    isLoading: boolean;
}

const ProblemRenderSubmit = ({ isLoading }: ProblemRenderSubmitProps) => {
    return (
        <Styled.ProblemSubmitWrapper>
            <Button type="submit" className="xl wide navy style" disabled={isLoading}>
                제출
            </Button>
            <Styled.ProblemAnswerWrapper>
                <Styled.ProblemAnswerTitle>정답:</Styled.ProblemAnswerTitle>
                <Styled.ProblemAnswerNumber></Styled.ProblemAnswerNumber>
            </Styled.ProblemAnswerWrapper>
        </Styled.ProblemSubmitWrapper>
    );
};

export default ProblemRenderSubmit;

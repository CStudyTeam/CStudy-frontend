import Button from 'components/@shared/Button';
import * as Styled from './style';

interface ProblemRenderSubmitProps {
    isLoading?: boolean;
    Answer?: string;
    isAnswer?: boolean;
    timeCheck?: boolean;
}

const ProblemRenderSubmit = ({ isLoading, isAnswer, Answer, timeCheck }: ProblemRenderSubmitProps) => {
    return (
        <Styled.ProblemSubmitWrapper>
            <Button type="submit" className="xl wide navy style" disabled={isLoading}>
                제출
            </Button>
            {timeCheck && isAnswer && (
                <Styled.ProblemAnswerWrapper>
                    <Styled.ProblemAnswerTitle>정답:</Styled.ProblemAnswerTitle>
                    <Styled.ProblemAnswerNumber>{Answer}</Styled.ProblemAnswerNumber>
                </Styled.ProblemAnswerWrapper>
            )}
        </Styled.ProblemSubmitWrapper>
    );
};

export default ProblemRenderSubmit;

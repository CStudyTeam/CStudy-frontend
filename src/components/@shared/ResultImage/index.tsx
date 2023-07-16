import * as Styled from './style';

interface ResultImageProps {
    isAnswer?: boolean;
    isAction?: boolean;
    timeCheck?: boolean;
}

const ResultImage = ({ isAnswer, isAction, timeCheck }: ResultImageProps) => {
    return (
        <>
            {timeCheck && (
                <Styled.ResultStampWrapper>
                    {isAnswer ? (
                        <Styled.Image isAction={isAction} src="/result-success.webp" />
                    ) : (
                        <Styled.Image isAction={isAction} src="/result-fail.webp" />
                    )}
                </Styled.ResultStampWrapper>
            )}
        </>
    );
};

export default ResultImage;

import ContentContainer from 'components/@shared/ContentContainer';
import * as Styled from './style';

const Problem = () => {
    return (
        <ContentContainer>
            <Styled.Header>
                <Styled.Title>문제</Styled.Title>
            </Styled.Header>
            <Styled.Body>
                <Styled.BodyTitleWrapper>
                    <Styled.ProblemBodyTitle>문제 제목</Styled.ProblemBodyTitle>
                    <Styled.ProblemCategory>카테고리 &gt; 세부카테고리</Styled.ProblemCategory>
                </Styled.BodyTitleWrapper>
                <Styled.ProblemContentWrapper>
                    <Styled.ProblemContentTitle>7레이어에 대해서 옳게 설명한 것은?</Styled.ProblemContentTitle>
                    <Styled.ProblemOptionWrapper>
                        <Styled.ProblemOption>
                            <Styled.ProblemNumber type="radio" name="problem" value="정답" data-count={1} />
                            <Styled.ProblemDesc>어쩌구 저쩌구 왈왈1</Styled.ProblemDesc>
                        </Styled.ProblemOption>
                        <Styled.ProblemOption>
                            <Styled.ProblemNumber type="radio" name="problem" value="정답" data-count={2} />
                            <Styled.ProblemDesc>어쩌구 저쩌구 왈왈2</Styled.ProblemDesc>
                        </Styled.ProblemOption>
                        <Styled.ProblemOption>
                            <Styled.ProblemNumber type="radio" name="problem" value="정답" data-count={3} />
                            <Styled.ProblemDesc>어쩌구 저쩌구 왈왈3</Styled.ProblemDesc>
                        </Styled.ProblemOption>
                        <Styled.ProblemOption>
                            <Styled.ProblemNumber type="radio" name="problem" value="정답" data-count={4} />
                            <Styled.ProblemDesc>어쩌구 저쩌구 왈왈4</Styled.ProblemDesc>
                        </Styled.ProblemOption>
                        <Styled.ProblemOption>
                            <Styled.ProblemNumber type="radio" name="problem" value="정답" data-count={5} />
                            <Styled.ProblemDesc>어쩌구 저쩌구 왈왈5</Styled.ProblemDesc>
                        </Styled.ProblemOption>
                    </Styled.ProblemOptionWrapper>
                </Styled.ProblemContentWrapper>
                <Styled.ProblemSubmitWrapper>
                    <Styled.SubmitButton>제출</Styled.SubmitButton>
                    <Styled.ProblemAnswerWrapper>
                        <Styled.ProblemAnswerTitle>정답:</Styled.ProblemAnswerTitle>
                        <Styled.ProblemAnswerNumber>3</Styled.ProblemAnswerNumber>
                    </Styled.ProblemAnswerWrapper>
                </Styled.ProblemSubmitWrapper>
            </Styled.Body>
            <Styled.Footer>
                <Styled.FooterComment>해설</Styled.FooterComment>
                <Styled.FooterCommentDesc>아무말이나 막막 해버렸다.</Styled.FooterCommentDesc>
            </Styled.Footer>
        </ContentContainer>
    );
};

export default Problem;

import Button from 'components/@shared/Button';
import * as Styled from './style';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

const Board = () => {
    return (
        <>
            <Styled.PageTitle>게시판</Styled.PageTitle>
            <Styled.Wrapper>
                <span>내가 낸 문제</span>
                <Button
                    backgroundColor={COLOR.NAVY_200}
                    color={COLOR.WHITE}
                    width="13rem"
                    fontSize={FONT.REGULAR_14}
                    weight="bold"
                    borderRadius="1.6rem"
                >
                    글쓰기
                </Button>
            </Styled.Wrapper>
            <Styled.Article>
                <div>
                    <Styled.Status>대기</Styled.Status>
                    <Styled.Title>문제 요청합니다.</Styled.Title>
                </div>
                <Styled.Content>
                    설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
                </Styled.Content>
                <Styled.Detail>
                    <span>홍길동</span>
                    <span>2023-03-05</span>
                </Styled.Detail>
            </Styled.Article>
            <Styled.Article>
                <div>
                    <Styled.Status>대기</Styled.Status>
                    <Styled.Title>문제 요청합니다.</Styled.Title>
                </div>
                <Styled.Content>
                    설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
                </Styled.Content>
                <Styled.Detail>
                    <span>홍길동</span>
                    <span>2023-03-05</span>
                </Styled.Detail>
            </Styled.Article>
            <Styled.Article>
                <div>
                    <Styled.Status>대기</Styled.Status>
                    <Styled.Title>문제 요청합니다.</Styled.Title>
                </div>
                <Styled.Content>
                    설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설설명설명설명설명설명설명설명설명설명설명설명설명설명설설명설명설명설명설명설명설명설명설명설명설명설명설명설명
                </Styled.Content>
                <Styled.Detail>
                    <span>홍길동</span>
                    <span>2023-03-05</span>
                </Styled.Detail>
            </Styled.Article>
        </>
    );
};

export default Board;

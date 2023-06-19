import Button from 'components/@shared/Button';
import * as Styled from './style';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { Link } from 'react-router-dom';
import useGetAllRequest from 'hooks/@query/board/useGetAllRequest';

const Board = () => {
    const requests = useGetAllRequest();

    return (
        <>
            <Styled.PageTitle>게시판</Styled.PageTitle>
            <Styled.Wrapper>
                <ul>
                    <Styled.Filter>내가 낸 문제</Styled.Filter>
                </ul>
                <Link to="request">
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
                </Link>
            </Styled.Wrapper>

            {requests?.content.map((request) => (
                <Styled.Article key={request.id}>
                    <div>
                        <Styled.Status>{request.flag ? '승인' : '대기'}</Styled.Status>
                        <Styled.Title>{request.title}</Styled.Title>
                    </div>
                    <Styled.Content>{request.content}</Styled.Content>
                    <Styled.Detail>
                        <span>{request.memberName}</span>·<span>{request.createAt}</span>
                    </Styled.Detail>
                </Styled.Article>
            ))}
        </>
    );
};

export default Board;

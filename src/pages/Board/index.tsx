import Button from 'components/@shared/Button';
import * as Styled from './style';
import { useState } from 'react';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { Link } from 'react-router-dom';
import useGetAllRequest from 'hooks/@query/board/useGetAllRequest';

const Board = () => {
    const [query, setQuery] = useState('list');
    const { refetch, data: requests } = useGetAllRequest(query);

    const handleRequestFilter = (filterOption: string) => {
        setQuery(filterOption);
        refetch();
    };

    return (
        <>
            <Styled.PageTitle>게시판</Styled.PageTitle>
            <Styled.Wrapper>
                <ul>
                    <Styled.Filter onClick={() => handleRequestFilter('mylist')}>내가 낸 문제</Styled.Filter>
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
                <Styled.Container key={request.id}>
                    <Link to={`/board/${request.id}`}>
                        <Styled.Article>
                            <div>
                                <Styled.Status>{request.flag ? '승인' : '대기'}</Styled.Status>
                                <Styled.Title>{request.title}</Styled.Title>
                            </div>
                            <Styled.Content>{request.description}</Styled.Content>
                            <Styled.Detail>
                                <span>{request.memberName}</span>·<span>{request.createAt}</span>
                            </Styled.Detail>
                        </Styled.Article>
                    </Link>
                </Styled.Container>
            ))}
        </>
    );
};

export default Board;

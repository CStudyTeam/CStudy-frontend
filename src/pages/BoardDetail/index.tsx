import useGetRequest from 'hooks/@query/board/useGetRequest';
import * as Styled from './style';
import { useParams } from 'react-router-dom';

const BoardDetail = () => {
    const { requestId } = useParams();
    const request = useGetRequest(requestId);

    if (!request) return <div>게시글을 찾을 수 없습니다.</div>;

    return (
        <>
            <Styled.PageTitle>게시판</Styled.PageTitle>
            <Styled.Container>
                <Styled.Status>{request.flag ? '승인' : '대기'}</Styled.Status>
                <Styled.Title>{request.title}</Styled.Title>
                <Styled.Detail>
                    {request.memberName}
                    <span>·</span>
                    {request.createAt}
                </Styled.Detail>
                <Styled.Content>{request.content}</Styled.Content>
            </Styled.Container>
        </>
    );
};

export default BoardDetail;

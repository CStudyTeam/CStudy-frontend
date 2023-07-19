import ApproveStatus from 'components/@shared/Status';
import { RequestDetail } from 'types/api';
import * as Styled from './style';

interface BoardDetailBoardProps {
    request: RequestDetail;
}

const BoardDetailBoard = ({ request }: BoardDetailBoardProps) => {
    return (
        <Styled.Container>
            <ApproveStatus flag={request?.flag} />
            <Styled.Title>{request?.title}</Styled.Title>
            <Styled.Detail>
                {request?.memberName}
                <span>·</span>
                {request?.createAt}
            </Styled.Detail>
            <Styled.Content>{request?.description}</Styled.Content>
        </Styled.Container>
    );
};

export default BoardDetailBoard;

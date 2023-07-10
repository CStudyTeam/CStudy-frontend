import { Link } from 'react-router-dom';
import * as Styled from './style';
import ApproveStatus from 'components/@shared/Status';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import { isLogin } from 'utils/auth';

interface RequestListProps {
    id: number;
    flag: boolean;
    title: string;
    description: string;
    memberName: string;
    createAt: string;
}

const RequestList = ({ id, flag, title, description, memberName, createAt }: RequestListProps) => {
    const loginModal = useLoginModal();
    const checkAndDisplayLoginModal = (e: React.MouseEvent) => {
        if (!isLogin()) {
            e.preventDefault();
            loginModal.onOpen();
        }
    };
    return (
        <Styled.Container key={id}>
            <Link to={`/board/${id}`} onClick={checkAndDisplayLoginModal}>
                <Styled.Article>
                    <div>
                        <ApproveStatus flag={flag} />
                        <Styled.Title>{title}</Styled.Title>
                    </div>
                    <Styled.Content>{description}</Styled.Content>
                    <Styled.Detail>
                        <span>{memberName}</span>·<span>{createAt}</span>
                    </Styled.Detail>
                </Styled.Article>
            </Link>
        </Styled.Container>
    );
};

export default RequestList;

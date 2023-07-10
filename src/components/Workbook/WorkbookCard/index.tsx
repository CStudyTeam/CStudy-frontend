import { Link } from 'react-router-dom';
import * as Styled from './style';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import { isLogin } from 'utils/auth';

interface WorkBookCardProps {
    id: number;
    title: string;
    description: string;
    createdAt: string;
}

const WorkBookCard = ({ id, title, createdAt, description }: WorkBookCardProps) => {
    const loginModal = useLoginModal();
    return (
        <Styled.WorkBookCard>
            <Link
                to={`${id}`}
                onClick={(e) => {
                    if (!isLogin()) {
                        e.preventDefault();
                        loginModal.onOpen();
                    }
                }}
            >
                <Styled.Title>{title}</Styled.Title>
                <Styled.Time>{createdAt}</Styled.Time>
                <Styled.Img />
                <Styled.Description>{description}</Styled.Description>
            </Link>
        </Styled.WorkBookCard>
    );
};

export default WorkBookCard;

import { Link } from 'react-router-dom';
import * as Styled from './style';

interface WorkBookCardProps {
    id: number;
    title: string;
    description: string;
    createdAt: string;
}

const WorkBookCard = ({ id, title, createdAt, description }: WorkBookCardProps) => {
    return (
        <Styled.WorkBookCard>
            <Link to={`${id}`}>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Time>{createdAt}</Styled.Time>
                <Styled.Img />
                <Styled.Description>{description}</Styled.Description>
            </Link>
        </Styled.WorkBookCard>
    );
};

export default WorkBookCard;

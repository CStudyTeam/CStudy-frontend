import { Link } from 'react-router-dom';
import { RequestContent } from 'types/api';
import ApproveStatus from 'components/@shared/Status';
import { TBodyTd } from 'components/ProblemSet/Table/style';

interface RequestTBodyContentTableListProps {
    request: RequestContent;
}

const RequestTBodyContentTableList = ({ request }: RequestTBodyContentTableListProps) => {
    const { id, title, flag } = request;
    return (
        <tr>
            <TBodyTd white narrow>
                {id}
            </TBodyTd>
            <TBodyTd white narrow className="title">
                <Link to={`/board/${id}`}>{title}</Link>
            </TBodyTd>
            <TBodyTd white narrow>
                <ApproveStatus small flag={flag} />
            </TBodyTd>
        </tr>
    );
};

export default RequestTBodyContentTableList;

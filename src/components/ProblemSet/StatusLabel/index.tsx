import { statusLabelProp } from 'types/problem';

const StatusLabel = ({ status }: statusLabelProp) => {
    if (status === 1) {
        return <span className="success">완료</span>;
    }
    if (status === 2) {
        return <span className="failed">실패</span>;
    }
    return null;
};

export default StatusLabel;

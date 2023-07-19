import { memo } from 'react';
import { Contest } from 'types/api';
import Table from 'components/ProblemSet/Table';
import { TBodyTd, TBodyTh } from 'components/ProblemSet/Table/style';

interface ContestDetailInfoTableProps {
    contest: Contest;
}

const ContestDetailInfoTable = ({ contest }: ContestDetailInfoTableProps) => {
    return (
        <Table maxHeight colRate={['50%', '50%']} title={['대회 시작일', '대회 종료일']}>
            <tr>
                <TBodyTd>{contest?.startTime}</TBodyTd>
                <TBodyTd>{contest?.endTime}</TBodyTd>
            </tr>
            <tr>
                <TBodyTh>최대인원수</TBodyTh>
                <TBodyTh>현재 참가자수</TBodyTh>
            </tr>
            <tr>
                <TBodyTd>{contest?.maxParticipants}</TBodyTd>
                <TBodyTd>{contest?.participants}</TBodyTd>
            </tr>
        </Table>
    );
};

export default memo(ContestDetailInfoTable);

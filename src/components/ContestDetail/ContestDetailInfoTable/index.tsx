import { memo, useMemo } from 'react';
import { Contest } from 'types/api';
import Table from 'components/ProblemSet/Table';
import { TBodyTd, TBodyTh } from 'components/ProblemSet/Table/style';

interface ContestDetailInfoTableProps {
    contest: Contest;
}

const ContestDetailInfoTable = ({ contest }: ContestDetailInfoTableProps) => {
    const tableColRate = useMemo(() => ['50%', '50%'], []);
    const tableTitle = useMemo(() => ['대회 시작일', '대회 종료일'], []);
    return (
        <Table maxHeight colRate={tableColRate} title={tableTitle}>
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

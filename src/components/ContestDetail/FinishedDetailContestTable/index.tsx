import { memo, useMemo } from 'react';
import { ProblemContent } from 'types/api';
import Table from 'components/ProblemSet/Table';
import FinishedDetailContestTBodyLists from '../FinishedDetailContestTBodyLists';
import * as Styled from './style';

interface FinishedDetailContestTableProps {
    filterQuestion: ProblemContent[];
}

const FinishedDetailContestTable = ({ filterQuestion }: FinishedDetailContestTableProps) => {
    const tableColRate = useMemo(() => ['20%', '60%', '20%'], []);
    const tableTitle = useMemo(() => ['문제번호', '문제이름', '카테고리'], []);
    return (
        <Styled.FinishContestTableWrapper>
            <Table colRate={tableColRate} title={tableTitle}>
                <FinishedDetailContestTBodyLists filterQuestion={filterQuestion} />
            </Table>
        </Styled.FinishContestTableWrapper>
    );
};

export default memo(FinishedDetailContestTable);

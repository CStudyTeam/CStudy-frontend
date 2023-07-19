import { memo } from 'react';
import { ProblemContent } from 'types/api';
import Table from 'components/ProblemSet/Table';
import FinishedDetailContestTBodyLists from '../FinishedDetailContestTBodyLists';
import * as Styled from './style';

interface FinishedDetailContestTableProps {
    filterQuestion: ProblemContent[];
}

const FinishedDetailContestTable = ({ filterQuestion }: FinishedDetailContestTableProps) => {
    return (
        <Styled.FinishContestTableWrapper>
            <Table colRate={['20%', '60%', '20%']} title={['문제번호', '문제이름', '카테고리']}>
                <FinishedDetailContestTBodyLists filterQuestion={filterQuestion} />
            </Table>
        </Styled.FinishContestTableWrapper>
    );
};

export default memo(FinishedDetailContestTable);

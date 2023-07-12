import { ContestRankingContent } from 'types/api';
import * as Styled from './style';

interface ContestDetailRankingTBodyListProps {
    ranking: ContestRankingContent;
    totalQuestion: number;
}

const ContestDetailRankingTBodyList = ({ ranking, totalQuestion }: ContestDetailRankingTBodyListProps) => {
    return (
        <Styled.StyledTr key={ranking.memberId}>
            <Styled.StyledTd>{ranking.name}</Styled.StyledTd>
            <Styled.StyledTd>
                {ranking.score} / {totalQuestion}
            </Styled.StyledTd>
            <Styled.StyledTd>{ranking.endTime ? ranking.endTime : '제출한 시험지가 없습니다'}</Styled.StyledTd>
        </Styled.StyledTr>
    );
};

export default ContestDetailRankingTBodyList;

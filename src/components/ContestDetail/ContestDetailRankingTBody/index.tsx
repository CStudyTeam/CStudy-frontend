import { ContestRanking } from 'types/api';
import * as Styled from './style';
import ContestDetailRankingTBodyLists from '../ContestDetailRankingTBodyLists';

interface ContestDetailRankingTBodyProps {
    contestRanking: ContestRanking;
    totalQuestion: number;
}

const ContestDetailRankingTBody = ({ contestRanking, totalQuestion }: ContestDetailRankingTBodyProps) => {
    return (
        <Styled.StyledTbody>
            {(contestRanking?.totalElements as number) === 0 ? (
                <Styled.StyledTr>
                    <Styled.StyledTd colSpan={3}>등록된 참가자가 없습니다.</Styled.StyledTd>
                </Styled.StyledTr>
            ) : (
                <ContestDetailRankingTBodyLists contestRanking={contestRanking} totalQuestion={totalQuestion} />
            )}
        </Styled.StyledTbody>
    );
};

export default ContestDetailRankingTBody;

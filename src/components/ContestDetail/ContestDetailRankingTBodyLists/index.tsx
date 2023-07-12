import { ContestRanking } from 'types/api';
import ContestDetailRankingTBodyList from '../ContestDetailRankingTBodyList';

interface ContestDetailRankingTBodyListsProps {
    contestRanking: ContestRanking;
    totalQuestion: number;
}

const ContestDetailRankingTBodyLists = ({ contestRanking, totalQuestion }: ContestDetailRankingTBodyListsProps) => {
    return (
        <>
            {contestRanking?.content?.map((ranking) => (
                <ContestDetailRankingTBodyList key={ranking.memberId} ranking={ranking} totalQuestion={totalQuestion} />
                // <Styled.StyledTr key={memberId}>
                //     <Styled.StyledTd>{name}</Styled.StyledTd>
                //     <Styled.StyledTd>
                //         {score} / {totalQuestion}
                //     </Styled.StyledTd>
                //     <Styled.StyledTd>{endTime ? endTime : '제출한 시험지가 없습니다'}</Styled.StyledTd>
                // </Styled.StyledTr>
            ))}
        </>
    );
};

export default ContestDetailRankingTBodyLists;

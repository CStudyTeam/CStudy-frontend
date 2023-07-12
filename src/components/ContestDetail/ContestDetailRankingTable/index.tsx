import Pagination from 'components/ProblemSet/Pagination';
import ContestDetailRankingTHead from '../ContestDetailRankingTHead';
import ContestDetailRankingTBody from '../ContestDetailRankingTBody';
import * as Styled from './style';
import { ContestMyRanking, ContestRanking } from 'types/api';

interface ContestDetailRankingTableProps {
    contestRanking: ContestRanking;
    totalQuestion: number;
    myRanking: ContestMyRanking;
    page: number;
    handlePage: (page: number) => void;
}

const ContestDetailRankingTable = ({
    contestRanking,
    totalQuestion,
    myRanking,
    page,
    handlePage,
}: ContestDetailRankingTableProps) => {
    return (
        <Styled.ContestRanking>
            <Styled.RankingTitle>
                랭킹 테이블
                {!!myRanking?.['ranking'] && <span>나의 랭킹 : {myRanking?.['ranking']}</span>}
            </Styled.RankingTitle>
            <Styled.StyledTable>
                <ContestDetailRankingTHead />
                <ContestDetailRankingTBody contestRanking={contestRanking} totalQuestion={totalQuestion} />
            </Styled.StyledTable>
            {contestRanking?.totalPages > 1 && (
                <Styled.PaginationWrapper>
                    <Pagination
                        white
                        totalPages={contestRanking?.totalPages as number}
                        handlePage={handlePage}
                        page={page}
                    />
                </Styled.PaginationWrapper>
            )}
        </Styled.ContestRanking>
    );
};

export default ContestDetailRankingTable;

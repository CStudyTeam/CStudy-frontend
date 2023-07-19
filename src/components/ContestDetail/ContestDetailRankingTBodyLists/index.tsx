import { memo } from 'react';
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
            ))}
        </>
    );
};

export default memo(ContestDetailRankingTBodyLists);

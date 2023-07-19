import { memo } from 'react';
import { MembersRanks } from 'types/api';
import Table from 'components/ProblemSet/Table';
import { TBodyTd } from 'components/ProblemSet/Table/style';

interface RankingListProps {
    rankItems: MembersRanks[];
}

const RankingList = ({ rankItems }: RankingListProps) => {
    const emptyDataCount = Math.max(0, 10 - rankItems?.length);

    for (let i = 0; i < emptyDataCount; i++) {
        rankItems?.push({ value: null, score: null });
    }

    const TBodyContent = rankItems?.map(({ score, value }, index: number) => (
        <tr key={index}>
            <TBodyTd className="white" white narrow rank={index + 1} />
            <TBodyTd className="white" white narrow rankFont={index + 1}>
                {index + 1}등
            </TBodyTd>
            <TBodyTd className="title center white" white narrow>
                {value}
            </TBodyTd>
            <TBodyTd className="white" white narrow>
                {Math.floor(score as number)}
            </TBodyTd>
        </tr>
    ));
    return (
        <Table narrow colRate={['10%', '5%', '65%', '20%']} title={['', '순위', '닉네임', '점수']}>
            {TBodyContent}
        </Table>
    );
};

export default memo(RankingList);

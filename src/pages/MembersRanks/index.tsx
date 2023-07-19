import { useGetMembersRanks } from 'hooks/@query/members/useGetMembersRanks';
import { MembersRanks as MembersRanksType } from 'types/api';

import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import RankingList from 'components/Ranking/RankingList';

const MembersRanks = () => {
    const membersRanks = useGetMembersRanks();

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="전체랭킹" />
            <ContentBodyWrapper>
                <RankingList rankItems={membersRanks as MembersRanksType[]} />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default MembersRanks;

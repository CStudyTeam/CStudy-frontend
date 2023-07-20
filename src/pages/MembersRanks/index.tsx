import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import RankingList from 'components/Ranking/RankingList';

const MembersRanks = () => {
    return (
        <ContentContainer>
            <ContentHeaderWrapper title="전체랭킹" />
            <ContentBodyWrapper>
                <RankingList />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default MembersRanks;

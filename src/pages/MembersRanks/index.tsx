import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import { useGetMembersRanks } from 'hooks/@query/members/useGetMembersRanks';

const MembersRanks = () => {
    const membersRanks = useGetMembersRanks();

    console.log(membersRanks);

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="전체랭킹" />
            <ContentBodyWrapper></ContentBodyWrapper>
        </ContentContainer>
    );
};

export default MembersRanks;

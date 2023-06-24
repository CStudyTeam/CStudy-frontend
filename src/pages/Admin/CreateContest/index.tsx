import ContentContainer from 'components/@shared/ContentContainer';
import AdminContentHeaderWrapper from 'components/@shared/Admin/AdminContentHeaderWrapper';
import AdminContentBodyWrapper from 'components/@shared/Admin/AdminContentBodyWrapper';

const CreateContest = () => {
    return (
        <ContentContainer>
            <AdminContentHeaderWrapper title="대회생성" />
            <AdminContentBodyWrapper></AdminContentBodyWrapper>
        </ContentContainer>
    );
};

export default CreateContest;

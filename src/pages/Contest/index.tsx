import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Table from 'components/ProblemSet/Table';
import useGetContestList from 'hooks/@query/contest/useGetContestList';
import { Filter } from 'components/@shared/FilterStyles';
import useContestFilter from 'hooks/Contest/useContestFilter';
import ContestListTableBody from 'components/Contest/ContestListTableBody';
import { ContestContent } from 'types/api';

const Contest = () => {
    const { contestFilter, isActive, handlePage, handleToggle, checkAndDisplayLoginModal } = useContestFilter();
    const contestList = useGetContestList({ page: contestFilter.pageNumber, query: contestFilter.query });

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="대회" adminLink="대회생성 페이지 이동">
                <Filter className={isActive} onClick={handleToggle}>
                    종료된 대회 보기
                </Filter>
            </ContentHeaderWrapper>
            <ContentBodyWrapper>
                <Table colRate={['60%', '10%', '30%']} title={['대회명', '최대 인원수', '기간']}>
                    <ContestListTableBody
                        contestList={contestList?.content as ContestContent[]}
                        contestFilter={contestFilter}
                        isActive={isActive}
                        totalPages={contestList?.totalPages as number}
                        checkAndDisplayLoginModal={checkAndDisplayLoginModal}
                        handlePage={handlePage}
                    />
                </Table>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default Contest;

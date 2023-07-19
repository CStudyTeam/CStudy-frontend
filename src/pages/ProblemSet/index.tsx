import { usePageNumberStore } from 'hooks/@zustand/filterStore';
import useQueryFilterAction from 'hooks/ProblemSet/useQueryFilterAction';
import { useGetProblem } from 'hooks/@query/problem/useGetProblem';
import useStatusFilterAction from 'hooks/ProblemSet/useStatusFilterAction';
import useCategoryFilterAction from 'hooks/ProblemSet/useCategoryFilterAction';
import { Problem } from 'types/api';

import ContentContainer from 'components/@shared/ContentContainer';
import Select from 'components/ProblemSet/Select';
import Table from 'components/ProblemSet/Table';
import Pagination from 'components/ProblemSet/Pagination';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import ProgramFilterTBody from 'components/ProblemSet/ProgramFilterTBody';
import { Filter } from 'components/@shared/FilterStyles';
import * as Styled from './style';

const ProblemSet = () => {
    const { pageNumber, handlePage, reset } = usePageNumberStore();
    const { queryFilter, isActive, handleToggle } = useQueryFilterAction({ reset });
    const { statusFilter, statusActive, statusHandleActive } = useStatusFilterAction({ reset });
    const { categoryFilter, categoryActive, categoryHandleActive } = useCategoryFilterAction({ reset });

    const problemList = useGetProblem({
        categoryTitle: categoryFilter.categoryValue,
        status: statusFilter.statusValue,
        page: pageNumber,
        query: queryFilter.query,
    });

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="문제풀이" adminLink="문제생성 페이지 이동">
                <Styled.FilterWrapper>
                    <Filter className={isActive} onClick={handleToggle}>
                        내가 푼 문제
                    </Filter>
                    <Select
                        name={statusFilter.status}
                        handleActive={statusHandleActive}
                        isActive={statusActive}
                        options={!isActive ? ['전체', '완료', '실패'] : ['전체']}
                        optionsValue={!isActive ? [0, 1, 2] : [0]}
                    />
                    <Select
                        name={categoryFilter.category}
                        handleActive={categoryHandleActive}
                        isActive={categoryActive}
                        options={!isActive ? ['전체', '자바', '네트워크', '운영체제', '데이터베이스'] : ['전체']}
                        optionsValue={!isActive ? ['', '자바', '네트워크', '운영체제', '데이터베이스'] : ['']}
                    />
                </Styled.FilterWrapper>
            </ContentHeaderWrapper>
            <ContentBodyWrapper>
                <Table colRate={['10%', '10%', '65%', '15%']} title={['번호', '상태', '제목', '카테고리']}>
                    <ProgramFilterTBody problemList={problemList as Problem} />
                </Table>
                {(problemList?.totalPages as number) > 1 && (
                    <Styled.PaginationWrapper>
                        <Pagination
                            totalPages={problemList?.totalPages as number}
                            handlePage={handlePage}
                            page={pageNumber}
                        />
                    </Styled.PaginationWrapper>
                )}
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default ProblemSet;

import ContentContainer from 'components/@shared/ContentContainer';
import useSelectFilter from 'hooks/ProblemSet/useSelectFilter';
import Select from 'components/ProblemSet/Select';
import Table from 'components/ProblemSet/Table';
import Pagination from 'components/ProblemSet/Pagination';
import { useGetProblem } from 'hooks/@query/problem/useGetProblem';
import { useCallback, useState } from 'react';
import * as Styled from './style';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';

const ProblemSet = () => {
    const {
        selectName: status,
        isActive: statusActive,
        handleActive: statusHandleActive,
        value: statusValue,
    } = useSelectFilter('상태');
    const {
        selectName: category,
        isActive: categoryActive,
        handleActive: categoryHandleActive,
        value: categoryValue,
    } = useSelectFilter('카테고리');

    const [page, setPage] = useState(0);

    const problemList = useGetProblem({
        categoryTitle: categoryValue as string,
        questionSuccess: statusValue as number,
        page,
    });

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="문제풀이">
                <Styled.FilterWrapper>
                    <Select
                        name={status}
                        handleActive={statusHandleActive}
                        isActive={statusActive}
                        options={['전체', '완료', '실패']}
                        optionsValue={[-1, 0, 1]}
                    />
                    <Select
                        name={category}
                        handleActive={categoryHandleActive}
                        isActive={categoryActive}
                        options={['전체', '자바', '네트워크', '운영체제', '데이터베이스']}
                        optionsValue={['', '자바', '네트워크', '운영체제', '데이터베이스']}
                    />
                </Styled.FilterWrapper>
            </ContentHeaderWrapper>
            <ContentBodyWrapper>
                <Table
                    colRate={['15%', '70%', '15%']}
                    title={['상태', '제목', '카테고리']}
                    content={problemList?.content}
                />
                <Styled.PaginationWrapper>
                    <Pagination totalPages={problemList?.totalPages} handlePage={handlePage} page={page} />
                </Styled.PaginationWrapper>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default ProblemSet;

import ContentContainer from 'components/@shared/ContentContainer';
import * as Styled from './style';
import useSelectFilter from 'hooks/ProblemSet/useSelectFilter';
import { Link } from 'react-router-dom';
import Select from 'components/ProblemSet/Select';
import Table from 'components/ProblemSet/Table';
import Pagination from 'components/ProblemSet/Pagination';

const ProblemSet = () => {
    const { selectName: status, isActive: statusActive, handleActive: statusHandleActive } = useSelectFilter('상태');
    const {
        selectName: category,
        isActive: categoryActive,
        handleActive: categoryHandleActive,
    } = useSelectFilter('카테고리');

    return (
        <ContentContainer>
            <Styled.Header>
                <Styled.Title>문제풀이</Styled.Title>
                <Styled.FilterWrapper>
                    <Select
                        name={status}
                        handleActive={statusHandleActive}
                        isActive={statusActive}
                        options={['전체', '완료', '실패']}
                    />
                    <Select
                        name={category}
                        handleActive={categoryHandleActive}
                        isActive={categoryActive}
                        options={['전체', '자바', '네트워크', '운영체제', '데이터베이스']}
                    />
                </Styled.FilterWrapper>
            </Styled.Header>
            <Styled.Body>
                <Table colRate={['15%', '70%', '15%']} title={['상태', '제목', '카테고리']} />
                <Styled.PaginationWrapper>
                    <Pagination />
                </Styled.PaginationWrapper>
            </Styled.Body>
        </ContentContainer>
    );
};

export default ProblemSet;

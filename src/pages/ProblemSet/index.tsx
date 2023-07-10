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
import { Link } from 'react-router-dom';
import { TBodyTd } from './../../components/ProblemSet/Table/style';
import { Filter } from 'pages/Board/style';
import { statusLabelProp } from 'types/problem';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import { isLogin } from 'utils/auth';

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

    const [query, setQuery] = useState('');
    const isActive = query === '/myquestion' ? 'active' : '';
    const loginModal = useLoginModal();

    const problemList = useGetProblem({
        categoryTitle: categoryValue as string,
        status: statusValue as number,
        page,
        query,
    });

    const handleToggle = () => {
        setQuery(query === '' ? '/myquestion' : '');
        setPage(0);
    };

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    const checkAndDisplayLoginModal = (e: React.MouseEvent) => {
        if (!isLogin()) {
            e.preventDefault();
            loginModal.onOpen();
        }
    };

    const StatusLabel = ({ status }: statusLabelProp) => {
        if (status === 1) {
            return <span className="success">완료</span>;
        }
        if (status === 2) {
            return <span className="failed">실패</span>;
        }
        return null;
    };

    const TBodyContent = problemList?.content?.map(
        ({ questionId, questionTitle, categoryTitle, status }, index: number) => (
            <tr key={index}>
                <TBodyTd>{questionId}</TBodyTd>
                <TBodyTd>
                    <StatusLabel status={status} />
                </TBodyTd>
                <TBodyTd className="title">
                    <Link to={`${questionId}`} onClick={checkAndDisplayLoginModal}>
                        {questionTitle}
                    </Link>
                </TBodyTd>
                <TBodyTd>{categoryTitle}</TBodyTd>
            </tr>
        ),
    );

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="문제풀이" adminLink="문제생성 페이지 이동">
                <Styled.FilterWrapper>
                    <Filter className={isActive} onClick={handleToggle}>
                        내가 푼 문제
                    </Filter>
                    <Select
                        name={status}
                        handleActive={statusHandleActive}
                        isActive={statusActive}
                        options={['전체', '완료', '실패']}
                        optionsValue={[0, 1, 2]}
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
                <Table colRate={['10%', '10%', '65%', '15%']} title={['번호', '상태', '제목', '카테고리']}>
                    {TBodyContent}
                </Table>
                <Styled.PaginationWrapper>
                    <Pagination totalPages={problemList?.totalPages as number} handlePage={handlePage} page={page} />
                </Styled.PaginationWrapper>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default ProblemSet;

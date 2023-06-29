import Button from 'components/@shared/Button';
import * as Styled from './style';
import { COLOR } from 'constants/Color';
import useGetWorkbookList from 'hooks/@query/workbook/useGetWorkbookList';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import WorkBookCard from 'components/Workbook/WorkbookCard';
import Pagination from 'components/ProblemSet/Pagination';
import { useCallback, useState } from 'react';

const Workbook = () => {
    const [page, setPage] = useState(0);

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    const workbookList = useGetWorkbookList({ page });

    return (
        <>
            <ContentContainer>
                <ContentHeaderWrapper title="문제집">
                    <div>
                        <Styled.SearchInput type="text" />
                        <Button width="5rem" backgroundColor={COLOR.NAVY_200} color="#eee">
                            검색
                        </Button>
                    </div>
                </ContentHeaderWrapper>
                <ContentBodyWrapper blue>
                    <Styled.WorkBookCards>
                        {workbookList?.content?.map(({ id, title, description, createdAt }) => (
                            <WorkBookCard
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                createdAt={createdAt}
                            />
                        ))}
                    </Styled.WorkBookCards>
                    <Styled.PaginationWrapper>
                        <Pagination
                            totalPages={workbookList?.totalPages as number}
                            handlePage={handlePage}
                            page={page}
                            white
                        />
                    </Styled.PaginationWrapper>
                </ContentBodyWrapper>
            </ContentContainer>
        </>
    );
};

export default Workbook;

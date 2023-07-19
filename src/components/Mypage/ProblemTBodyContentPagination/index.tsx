import { MyPageFilterStoreType } from 'hooks/@zustand/filterStore';
import { Problem } from 'types/api';

import Pagination from 'components/ProblemSet/Pagination';
import * as Styled from './style';

interface ProblemTBodyContentPaginationProps {
    problemList: Problem;
    handlePage: (page: number) => void;
    myPageFilter: MyPageFilterStoreType;
}

const ProblemTBodyContentPagination = ({
    problemList,
    handlePage,
    myPageFilter,
}: ProblemTBodyContentPaginationProps) => {
    return (
        <>
            {(problemList?.totalPages as number) > 1 && (
                <Styled.PaginationWrapper>
                    <Pagination
                        white
                        totalPages={problemList?.totalPages as number}
                        handlePage={handlePage}
                        page={myPageFilter.problemPageNumber}
                    />
                </Styled.PaginationWrapper>
            )}
        </>
    );
};

export default ProblemTBodyContentPagination;

import Pagination from 'components/ProblemSet/Pagination';
import * as Styled from './style';
import { ToggleRequestList } from 'types/api';
import { MyPageFilterStoreType } from 'hooks/@zustand/filterStore';

interface RequestTBodyContentPaginationProps {
    requestList: ToggleRequestList;
    requestHandlePage: (page: number) => void;
    myPageFilter: MyPageFilterStoreType;
}

const RequestTBodyContentPagination = ({
    requestList,
    requestHandlePage,
    myPageFilter,
}: RequestTBodyContentPaginationProps) => {
    return (
        <>
            {(requestList?.totalPages as number) > 1 && (
                <Styled.PaginationWrapper>
                    <Pagination
                        white
                        totalPages={requestList?.totalPages as number}
                        handlePage={requestHandlePage}
                        page={myPageFilter.requestPageNumber}
                    />
                </Styled.PaginationWrapper>
            )}
        </>
    );
};

export default RequestTBodyContentPagination;

import { useMemo } from 'react';
import { MyPageFilterStoreType } from 'hooks/@zustand/filterStore';
import { ToggleRequestList } from 'types/api';
import Table from 'components/ProblemSet/Table';
import RequestTBodyContentPagination from '../RequestTBodyContentPagination';
import RequestTBodyContentTableLists from '../RequestTBodyContentTableLists';
import NoData from 'components/@shared/NoData';

interface RequestTBodyContentProps {
    requestList: ToggleRequestList;
    requestHandlePage: (page: number) => void;
    myPageFilter: MyPageFilterStoreType;
}

const RequestTBodyContent = ({ requestList, requestHandlePage, myPageFilter }: RequestTBodyContentProps) => {
    const tableColRate = useMemo(() => ['10%', '70%', '30%'], []);
    const tableTitle = useMemo(() => ['NO.', '게시글 제목', '승인상태'], []);

    return (
        <>
            <Table white narrow colRate={tableColRate} title={tableTitle}>
                {requestList?.totalElements === 0 && (
                    <tr>
                        <td colSpan={3}>
                            <NoData>게시글이 없습니다.</NoData>
                        </td>
                    </tr>
                )}
                <RequestTBodyContentTableLists requestList={requestList} />
            </Table>
            <RequestTBodyContentPagination
                requestList={requestList}
                requestHandlePage={requestHandlePage}
                myPageFilter={myPageFilter}
            />
        </>
    );
};

export default RequestTBodyContent;

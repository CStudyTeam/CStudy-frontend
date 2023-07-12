import { ToggleRequestList } from 'types/api';
import { MyPageFilterStoreType } from 'hooks/@zustand/filterStore';
import RequestTBodyContentPagination from '../RequestTBodyContentPagination';
import Table from 'components/ProblemSet/Table';
import NoData from 'components/@shared/NoData';
import RequestTBodyContentTableLists from '../RequestTBodyContentTableLists';

interface RequestTBodyContentProps {
    requestList: ToggleRequestList;
    requestHandlePage: (page: number) => void;
    myPageFilter: MyPageFilterStoreType;
}

const RequestTBodyContent = ({ requestList, requestHandlePage, myPageFilter }: RequestTBodyContentProps) => {
    return (
        <>
            <Table white narrow colRate={['10%', '70%', '30%']} title={['NO.', '게시글 제목', '승인상태']}>
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

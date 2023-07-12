import RequestList from '../RequestList';
import Pagination from 'components/ProblemSet/Pagination';
import * as Styled from './style';
import NoData from 'components/@shared/NoData';
import { ToggleRequestList } from 'types/api';

interface RequestListsProps {
    requestList: ToggleRequestList;
    page: number;
    handlePage: (page: number) => void;
}

const RequestLists = ({ requestList, handlePage, page }: RequestListsProps) => {
    return (
        <>
            {requestList?.totalElements === 0 && <NoData>게시글이 없습니다.</NoData>}
            {requestList?.content.map(({ id, flag, title, description, memberName, createAt }) => (
                <RequestList
                    key={id}
                    id={id}
                    flag={flag}
                    title={title}
                    description={description}
                    memberName={memberName}
                    createAt={createAt}
                />
            ))}
            {(requestList?.totalPages as number) > 1 && (
                <Styled.PaginationWrapper>
                    <Pagination totalPages={requestList?.totalPages as number} handlePage={handlePage} page={page} />
                </Styled.PaginationWrapper>
            )}
        </>
    );
};

export default RequestLists;

import RequestList from '../RequestList';
import Pagination from 'components/ProblemSet/Pagination';
import * as Styled from './style';
import useGetToggleRequestList from 'hooks/@query/board/useGetRequestList';
import NoData from 'components/@shared/NoData';

interface RequestListsProps {
    query: string;
    page: number;
    handlePage: (page: number) => void;
}

const RequestLists = ({ query, page, handlePage }: RequestListsProps) => {
    const requestList = useGetToggleRequestList({ page, query });
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

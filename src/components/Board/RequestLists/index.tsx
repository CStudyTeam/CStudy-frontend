import RequestList from '../RequestList';
import Pagination from 'components/ProblemSet/Pagination';
import * as Styled from './style';
import useGetToggleRequestList from 'hooks/@query/board/useGetRequestList';

interface RequestListsProps {
    query: string;
    page: number;
    handlePage: (page: number) => void;
}

const RequestLists = ({ query, page, handlePage }: RequestListsProps) => {
    const requestList = useGetToggleRequestList({ page, query });
    console.log(requestList);
    return (
        <>
            {!requestList && <div style={{ height: '172vh' }}></div>}
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
            <Styled.PaginationWrapper>
                <Pagination totalPages={requestList?.totalPages as number} handlePage={handlePage} page={page} />
            </Styled.PaginationWrapper>
        </>
    );
};

export default RequestLists;

import useGetRequestList from 'hooks/@query/board/useGetRequestList';
import RequestList from '../RequestList';
import { useCallback, useState } from 'react';
import Pagination from 'components/ProblemSet/Pagination';
import * as Styled from './style';
import { RequestDetail } from 'types/board';

interface RequestListsProps {
    query: string;
    page: number;
    handlePage: (page: number) => void;
}

const RequestLists = ({ query, page, handlePage }: RequestListsProps) => {
    const requestList = useGetRequestList({ page, query });

    return (
        <>
            {!requestList && <div style={{ height: '172vh' }}></div>}
            {requestList?.content.map(({ id, flag, title, description, memberName, createAt }: RequestDetail) => (
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
                <Pagination totalPages={requestList?.totalPages} handlePage={handlePage} page={page} />
            </Styled.PaginationWrapper>
        </>
    );
};

export default RequestLists;

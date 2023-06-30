import useGetRequestList from 'hooks/@query/board/useGetRequestList';
import RequestList from '../RequestList';

interface RequestListsProps {
    query: string;
    page: number;
}

const RequestLists = ({ query, page }: RequestListsProps) => {
    const requestList = useGetRequestList({ page, query });

    return (
        <>
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
        </>
    );
};

export default RequestLists;

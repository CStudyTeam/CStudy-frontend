import { RequestContent, ToggleRequestList } from 'types/api';
import RequestTBodyContentTableList from '../RequestTBodyContentTableList';
import { memo } from 'react';

interface RequestTBodyContentTableListsProps {
    requestList: ToggleRequestList;
}

const RequestTBodyContentTableLists = ({ requestList }: RequestTBodyContentTableListsProps) => {
    return (
        <>
            {requestList?.content?.map((request: RequestContent, index: number) => (
                <RequestTBodyContentTableList key={index} request={request} />
            ))}
        </>
    );
};

export default memo(RequestTBodyContentTableLists);

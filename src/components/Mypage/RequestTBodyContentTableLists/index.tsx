import { memo } from 'react';
import { RequestContent, ToggleRequestList } from 'types/api';
import RequestTBodyContentTableList from '../RequestTBodyContentTableList';

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

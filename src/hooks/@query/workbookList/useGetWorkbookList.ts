import { useQuery } from '@tanstack/react-query';
import { getWorkbookList } from 'api/workbookList';
import { Workbook } from 'types/workbookList';

const useGetWorkbookList = () => {
    const { data: workbookList } = useQuery<Workbook[]>(['woorkbookList'], getWorkbookList);
    return workbookList;
};

export default useGetWorkbookList;

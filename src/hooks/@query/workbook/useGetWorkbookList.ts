import { useQuery } from '@tanstack/react-query';
import { getWorkbookList } from 'api/workbook';
import { WorkbookList } from 'types/api';

interface UseGetWorkbookListProps {
    page: number;
}

const useGetWorkbookList = ({ page }: UseGetWorkbookListProps) => {
    const { data: workbookList } = useQuery<WorkbookList>(['woorkbookList', { page }], () => getWorkbookList({ page }));
    return workbookList;
};

export default useGetWorkbookList;

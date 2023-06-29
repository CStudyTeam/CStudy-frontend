import { useQuery } from '@tanstack/react-query';
import { getWorkbookList } from 'api/workbookList';
import { Workbook } from 'types/workbookList';

interface UseGetWorkbookListProps {
    page: number;
}

const useGetWorkbookList = ({ page }: UseGetWorkbookListProps) => {
    const { data: workbookList } = useQuery<Workbook>(['woorkbookList', { page }], () => getWorkbookList({ page }));
    return workbookList;
};

export default useGetWorkbookList;

import { useQuery } from '@tanstack/react-query';
import { getWorkbookList } from 'api/workbook';

interface UseGetWorkbookListProps {
    page: number;
}

const useGetWorkbookList = ({ page }: UseGetWorkbookListProps) => {
    const { data: workbookList } = useQuery(['woorkbookList', { page }], () => getWorkbookList({ page }));
    return workbookList;
};

export default useGetWorkbookList;

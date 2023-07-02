import { useQuery } from '@tanstack/react-query';
import { getWorkbook } from 'api/workbook';

const useGetWorkbook = (workbookPageId: string) => {
    const { data: workbook } = useQuery(['woorkbook', { workbookPageId }], () => getWorkbook(workbookPageId));
    return workbook;
};

export default useGetWorkbook;

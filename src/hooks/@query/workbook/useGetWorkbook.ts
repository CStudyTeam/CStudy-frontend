import { useQuery } from '@tanstack/react-query';
import { getWorkbook } from 'api/workbook';
import { Workbook } from 'types/api';

const useGetWorkbook = (workbookPageId: string) => {
    const { data: workbook } = useQuery<Workbook>(['woorkbook', { workbookPageId }], () => getWorkbook(workbookPageId));
    return workbook;
};

export default useGetWorkbook;

import { useQuery } from '@tanstack/react-query';
import { getWorkbookQuestion } from 'api/workbook';
import { WorkbookQuestion } from 'types/api';

const useGetWorkbookQuestion = (workbookPageId: string, page: number | null) => {
    const { data: workbookQuestion } = useQuery<WorkbookQuestion>(['workbookQuestion', { workbookPageId, page }], () =>
        getWorkbookQuestion(workbookPageId, page as number),
    );
    return workbookQuestion;
};

export default useGetWorkbookQuestion;

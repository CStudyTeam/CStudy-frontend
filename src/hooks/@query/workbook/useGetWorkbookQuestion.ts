import { useQuery } from '@tanstack/react-query';
import { getWorkbookQuestion } from 'api/workbook';

const useGetWorkbookQuestion = (workbookPageId: string, page: number | null) => {
    const { data: workbookQuestion } = useQuery(['workbookQuestion', { workbookPageId, page }], () =>
        getWorkbookQuestion(workbookPageId, page as number),
    );
    return workbookQuestion;
};

export default useGetWorkbookQuestion;

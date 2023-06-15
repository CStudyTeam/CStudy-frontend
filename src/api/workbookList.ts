import { instance } from 'api';
import { Workbook } from 'types/workbookList';

export const getWorkbookList = async () => {
    const response = await instance.get<Workbook[]>('/api/workbook/list');
    return response.data;
};

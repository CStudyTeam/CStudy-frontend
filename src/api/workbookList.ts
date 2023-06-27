import { instance } from 'api';
import { WorkbookSetForm } from 'types/Form';
import { Workbook } from 'types/workbookList';

export const getWorkbookList = async () => {
    const response = await instance.get<Workbook[]>('/api/workbook/list');
    return response.data;
};

export const workbookSet = async (formData: WorkbookSetForm) => {
    const response = await instance.post('/api/workbook/create', formData);

    return response.data;
};

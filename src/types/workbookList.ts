export type Workbook = {
    content?: {
        id: number;
        title: string;
        description: string;
        createdAt: string;
    }[];
    totalPages?: number;
};

export interface WorkbookQuestionDataType {
    questionId: number;
    title: string;
    workbookQuestionId: number;
}

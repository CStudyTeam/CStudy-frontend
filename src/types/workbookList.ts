export type Workbook = {
    content?: {
        id: number;
        title: string;
        description: string;
        createdAt: string;
    }[];
    totalPages?: number;
};

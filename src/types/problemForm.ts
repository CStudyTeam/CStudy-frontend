import { FieldErrors } from 'react-hook-form';

export interface QuestionDataProps {
    createQuestionRequestDto: {
        questionTitle: string | number;
        questionDesc: string | number;
        questionExplain: string | number;
    };
    categoryRequestDto: {
        category: string;
    };
    createChoicesAboutQuestionDto: {
        number: number;
        content: string | number;
        answer?: string;
    }[];
}

export interface AdminInputStyleType {
    errors: FieldErrors;
    name: string;
}

export interface PaginationProps {
    totalPages: number;
    handlePage: (page: number) => void;
    page: number;
    white?: boolean;
}

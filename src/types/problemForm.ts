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

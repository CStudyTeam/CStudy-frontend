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

export interface PaginationProps {
    totalPages: number;
    handlePage: (page: number) => void;
    page: number;
    white?: boolean;
}

export interface ProblemListProps {
    questionId: number;
    questionTitle: string;
    categoryTitle: string;
    questionSuccess: number;
}

export interface LoginUserDto {
    memberId: number;
    roles: string[];
}

export interface selectAnswerProblemFromProps {
    problemId: string;
    formData: {
        choiceNumber: number;
        loginUserDto: LoginUserDto;
    };
}

export interface OneProblemProps {
    categoryTitle: string;
    title: string;
    description: string;
    explain: string;
    choices: {
        number: number;
        content: string;
    }[];
}

export interface ProblemList {
    questionId: number;
    questionTitle: string;
    categoryTitle: string;
}

export interface PaginationProps {
    totalPages: number;
    handlePage: (page: number) => void;
    page: number;
    white?: boolean;
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

export interface ProblemList {
    questionId: number;
    questionTitle: string;
    categoryTitle: string;
}

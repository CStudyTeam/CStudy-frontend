export interface SignInFormData {
    email: string;
    password: string;
    errors: {
        email: {
            message: string;
        };
        password: {
            message: string;
        };
    };
}

export interface SignUpFormData extends SignInFormData {
    name: string;
}

export interface SignInForm {
    email: string;
    password: string;
}

export interface SignUpForm extends SignInForm {
    name: string;
}

export interface ContestSetForm {
    competitionTitle: string;
    participants: number;
    competitionStart: Date;
    competitionEnd: Date;
}
export interface WorkbookSetForm {
    title: string;
    description: string;
}

// problem
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

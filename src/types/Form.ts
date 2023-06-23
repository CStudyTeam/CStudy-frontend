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
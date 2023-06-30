import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputStyleProps {
    errors: FieldErrors;
    id: string;
    value?: number | boolean;
}

export interface TextAreaStyleProps {
    id: string;
    label: string;
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

export interface AdminInputStyleProps {
    errors: FieldErrors;
    name: string;
}

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import * as Styled from './style';

interface InputProps {
    id: string;
    label?: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    defaultValue?: string;
}

const Input = ({
    id,
    label,
    type = 'text',
    disabled,
    required,
    register,
    errors,
    placeholder,
    defaultValue,
}: InputProps) => {
    return (
        <Styled.Field>
            {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
            <Styled.Input
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                {...register(id, { required })}
                errors={errors}
                defaultValue={defaultValue}
            />
        </Styled.Field>
    );
};

export default Input;

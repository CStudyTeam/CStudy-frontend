import { memo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import * as Styled from './style';

interface TextAreaProps {
    id: string;
    label: string;
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const TextArea = ({ id, label, disabled, required, register, errors, placeholder }: TextAreaProps) => {
    return (
        <Styled.Field>
            <Styled.Label htmlFor={id}>{label}</Styled.Label>
            <Styled.TextArea
                id={id}
                rows={20}
                placeholder={placeholder}
                disabled={disabled}
                {...register(id, { required })}
                errors={errors}
            />
        </Styled.Field>
    );
};

export default memo(TextArea);

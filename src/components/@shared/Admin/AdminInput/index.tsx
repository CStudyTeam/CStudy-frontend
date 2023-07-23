import { memo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import * as Styled from './style';

interface AdminInputProps {
    id?: string;
    label?: string;
    name: string;
    type?: string;
    textarea?: boolean;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    value?: string;
}

const AdminInput = ({
    id,
    label,
    name,
    type = 'text',
    textarea,
    disabled,
    required,
    register,
    errors,
    value,
}: AdminInputProps) => {
    return (
        <>
            {type === 'text' && (
                <Styled.AdminInputWrapper>
                    <Styled.AdminBasicLabel htmlFor={id}>{label}</Styled.AdminBasicLabel>
                    {textarea ? (
                        <Styled.AdminTextArea
                            id={id}
                            rows={5}
                            disabled={disabled}
                            errors={errors}
                            {...register(name, { required })}
                        />
                    ) : (
                        <Styled.AdminBasicInput
                            id={id}
                            disabled={disabled}
                            type={type}
                            errors={errors}
                            {...register(name, { required })}
                        />
                    )}
                </Styled.AdminInputWrapper>
            )}
            {type === 'number' && (
                <Styled.AdminInputWrapper>
                    <Styled.AdminBasicLabel htmlFor={id}>{label}</Styled.AdminBasicLabel>
                    <Styled.AdminBasicInput
                        id={id}
                        disabled={disabled}
                        type={type}
                        errors={errors}
                        {...register(name, { required, valueAsNumber: true, setValueAs: (value) => parseInt(value) })}
                    />
                </Styled.AdminInputWrapper>
            )}
            {type === 'radio' && (
                <Styled.AdminInputWrapper>
                    <Styled.AdminRadioLabel htmlFor={id}>
                        <Styled.AdminRadioInput
                            id={id}
                            disabled={disabled}
                            type={type}
                            errors={errors}
                            value={value}
                            {...register(name, { required })}
                        />
                        {label && <span>{label}</span>}
                    </Styled.AdminRadioLabel>
                </Styled.AdminInputWrapper>
            )}
            {type === 'checkbox' && (
                <Styled.AdminInputWrapper>
                    <Styled.AdminCheckboxLabel htmlFor={id}>
                        <Styled.AdminCheckboxInput
                            id={id}
                            disabled={disabled}
                            type={type}
                            errors={errors}
                            value={value}
                            {...register(name, { required })}
                        />
                        {label && <span>{label}</span>}
                    </Styled.AdminCheckboxLabel>
                </Styled.AdminInputWrapper>
            )}
        </>
    );
};

export default memo(AdminInput);

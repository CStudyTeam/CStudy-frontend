import * as Styled from './style';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface AdminInputProps {
    id: string;
    label: string;
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
                        <span>{label}</span>
                        <span></span>
                    </Styled.AdminRadioLabel>
                </Styled.AdminInputWrapper>
            )}
        </>
    );
};

export default AdminInput;

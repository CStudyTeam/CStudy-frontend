import * as Styled from './style';
import { TextAreaStyleProps } from 'types/style';

const TextArea = ({ id, label, disabled, required, register, errors, placeholder }: TextAreaStyleProps) => {
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

export default TextArea;

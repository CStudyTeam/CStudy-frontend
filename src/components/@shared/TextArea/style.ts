import { FONT } from 'constants/Font';
import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FieldErrors } from 'react-hook-form';
import { SHADOW } from 'constants/Shadow';

interface StyleProps {
    errors: FieldErrors;
    id: string;
}

export const Field = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    ${FONT.BOLD_20};
`;

export const TextArea = styled.textarea`
    margin-top: 1rem;
    padding: 1.2rem;
    font-size: ${FONT.REGULAR_18};
    border-radius: 0.4rem;
    border: 0.1rem solid ${({ errors, id }: StyleProps) => (errors[id] ? `${COLOR.RED}` : `${COLOR.WHITE}`)};
    box-shadow: ${SHADOW.CONTENTBOX_MD};
    resize: none;
`;

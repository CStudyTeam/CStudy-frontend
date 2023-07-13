import { FONT } from 'constants/Font';
import styled, { css } from 'styled-components';
import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';
import { InputStyleProps } from 'types/style';

export const Field = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label<{ smallLabel?: boolean }>`
    ${({ smallLabel }) => (smallLabel ? FONT.BOLD_14 : FONT.BOLD_20)}
`;

export const Input = styled.input<InputStyleProps>`
    ${({ type }) =>
        type === 'text' &&
        css<InputStyleProps>`
            margin-top: 1rem;
            padding: 1.2rem;
            font-size: ${FONT.REGULAR_18};
            border-radius: 0.4rem;
            border: 0.1rem solid ${({ errors, id }) => (errors[id] ? `${COLOR.RED}` : `${COLOR.WHITE}`)};
            box-shadow: ${SHADOW.CONTENTBOX_MD};
        `}
`;

export const ErrorMsg = styled.span<InputStyleProps>`
    ${FONT.BOLD_14};
    color: ${COLOR.RED};
`;

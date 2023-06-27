import styled from 'styled-components';
import { FONT } from 'constants/Font';

export const FormWrapper = styled.div`
    & + & {
        margin-top: 3rem;
    }
`;

export const ProblemNumber = styled.span`
    ${FONT.BOLD_20}
`;

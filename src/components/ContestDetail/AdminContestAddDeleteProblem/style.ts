import styled from 'styled-components';
import { FONT } from 'constants/Font';

export const Label = styled.h3`
    ${FONT.H2}
`;

export const AdminWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.6rem;

    a + button {
        margin-left: 1.2rem;
    }

    button + button {
        margin-left: 1.2rem;
    }
`;

import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const Label = styled.h3`
    ${FONT.H2}
`;

export const AdminWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.6rem;

    a {
        padding: 1.6rem 1.4rem;
        background-color: ${COLOR.NAVY_200};
        font-size: ${FONT.REGULAR_14};
        color: ${COLOR.WHITE};
        text-align: center;
        border-radius: 1.6rem;
        box-shadow: ${SHADOW.CONTENTBOX_MD};
    }

    a + button {
        margin-left: 1.2rem;
    }

    button + button {
        margin-left: 1.2rem;
    }
`;

export const ContestInfoHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.6rem;
`;

export const ButtonWrapper = styled.div`
    button + button {
        margin-left: 0.8rem;
    }
`;

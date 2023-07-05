import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const AdminWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1.6rem;

    a + button {
        margin-left: 1.2rem;
    }
`;

export const CreateInfo = styled.span`
    flex-shrink: 0;
    font-size: ${FONT.REGULAR_14};
    color: ${COLOR.GRAY_100};
`;

import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const PageTitle = styled.div`
    ${FONT.H4};
    margin-top: 8rem;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 0.1rem solid ${COLOR.GRAY_100};
    padding-bottom: 2rem;
`;

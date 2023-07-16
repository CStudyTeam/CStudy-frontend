import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    ${FONT.H4}
`;

export const Stamp = styled.div`
    position: absolute;
    inset: 0;
    z-index: 100;
`;

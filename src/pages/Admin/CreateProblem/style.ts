import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    ${FONT.H4}
`;

export const Body = styled.div`
    padding: 3rem 5rem;
    margin: 3rem 0 4rem;
    background-color: ${COLOR.WHITE};
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
    border-radius: 1.2rem;
`;

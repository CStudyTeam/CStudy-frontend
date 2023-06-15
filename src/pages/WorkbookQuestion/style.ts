import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const PageTitle = styled.div`
    ${FONT.H4};
    margin-top: 8rem;
`;

export const ContestTable = styled.table`
    width: 100%;
    border: 0.1rem solid;
    border-radius: 5rem;
    text-align: center;
    margin-top: 6rem;
`;

export const Th = styled.th`
    height: 8.7rem;
`;

export const Td = styled.td`
    height: 8.7rem;
    border-top: 0.1rem solid ${COLOR.BLACK};
`;

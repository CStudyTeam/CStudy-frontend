import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';

export const StyledTr = styled.tr`
    background-color: ${COLOR.WHITE};
    box-shadow: ${SHADOW.RANKING_TABLE};
    border-radius: 0.8rem;
`;

export const StyledTd = styled.td`
    padding: 1.5rem;
    text-align: center;
    min-width: 10rem;
`;

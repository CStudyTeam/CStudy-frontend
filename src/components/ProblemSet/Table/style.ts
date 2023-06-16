import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const Table = styled.table`
    width: inherit;
    border: 0.1rem solid ${COLOR.BLACK};
    border-radius: 5rem;
`;

export const THeadTh = styled.th`
    padding: 4rem 0 2rem;
`;

export const TBodyTd = styled.td`
    text-align: center;
    padding: 3rem 0;
    border-top: 0.1rem solid ${COLOR.BLACK};
    vertical-align: top;

    & span {
        display: inline-block;
        padding: 0.5rem 2rem;
        background-color: ${COLOR.NAVY_100};
        border-radius: 5rem;
    }

    &.title {
        ${FONT.BOLD_20}
        text-align: left;
    }
`;

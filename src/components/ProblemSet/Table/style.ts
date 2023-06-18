import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const Table = styled.table`
    width: inherit;
    background-color: ${COLOR.NAVY_100};
    border: 0.1rem solid ${COLOR.WHITE};
    border-radius: 5rem;
    box-shadow: 0.4rem 0.6rem 2.4rem rgba(0, 0, 0, 0.1), inset 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
`;

export const THeadTh = styled.th`
    padding: 4rem 0 2rem;
`;

export const TBodyTd = styled.td`
    text-align: center;
    padding: 3rem 0;
    border-top: 0.1rem solid ${COLOR.WHITE};
    vertical-align: top;

    & span {
        display: inline-block;
        padding: 0.5rem 2rem;
        background-color: ${COLOR.NAVY_200};
        color: ${COLOR.WHITE};
        border-radius: 5rem;
        border: 0.1rem solid ${COLOR.WHITE};
        box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);
        text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
    }

    &.title {
        ${FONT.BOLD_20}
        text-align: left;
    }
`;

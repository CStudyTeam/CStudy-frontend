import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: ${COLOR.NAVY_100};
    border: 0.1rem solid ${COLOR.WHITE};
    border-radius: 5rem;
    box-shadow: ${SHADOW.CONTENTBOX_XLG};
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

        color: ${COLOR.WHITE};
        border-radius: 5rem;
        border: 0.1rem solid ${COLOR.WHITE};
        box-shadow: ${SHADOW.CONTENTBOX_LG};
        text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5);

        &.success {
            background-color: ${COLOR.NAVY_200};
        }

        &.failed {
            background-color: ${COLOR.RED};
        }
    }

    &.title {
        ${FONT.BOLD_20}
        text-align: left;
    }
`;

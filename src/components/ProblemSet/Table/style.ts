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
    vertical-align: middle;

    // 선 추가 할 수도 있어서 일단 추가
    /* & + & {
        border-left: 0.1rem solid ${COLOR.WHITE};
    } */

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
        padding: 2rem 3rem;
        word-wrap: break-word;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        word-break: break-all;
    }
`;

import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

interface Props {
    white?: boolean;
    maxHeight?: boolean;
}

export const Table = styled.table<Props>`
    width: 100%;
    max-height: ${({ maxHeight }) => maxHeight && '32rem'};
    background-color: ${({ white }) => (white ? COLOR.WHITE : COLOR.NAVY_100)};
    border: 0.1rem solid ${COLOR.WHITE};
    border-radius: 5rem;
    box-shadow: ${({ white }) => (white ? SHADOW.CONTENTBOX_REVERSE : SHADOW.CONTENTBOX_XLG)};

    /* .maxHeight {
        max-height: 32rem;
    } */
`;

export const THeadTh = styled.th`
    padding: 4rem 0 2rem;
`;

export const TBodyTd = styled.td<Props>`
    text-align: center;
    padding: 3rem 0;
    border-top: ${({ white }) => (white ? `0.1rem solid ${COLOR.GRAY_50}` : `0.1rem solid ${COLOR.WHITE}`)};
    vertical-align: middle;
    word-wrap: break-word;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-all;

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

        a:hover {
            text-shadow: 0 0rem 2rem ${COLOR.WHITE}, 0 0rem 2.5rem ${COLOR.NAVY_100}, 0 -0.5rem 4rem ${COLOR.NAVY_200};
            transition: all 0.2s ease-in-out;
        }
    }

    &.bold {
        ${FONT.BOLD_20}
        padding: 0;

        a {
            display: block;
            padding: 2rem 3rem;
        }

        a:hover {
            text-shadow: 0 0rem 2rem ${COLOR.WHITE}, 0 0rem 2.5rem ${COLOR.NAVY_100}, 0 -0.5rem 4rem ${COLOR.NAVY_200};
            transition: all 0.2s ease-in-out;
        }
    }
`;

export const TBodyTh = styled.th<Props>`
    text-align: center;
    padding: 2rem 0;
    border-top: ${({ white }) => (white ? `0.1rem solid ${COLOR.GRAY_50}` : `0.1rem solid ${COLOR.WHITE}`)};
    vertical-align: middle;
    word-wrap: break-word;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-all;
`;

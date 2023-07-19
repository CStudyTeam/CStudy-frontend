import GoldCrown_Png from 'assets/crown/gold_crown.png';
import SilverCrown_Png from 'assets/crown/silver_crown.png';
import BronzeCrown_Png from 'assets/crown/bronze_crown.png';
import GoldCrown_Webp from 'assets/crown/gold_crown.webp';
import SilverCrown_Webp from 'assets/crown/silver_crown.webp';
import BronzeCrown_Webp from 'assets/crown/bronze_crown.webp';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

interface Props {
    white?: boolean;
    maxHeight?: boolean;
    narrow?: boolean;
    rank?: number;
    rankFont?: number;
}

export const Table = styled.table<Props>`
    width: 100%;
    max-height: ${({ maxHeight }) => maxHeight && '32rem'};
    background-color: ${({ white }) => (white ? COLOR.WHITE : COLOR.NAVY_100)};
    border: 0.1rem solid ${COLOR.WHITE};
    border-radius: ${({ narrow }) => (narrow ? '2rem' : '5rem')};
    box-shadow: ${({ white }) => (white ? SHADOW.CONTENTBOX_REVERSE : SHADOW.CONTENTBOX_XLG)};

    /* .maxHeight {
        max-height: 32rem;
    } */
`;

export const THeadTh = styled.th<Props>`
    padding: ${({ narrow }) => (narrow ? '2rem 0 1rem' : '4rem 0 2rem')};
`;

export const TBodyTd = styled.td<Props>`
    padding: ${({ narrow }) => (narrow ? '0' : '3rem 0')};
    background-image: ${({ rank }) => {
        let imageUrl, webpUrl;

        switch (rank) {
            case 1:
                imageUrl = GoldCrown_Png;
                webpUrl = GoldCrown_Webp;
                break;
            case 2:
                imageUrl = SilverCrown_Png;
                webpUrl = SilverCrown_Webp;
                break;
            case 3:
                imageUrl = BronzeCrown_Png;
                webpUrl = BronzeCrown_Webp;
                break;
        }

        return `-webkit-image-set(url(${webpUrl}) 1x), -webkit-image-set(url(${imageUrl}) 1x), image-set(url(${webpUrl}) 1x), image-set(url(${imageUrl}) 1x)`;
    }};

    background-size: ${({ rank }) => rank && '70%'};
    background-repeat: ${({ rank }) => rank && 'no-repeat'};
    background-position: ${({ rank }) => rank && 'center center'};
    text-align: center;
    ${({ rankFont }) => {
        switch (rankFont) {
            case 1:
                return FONT.BOLD_20;
            case 2:
                return FONT.BOLD_18;
            case 3:
                return FONT.BOLD_16;
        }
    }}
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
        padding: ${({ narrow }) => (narrow ? '1.5rem 2rem' : '2rem 3rem')};

        a:hover {
            text-shadow: 0 0rem 2rem ${COLOR.WHITE}, 0 0rem 2.5rem ${COLOR.NAVY_100}, 0 -0.5rem 4rem ${COLOR.NAVY_200};
            transition: all 0.2s ease-in-out;
        }

        &.center {
            text-align: center;
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

    &.white {
        background-color: ${COLOR.WHITE};
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

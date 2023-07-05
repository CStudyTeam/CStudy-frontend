import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import { css } from 'styled-components';

export const ButtonLinkSharedStyles = css`
    display: inline-block;
    padding: 0.8rem 1.2rem;
    font-size: ${FONT.REGULAR_16};
    border-radius: 1rem;

    &.style {
        box-shadow: ${SHADOW.BUTTON};
        text-shadow: 0.1rem 0.1rem 0.2rem ${COLOR.GRAY_200};
    }

    &.navy.style {
        box-shadow: ${SHADOW.BUTTON_NAVY};
        text-shadow: 0.1rem 0.1rem 0.2rem ${COLOR.GRAY_200};
    }

    &.white.style,
    &.revert.style,
    &.revert--red,
    &.revert--green {
        text-shadow: none;
    }

    &.mt {
        margin-top: 1.6rem;
    }

    &.lg {
        padding: 1rem 1.4rem;
    }

    &.xl {
        padding: 1.2rem 1.6rem;
    }

    &.xl.wide {
        padding: 1.2rem 4.2rem;
    }

    &.xl2 {
        padding: 1.4rem 1.8rem;
    }

    &.navy {
        background-color: ${COLOR.NAVY_200};
        color: ${COLOR.WHITE};
    }

    &.white {
        background-color: ${COLOR.WHITE};
    }

    &.gray {
        background-color: ${COLOR.GRAY_200};
        color: ${COLOR.WHITE};
    }

    &.green {
        background-color: ${COLOR.GREEN};
        color: ${COLOR.WHITE};
    }

    &.red {
        background-color: ${COLOR.RED};
        color: ${COLOR.WHITE};
    }

    &.w-half {
        width: 50%;
    }

    &.w-full {
        width: 100%;
    }

    &.revert {
        border: 0.1rem solid ${COLOR.NAVY_200};
        color: ${COLOR.NAVY_200};
    }

    &.revert--green {
        border: 0.1rem solid ${COLOR.GREEN};
        color: ${COLOR.GREEN};
    }

    &.revert--red {
        border: 0.1rem solid ${COLOR.RED};
        color: ${COLOR.RED};
    }
`;

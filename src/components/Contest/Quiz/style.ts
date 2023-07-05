import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';
import { AdminInputStyleProps } from 'types/style';

export const ContestProblemDesc = styled.h3`
    ${FONT.H3}
`;
export const Form = styled.form`
    width: 100%;
    margin-top: 3rem;
    padding: 3rem 4rem 3rem 7rem;
    background-color: ${COLOR.WHITE};
    border: 0.2rem solid ${COLOR.WHITE};
    border-radius: 1.2rem;
    box-shadow: ${SHADOW.CONTENTBOX_XLG};
`;

export const ContestFieldWrapper = styled.div`
    margin-top: 2.4rem;
`;

export const ContestField = styled.div`
    display: flex;
    align-items: center;

    & > span {
        margin-left: 2rem;
        font-size: ${FONT.REGULAR_20};
    }

    & + & {
        margin-top: 1.2rem;
    }
`;
export const ContestInput = styled.input<AdminInputStyleProps>`
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: 6rem;
    min-height: 6rem;
    background-color: ${COLOR.NAVY_100};
    border: 0.2rem solid ${COLOR.WHITE};
    border-radius: 100%;
    box-shadow: ${SHADOW.CONTENTBOX_LG};

    cursor: pointer;

    &::before {
        content: attr(data-count);
        ${FONT.BOLD_20}
    }

    &:checked {
        border: 0.4rem solid ${COLOR.ANSWERGREEN};
    }

    &:checked::after {
        content: '';
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -55%) rotate(-45deg);
        width: 3.2rem;
        height: 1rem;
        border: 0.5rem solid ${COLOR.ANSWERGREEN};
        border-top: none;
        border-right: none;
        transform-origin: top left;
        box-shadow: ${SHADOW.QUESTION};
        animation: start 0.3s ease forwards;
    }

    @keyframes start {
        0% {
            opacity: 0;
            width: 0;
            height: 0;
        }

        50% {
            opacity: 1;
            width: 0;
            height: 1rem;
        }
        100% {
            width: 3.2rem;
        }
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    button + button {
        margin-left: 1.2rem;
    }
`;

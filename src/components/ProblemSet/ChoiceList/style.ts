import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const ProblemOptionWrapper = styled.div`
    padding-top: 4rem;
`;

export const ProblemOption = styled.div`
    display: flex;
    align-items: center;

    & + & {
        padding-top: 2rem;
    }
`;
export const ProblemNumber = styled.input`
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
export const ProblemDesc = styled.p`
    margin-left: 3rem;
    font-size: ${FONT.REGULAR_20};
`;

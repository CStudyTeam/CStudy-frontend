import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    ${FONT.H4}
`;

export const Body = styled.div`
    width: 100%;
    margin-top: 3rem;
    padding: 3rem 4rem 3rem 7rem;
    background-color: ${COLOR.WHITE};
    border: 0.2rem solid ${COLOR.WHITE};
    border-radius: 1.2rem;
    box-shadow: 0.4rem 0.4rem 2.4rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);
`;

export const BodyTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const ProblemBodyTitle = styled.h3`
    ${FONT.H3}
`;
export const ProblemCategory = styled.div`
    font-size: ${FONT.REGULAR_20};
    padding-left: 6rem;
`;
export const ProblemContentWrapper = styled.div`
    padding-top: 3rem;
`;
export const ProblemContentTitle = styled.h4`
    ${FONT.H2}
`;
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
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);

    cursor: pointer;

    &::before {
        content: attr(data-count);
        ${FONT.BOLD_20}
    }

    &:checked {
        border: 0.4rem solid rgb(25, 204, 25);
    }

    &:checked::after {
        content: '';
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -55%) rotate(-45deg);
        width: 3.2rem;
        height: 1rem;
        border: 0.5rem solid rgb(25, 204, 25);
        border-top: none;
        border-right: none;
        transform-origin: top left;
        box-shadow: -0.2rem 0.2rem 0 0 rgba(0, 0, 0, 0.5);
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

export const ProblemSubmitWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 6rem;
`;
export const SubmitButton = styled.button`
    padding: 1.2rem 4rem;
    background-color: ${COLOR.NAVY_200};
    font-size: ${FONT.REGULAR_20};
    color: ${COLOR.WHITE};
    border-radius: 1.2rem;
`;

export const ProblemAnswerWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5rem;
`;
export const ProblemAnswerTitle = styled.div`
    ${FONT.BOLD_20}
`;
export const ProblemAnswerNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 6rem;
    min-height: 6rem;
    background-color: ${COLOR.NAVY_100};
    margin-left: 1rem;
    ${FONT.BOLD_20}
    border: 0.5rem solid rgb(25, 204, 25);
    border-radius: 100%;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);
`;
export const Footer = styled.div`
    margin: 5rem 0 3rem;
    padding: 4rem 3rem;
    background-color: ${COLOR.NAVY_100};
    border: 0.1rem solid ${COLOR.WHITE};
    border-radius: 1.2rem;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12),
        inset -0.1rem -0.1rem 0.2rem rgba(0, 0, 0, 0.2);
`;
export const FooterComment = styled.div`
    ${FONT.BOLD_20}
`;
export const FooterCommentDesc = styled.p`
    margin-top: 1.2rem;
    font-size: ${FONT.REGULAR_20};
`;

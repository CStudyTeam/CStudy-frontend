import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { AdminInputStyleType } from 'types/problemForm';

export const AdminInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & + & {
        margin-top: 2rem;
    }
`;

export const AdminBasicLabel = styled.label`
    ${FONT.BOLD_18}
`;

export const AdminBasicInput = styled.input<AdminInputStyleType>`
    margin-top: 1rem;
    padding: 1.2rem;
    border: ${(props) => (props.errors[props.name] ? `0.1rem solid ${COLOR.RED}` : `0.1rem solid ${COLOR.WHITE}`)};
    box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
`;

export const AdminTextArea = styled.textarea<AdminInputStyleType>`
    margin-top: 1rem;
    padding: 1.2rem;
    border: ${(props) => (props.errors[props.name] ? `0.1rem solid ${COLOR.RED}` : `0.1rem solid ${COLOR.WHITE}`)};
    box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
    resize: none;
`;

export const AdminRadioLabel = styled.label`
    display: flex;
    align-items: center;
    ${FONT.BOLD_18}

    & > span {
        margin-left: 1.2rem;
    }
`;

export const AdminRadioInput = styled.input<AdminInputStyleType>`
    appearance: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: 3.5rem;
    min-height: 3.5rem;
    background-color: ${COLOR.NAVY_100};
    border: ${(props) => (props.errors[props.name] ? `0.2rem solid ${COLOR.RED}` : `0.2rem solid ${COLOR.WHITE}`)};
    border-radius: 100%;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);

    &:checked {
        border: 0.3rem solid rgb(25, 204, 25);
    }

    &:checked::before {
        content: '';
        position: absolute;
        top: 65%;
        left: 70%;
        transform: translate(-50%, -50%) rotate(-45deg);
        width: 3.2rem;
        height: 1rem;
        border: 0.5rem solid rgb(25, 204, 25);
        border-top: none;
        border-right: none;
        transform-origin: top left;
        box-shadow: -0.2rem 0.2rem 0;
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
            width: 3rem;
        }
    }
`;

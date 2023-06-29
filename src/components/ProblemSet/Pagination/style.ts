import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

interface PaginationOptionProps {
    white?: boolean;
}

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LeftArrowButton = styled.button<PaginationOptionProps>`
    position: relative;
    width: 3.6rem;
    height: 3.6rem;
    background-color: ${({ white }) => (white ? COLOR.WHITE : COLOR.NAVY_100)};
    border-radius: 100%;
    border: 0.1rem solid ${COLOR.WHITE};
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        width: 1.2rem;
        height: 1.2rem;
        border-top: 0.2rem solid ${COLOR.BLACK};
        border-left: 0.2rem solid ${COLOR.BLACK};
    }
`;

export const PaginationButtonWrapper = styled.div<PaginationOptionProps>`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 16rem;
    height: 3.6rem;
    margin: 0 1.5rem;
    background-color: ${({ white }) => (white ? COLOR.WHITE : COLOR.NAVY_100)};
    border-radius: 1rem;
    border: 0.1rem solid ${COLOR.WHITE};
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);
    z-index: 0;
`;

export const PaginationButton = styled.button`
    ${FONT.BOLD_20}
    position: relative;

    &.active {
        color: ${COLOR.WHITE};
    }

    &.active::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1.7rem 1.5rem;
        background-color: ${COLOR.NAVY_200};
        border-radius: 0.8rem;
        z-index: -1;
    }
`;

export const RightArrowButton = styled.button<PaginationOptionProps>`
    position: relative;
    width: 3.6rem;
    height: 3.6rem;
    background-color: ${({ white }) => (white ? COLOR.WHITE : COLOR.NAVY_100)};
    border-radius: 100%;
    border: 0.1rem solid ${COLOR.WHITE};
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 1.2rem;
        height: 1.2rem;
        border-top: 0.2rem solid ${COLOR.BLACK};
        border-right: 0.2rem solid ${COLOR.BLACK};
    }
`;

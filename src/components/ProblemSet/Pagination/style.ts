import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LeftArrowButton = styled.button`
    position: relative;
    width: 3.6rem;
    height: 3.6rem;
    background-color: ${COLOR.NAVY_100};
    border-radius: 100%;

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

export const PaginationButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 16rem;
    height: 3.6rem;
    margin: 0 1.5rem;
    background-color: ${COLOR.NAVY_100};
    border-radius: 1rem;
`;

export const PaginationButton = styled.button`
    ${FONT.BOLD_20}
`;

export const RightArrowButton = styled.button`
    position: relative;
    width: 3.6rem;
    height: 3.6rem;
    background-color: ${COLOR.NAVY_100};
    border-radius: 100%;

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

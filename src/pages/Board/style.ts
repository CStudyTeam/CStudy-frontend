import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const PageTitle = styled.div`
    ${FONT.H4};
    margin-top: 8rem;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 0.1rem solid ${COLOR.GRAY_100};
    padding-bottom: 2rem;
`;

export const Filter = styled.button`
    &:hover {
        background: ${COLOR.NAVY_100};
    }

    &.active {
        background: ${COLOR.GREEN};
        color: ${COLOR.WHITE};
        font-weight: 700;
        text-shadow: 0.1rem 0.1rem 0.1rem ${COLOR.GRAY_200};
    }

    padding: 1.2rem;
    border-radius: 5rem;
    background: ${COLOR.GRAY_50};
    text-align: center;
    margin-right: 2rem;
    cursor: pointer;
`;

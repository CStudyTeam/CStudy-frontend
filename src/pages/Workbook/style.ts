import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8rem;
`;

export const PageTitle = styled.div`
    ${FONT.H4};
`;

export const SearchInput = styled.input`
    width: 34.8rem;
    padding: 1.2rem;
    border: 1px solid ${COLOR.NAVY_200};
    border-radius: 0.8rem;
    margin-right: 1rem;
`;

export const WorkBookCards = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    grid-gap: 3rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const PaginationWrapper = styled.div`
    padding: 4rem 0 6rem;
`;

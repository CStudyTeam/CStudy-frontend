import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    width: 34.8rem;
    padding: 1.2rem;
    border: 1px solid ${COLOR.NAVY_200};
    border-radius: 0.8rem;
    margin-right: 1rem;
`;

export const PaginationWrapper = styled.div`
    padding: 4rem 0 6rem;
`;

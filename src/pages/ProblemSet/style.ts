import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    ${FONT.H4}
`;

export const FilterWrapper = styled.div`
    display: flex;
`;

export const Body = styled.div`
    width: 100%;
    padding-top: 6rem;
`;

export const PaginationWrapper = styled.div`
    padding: 4rem 0 6rem;
`;

import styled from 'styled-components';
import { FONT } from './../../../constants/Font';

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    padding-top: 3.5rem;
`;

export const LogoWrap = styled.h1`
    flex: 1;
`;

export const LogoImg = styled.img``;

export const Nav = styled.nav`
    display: flex;
    flex: 3;

    & > a {
        padding: 0.5rem 1.5rem;
        font-size: ${FONT.REGULAR_16};
        color: #181818;
        margin-right: 1rem;
    }

    & > a:last-child {
        margin-right: 0;
    }
`;
export const Sign = styled.div`
    display: flex;
    justify-content: space-between;

    & > button {
        padding: 0.5rem;
        font-size: ${FONT.REGULAR_16};
    }

    & > button:first-child {
        margin-right: 1.4rem;
    }
`;

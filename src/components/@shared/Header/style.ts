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

export const Nav = styled.nav`
    flex: 3;
`;

export const NavList = styled.ul`
    display: flex;
    font-size: ${FONT.REGULAR_16};
    color: #181818;
`;

export const NavItem = styled.li`
    margin-right: 1rem;

    & > a {
        display: inline-block;
        padding: 0.5rem 1.5rem;
    }
`;

export const Sign = styled.div`
    display: flex;

    & > button {
        padding: 0.5rem;
        font-size: ${FONT.REGULAR_14};
    }

    & > button:first-child {
        margin-right: 1.4rem;
    }
`;

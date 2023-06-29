import styled from 'styled-components';
import { FONT } from './../../../constants/Font';
import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    padding: 2rem 0;
    margin-top: 2.5rem;
    background-color: ${COLOR.WHITE};
    border-radius: 1.2rem;
    box-shadow: ${SHADOW.CONTENTBOX_LG};
`;

export const LogoWrap = styled.h1`
    flex: 1;
    padding-left: 1.8rem;
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

    &:hover ul {
        display: block;
    }

    & > a {
        display: inline-block;
        padding: 0.5rem 1.5rem;
    }
`;

export const ContestCategory = styled.ul`
    display: none;
    position: absolute;

    & > li {
        margin-top: 1rem;
    }
`;

export const Sign = styled.div`
    display: flex;
    padding-right: 1.8rem;

    & > button {
        padding: 0.5rem;
        font-size: ${FONT.REGULAR_14};
    }

    & > button:first-child {
        margin-right: 1.4rem;
    }
`;

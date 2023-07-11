import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyleNavLink = styled(NavLink)`
    &.active {
        font-weight: bold;
    }
`;

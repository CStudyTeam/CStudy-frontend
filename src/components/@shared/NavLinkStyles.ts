import { FONT } from 'constants/Font';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyleNavLink = styled(NavLink)`
    &.active {
        font-weight: bold;
    }

    &.mypage {
        font-size: ${FONT.REGULAR_14};
        padding: 0.5rem;
    }
`;
